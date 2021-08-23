import { Router } from 'express'
import { saveTask, deleteTask, getTask, getTaskCount, getTasks, updateTask } from '../controllers/tasks'

const router = Router()

/**
 * @swagger
 * /tasks:
 * get:
 *      summary: Esto obtiene todas las tareas
 */
router.get('/tasks', getTasks)
/**
 * @swagger
 * /tasks/count:
 * get:
 *    summary: Esto obtiene el numero total de las tareas
 */
router.get('/tasks/count', getTaskCount)
/**
 * @swagger
 * /tasks:
 * get:
 *    summary: Esto obtiene una tarea por ID
 */
router.get('/tasks/:id', getTask)
/**
 * @swagger
 * /tasks:
 * post:
 *    summary: Esto guarda una tarea en la BD
 */
router.post('/tasks', saveTask)
/**
 * @swagger
 * /tasks:
 * delete:
 *    summary: Esto elimina una tarea por su ID
 */
router.delete('/tasks/:id', deleteTask)
/**
 * @swagger
 * /tasks:
 * put:
 *    summary: Esto actualiza una tarea por su ID
 */
router.put('/tasks/:id', updateTask)



export default router
