'use client'

import { createTask } from '@/app/actions/tasks'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Card from '@/components/ui/Card'

export default function TaskForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)
    try {
      await createTask(formData)
      const form = document.getElementById('task-form') as HTMLFormElement
      form.reset()
    } catch {
      setError('Échec de création de la tâche. Réessayez.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">✨ Créer une nouvelle tâche</h2>
      <form id="task-form" action={handleSubmit} className="space-y-4">
        <Input type="text" name="title" label="Titre" placeholder="Ex: Finaliser le rapport" required disabled={isSubmitting} />
        <Textarea name="description" label="Description (optionnel)" rows={3} placeholder="Détails..." disabled={isSubmitting} />
        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>}
        <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? '⏳ Création...' : '➕ Créer la tâche'}</Button>
      </form>
    </Card>
  )
}
