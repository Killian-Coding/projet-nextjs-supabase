'use client'

import { updateTaskStatus, deleteTask } from '@/app/actions/task'
import { Task } from '@/lib/types'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useState } from 'react'

interface TaskCardProps {
  task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
  const [isUpdating, setIsUpdating] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const statusConfig = {
    todo: { label: 'À faire', color: 'bg-yellow-100 text-yellow-800 border-yellow-200'},
    in_progress: { label: 'En cours', color: 'bg-blue-100 text-blue-800 border-blue-200', },
    done: { label: 'Terminé', color: 'bg-green-100 text-green-800 border-green-200' }
  }
  
  const currentStatus = statusConfig[task.status]
  
  async function handleStatusChange(newStatus: Task['status']) {
    setIsUpdating(true)
    try { await updateTaskStatus(task.id, newStatus) } 
    catch { alert('Échec de mise à jour') } 
    finally { setIsUpdating(false) }
  }
  
  async function handleDelete() {
    if (!confirm('Supprimer cette tâche ?')) return
    setIsDeleting(true)
    try { await deleteTask(task.id) } 
    catch { alert('Échec de suppression'); setIsDeleting(false) }
  }
  
  return (
    <Card className={`p-6 ${isDeleting ? 'opacity-50' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{task.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${currentStatus.color} flex items-center gap-1`}>
          <span>{currentStatus.emoji}</span>{currentStatus.label}
        </span>
      </div>
      {task.description && <p className="text-gray-600 mb-4">{task.description}</p>}
      <div className="flex flex-wrap gap-2">
        {task.status !== 'in-progress' && <Button variant="secondary" size="sm" onClick={() => handleStatusChange('in-progress')} disabled={isUpdating || isDeleting}>Démarrer</Button>}
        {task.status !== 'done' && <Button variant="primary" size="sm" onClick={() => handleStatusChange('done')} disabled={isUpdating || isDeleting}>Terminer</Button>}
        {task.status === 'done' && <Button variant="secondary" size="sm" onClick={() => handleStatusChange('todo')} disabled={isUpdating || isDeleting}>Réactiver</Button>}
        <Button variant="danger" size="sm" onClick={handleDelete} disabled={isUpdating || isDeleting}>Supprimer</Button>
      </div>
      <p className="text-xs text-gray-400 mt-3">Créé le {new Date(task.created_at).toLocaleDateString('fr-FR')}</p>
    </Card>
  )
}
