const getAllTasks = async (req, res) => {
    res.send('devolviendo lista de resultados');
}

const getTask = (req, res) => {
    res.send('crear una sola lista de tareas');
}

const createTask = (req, res) => {
    res.send('crear una lista de tareas');
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