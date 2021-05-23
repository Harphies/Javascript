import React from 'react'
import { Form, Formik } from 'formik'
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Box,
	Button,
} from '@chakra-ui/react'
import { Wrapper } from 'src/components/Wrapper'
import { InputField } from 'src/components/InputField'
import { useMutation } from 'urql'

interface registerProps {}

const REGISTER_MUTATION = `
mutation Register($username: String!, $password:String!) {
	register(options: {username: $username, password: $password}) {
		errors {
			field
			message
		}
		user {
			id
			username
		}
	}
}
`

const Register: React.FC<registerProps> = ({}) => {
	const [, register] = useMutation(REGISTER_MUTATION)
	return (
		<Wrapper variant='small'>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={values => {
					return register(values)
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField
							name='username'
							placeholder='username'
							label='Username'
						></InputField>
						<Box mt={4}>
							<InputField
								name='password'
								placeholder='password'
								label='Password'
								type='password'
							></InputField>
						</Box>
						<Button
							mt={4}
							type='submit'
							colorScheme='teal'
							isLoading={isSubmitting}
						>
							Register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	)
}

export default Register
