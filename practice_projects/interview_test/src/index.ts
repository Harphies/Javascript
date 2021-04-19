import * as dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import mongoose from 'mongoose'
import authorizedRoute from './routes/index'

dotenv.config()

if(!process.env.PORT) {
    process.exit(1)
}

//db connection
const uri: string ="mongodb+srv://oduwole:oduwole321@firedevice.kp4c8.mongodb.net/sensors?"
mongoose.connect(uri, (err: any) => {
    if(err) {
        console.log(err.message)
    } else {
        console.log(`connection to MongoDB`)
    }
})


const PORT: number = parseInt(process.env.PORT  as string, 10)

const app = express()

// middlesrwares
app.use(helmet())
app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use('/api', authorizedRoute)

app.use((_, res, next) => {
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header('Access-Control-Allow-Credentials', "true")
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  
    next()
  })


