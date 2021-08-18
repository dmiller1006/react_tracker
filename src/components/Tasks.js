import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Dentist Appointment',
            day: 'Apr 5th at 4:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Baseball Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 4,
            text: 'Radio Appointment',
            day: 'Jul 5th at 10:30pm',
            reminder: true,
        }
    ])
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
