

const API="http://localhost:5000/api/tasks"

async function Tasks() {
    const response =await fetch(API)
    const tasks =await response.json()

    console.log(tasks)

    const container=document.getElementById("tasks")
    container.innerHTML="";

    tasks.forEach(task => {
        container.innerHTML+=`
        <div class="container">
        <div class="child">
            <h3>${task.title}</h3>
            <p>Priority:${task.priority}</p>
            <p>Completed:${task.completed}</p>
            <button onclick="deleteTask(${task.id})">
            Delete
            </button>
            <button onclick="updateTask(${task.id}, ${task.completed})">
            ${task.completed ? "Undo ✓" : "Complete ✓"}
            </button>

        </div>
        <div>
        `;
    });
}
Tasks()

const form = document.getElementById("taskform")
form.addEventListener("submit", async(e) => {
    e.preventDefault()
     const task= {
        title:document.getElementById("title").value,
        priority:document.getElementById("priority").value
     };
     await fetch(API, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)

        })
        form.reset()
        Tasks()
     })
async function deleteTask(id) {
    await fetch (`${API}/${id}`, {
        method:"DELETE"
    })
    Tasks()

}

async function updateTask(id,completed) {
    await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            completed: !completed
        })

        })
        
    Tasks()
}