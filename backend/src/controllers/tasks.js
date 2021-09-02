import { connect } from "../database";

export const getTasks = async (req, res) => {
    let connection = await connect()
    let [rows] = await connection.query("SELECT * FROM tasks")
    res.json(rows)
}

export const getTaskCount = async (req, res) => {
    let connection = await connect()
    let [rows] = await connection.query("SELECT COUNT (*) FROM tasks")
    res.json(rows[0]["COUNT (*)"])
}

export const getTask = async (req, res) => {
    let connection = await connect()
    let [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [req.params.id])
    !req.params.id ? res.status(500).send('Something broke!') : res.json(rows[0])
}

export const saveTask = async (req, res) => {
    let connection = await connect()
    let [result] = await connection.query("INSERT INTO tasks(title, description) VALUES (?, ?)", [
        req.body.title,
        req.body.description,
    ])
    !req.body.title && req.body.description ? res.status(500).send('Something broke!') : res.json({ id: result.insertId, ...req.body })
}

export const deleteTask = async (req, res) => {
    let connection = await connect()
    await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id])
    res.sendStatus(204)
}

export const updateTask = async (req, res) => {
    let connection = await connect()
    let results = await connection.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id])
    results.sendStatus(204)
}