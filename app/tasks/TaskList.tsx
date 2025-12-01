// app/tasks/TaskList.tsx
'use client'

import { Task } from '@/lib/types'
import TaskCard from './TaskCard'

interface TaskListProps {
  initialTasks: Task[]
}

export default function TaskList({ initialTasks }: TaskListProps) {
  if (!initialTasks || initialTasks.length === 0) {
    return <p>Aucune tâche disponible.</p>
  }

  return (
    <div className="flex flex-col gap-4">
      {initialTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
