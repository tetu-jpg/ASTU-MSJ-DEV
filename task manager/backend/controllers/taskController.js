const taskService = require("../services/taskService")
exports.getTasks=(req,res) =>{
    const tasks =taskService.getAllTasks();
    res.status(200).json(tasks)

}
exports.getTaskById =(req,res) =>{
    const id =Number(req.params.id)
    const task = taskService.getTaskById(id)
    if (!task){
        return res.status(404).json({
            message: "Tassk not found"
        })
    }
    res.status(200).json(task)


}
exports.createTask = (req,res) =>{
    const task = taskService.createTask(req.body)
    res.status(201).json(task)
}
exports.deleteTask =(req,res) =>{
    const id =Number(req.params.id)
    const result = taskService.deleteTask(id)
    if (!result){
        return res.status(404).json({
            message: "Tassk not found"
        })
    }
    res.status(200).json({
        message:"Task deleted"
    })
}

exports.updateTask = (req,res) =>{
    const id =Number(req.params.id)
    const result = taskService.updateTask(id, req.body)
    if (!result){
        return res.status(404).json({
            message: "Task not found"
        })
    }
    res.status(200).json(task)
       
 
}