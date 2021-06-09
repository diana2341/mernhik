const router = require('express').Router();
let Task = require('../models/task.model')

router.route('/').get((req,res)=>{
    Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error' + err))
})

router.route('/add').post((req,res) => {
    const user_id = req.body.user_id;
    const name = req.body.name;
    const description = req.body.description;
    const urgency_level = req.body.urgency_level;
    const due_date = Date.parse(req.body.due_date);

    const newTask = new Task({
        user_id,
        name,
        description,
        urgency_level,
        due_date
    })

    newTask.save()
    .then(() => res.json('task Added!'))
    .catch((err => res.status(400).json('Error' + err) ))
})

router.route(':/id').get((req,res) => {
    Task.findById(req.params.id)
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error' + err))
})

router.route('/:id').delete((req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Project deleted!'))
    .catch(err => res.status(400).json('Error' + err))
})

router.route('/update/:id').post((req,res)=>{
    Task.findById(req.params.id)
    .then(task => {
        task.user_id=req.body.user_id
        task.name = req.body.name
        task.description = req.body.description
        task.urgency_level = req.body.urgency_level
        task.due_date = req.body.due_date

        task.save()
        .then((tasks)=>res.json(tasks))
        .catch(err => res.status(400).json('Error:' + err))

    })
})
module.exports= router;