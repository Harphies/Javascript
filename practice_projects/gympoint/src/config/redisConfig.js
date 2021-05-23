import 'dotenv'.config()
import redis from 'redis'

const Redisclient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
})

export default Redisclient