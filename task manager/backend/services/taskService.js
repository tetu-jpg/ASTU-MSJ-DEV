const tasks= require ("../data/taskData");
exports.getAllTasks =()  =>{
    return tasks;
};
exports.getTaskById = (id)=>{
    return tasks.find( task => task.id === id);
}
exports.createTask=(newTask) =>{
    const task ={
        id: tasks.length+1,
        title: newTask.title,
        completed: false,
        priority: newTask.priority
    }
    tasks.push(task)
    return task
}
exports.deleteTask  = (id)=>{

    const index = tasks.findIndex(task => task.id === id)
    if ( index === -1){
        return false
    }
    tasks.splice(index, 1)
    return true
} 
exports.updateTask = (id, data) => {
    const task = tasks.find(task => task.id === id)
    if (!task) {
        return null
    }
    if (data.completed !== undefined) {
        task.completed = data.completed
    }
    return task
}