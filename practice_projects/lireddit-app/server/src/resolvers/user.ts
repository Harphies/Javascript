import { User } from '../entities/User'
import { MyContext } from 'src/types'
import {
	Resolver,
	Mutation,
	Field,
	Arg,
	InputType,
	Ctx,
	ObjectType,
	Query,
} from 'type-graphql'
import argon2 from 'argon2'

@InputType()
class UsernamePasswordInput {
	@Field()
	username: string
	@Field()
	password: string
}

@ObjectType()
class FieldError {
	@Field()
	field: string
	@Field()
	message: string
}

@ObjectType()
class UserResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]

	@Field(() => User, { nullable: true })
	user?: User
}

@Resolver()
export class UserResolver {
	@Query(() => User, { nullable: true })
	async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
		console.log('req session', req.session)
		if (!req.session.userId) {
			return null
		}

		const user = await em.findOne(User, { id: req.session.userId })
		return user
	}
	@Mutation(() => UserResponse)
	async register(
		@Arg('options') options: UsernamePasswordInput,
		@Ctx() { em, req }: MyContext
	): Promise<UserResponse> {
		if (options.username.length <= 2) {
			return {
				errors: [
					{
						field: 'username',
						message: 'length must be greater than 2',
					},
				],
			}
		}

		if (options.password.length <= 3) {
			return {
				errors: [
					{
						field: 'password',
						message: 'the password must be greater than 3',
					},
				],
			}
		}

		const hashedPassword = await argon2.hash(options.password)
		const user = em.create(User, {
			username: options.username,
			password: hashedPassword,
		})
		try {
			await em.persistAndFlush(user)
		} catch (err) {
			if (err.code === '23505') {
				return {
					errors: [
						{
							field: 'username',
							message: 'username already exists',
						},
					],
				}
			}
		}
		return { user }
	}

	@Mutation(() => UserResponse)
	async login(
		@Arg('options') options: UsernamePasswordInput,
		@Ctx() { em, req }: MyContext
	): Promise<UserResponse> {
		const user = await em.findOne(User, { username: options.username })
		if (!user) {
			return {
				errors: [
					{
						field: 'username',
						message: `that username ${options.username} does not exist`,
					},
				],
			}
		}
		const validUser = await argon2.verify(user.password, options.password)
		if (!validUser) {
			return {
				errors: [
					{
						field: 'password',
						message: `the password ${options.password} does not match`,
					},
				],
			}
		}

		req.session.userId = user.id
		req.session.ha = 'nice guy!'

		return {
			user,
		}
	}
}
