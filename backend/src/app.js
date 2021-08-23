import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";
import tasksRoutes from './routes/tasks'

const specs = swaggerJSDoc(options)

const app = express()

//Middelwares
app.use(cors())//para conectar backend
app.use(morgan("dev")) //para ver las peticiones que van llegando
app.use(express.json())
app.use(tasksRoutes)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))



export default app