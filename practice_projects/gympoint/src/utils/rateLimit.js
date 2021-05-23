import RateLimit from 'express-rate-limit'
import RateLimitRedis from 'rate-limit-redis'
import { Redisclient } from '../config/redisConfig'

const config = new RateLimit({
	store: new RateLimitRedis({
		client: Redisclient,
	}),
	windowMs: 1000 * 60 * 15,
	max: 200,
})

export default config
// maximum of 200 request in every 15 minutes
