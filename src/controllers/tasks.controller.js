const pool = require("../db");

const getAllTasks = async (req, res) => {
    res.send('devolviendo lista de resultados');
}

const getTask = (req, res) => {
    res.send('crear una sola lista de tareas');
}

const createTask = async (req, res) => {
    const { title, description } = req.body

    try {
        const result = await pool.query(
            "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
            [title, description]
        );
    
        res.json(result.rows[0]);
        
    } catch (error) {
        res.json({error:error.message})
    }
}

const deleteTask = (req, res) => {
    res.send('borrar una lista de tareas');
}

const updateTask = (req, res) => {
    res.send('actualizar una lista de tareas');
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}