'use client'

import { useEffect, useState } from 'react'
import { Task } from '@/lib/types'
import TaskCard from './TaskCard'
import { supabase } from '@/lib/supabaseClient'

type Status = 'todo' | 'in_progress' | 'done'

interface TaskListProps {
  initialTasks: Task[]
}

export default function TaskList({ initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const channel = supabase
      .channel('tasks-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tasks' },
        (payload: any) => {  // ici on met any pour simplifier le type
          if (payload.eventType === 'INSERT') {
            setTasks(prev => [payload.new as Task, ...prev])
          } else if (payload.eventType === 'UPDATE') {
            setTasks(prev =>
              prev.map(t => (t.id === payload.new.id ? (payload.new as Task) : t))
            )
          } else if (payload.eventType === 'DELETE') {
            setTasks(prev => prev.filter(t => t.id !== payload.old.id))
          }
        }
      )
      .subscribe(status => {
        if (status === 'SUBSCRIBED') setIsConnected(true)
      })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const tasksByStatus: Record<Status, Task[]> = {
    todo: tasks.filter(t => t.status === 'todo'),
    in_progress: tasks.filter(t => t.status === 'in_progress'),
    done: tasks.filter(t => t.status === 'done')
  }

  const statuses: Status[] = ['todo', 'in_progress', 'done']

  return (
    <div className="space-y-8">
      {/* Indicateur de connexion */}
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
          isConnected ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isConnected ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
          }`}
        />
        <span className="text-sm font-medium">
          {isConnected ? '🔴 Live - Mises à jour en temps réel' : '⏳ Connexion...'}
        </span>
      </div>

      {statuses.map(status => (
        <div key={status}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            {status === 'todo'
              ? '📝 À faire'
              : status === 'in_progress'
              ? '⚡ En cours'
              : '✅ Terminé'}
            <span className="text-sm font-normal text-gray-500">
              ({tasksByStatus[status].length})
            </span>
          </h2>
          <div className="grid gap-4">
            {tasksByStatus[status].length === 0 ? (
              <p className="text-gray-400 italic">Aucune tâche</p>
            ) : (
              tasksByStatus[status].map(task => <TaskCard key={task.id} task={task} />)
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
