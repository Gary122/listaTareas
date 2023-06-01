const { Router } =require('express');

const router = Router();

router.get('/tasks',(req,res)=>{
    res.send('retornar una lista de tareas');
})

router.get('/tasks/10',(req,res)=>{
    res.send('crear una sola lista de tareas');
})

router.post('/tasks',(req,res)=>{
    res.send('crear una lista de tareas');
})

router.delete('/tasks',(req,res)=>{
    res.send('borrar una lista de tareas');
})

router.put('/tasks',(req,res)=>{
    res.send('actualizar una lista de tareas');
})



module.exports = router;