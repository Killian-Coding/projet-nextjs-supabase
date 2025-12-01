'use server'

import { createServerSupabase } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import type { Task, TaskStatus } from '@/lib/types'

/**
 * Récupère toutes les tâches
 */
export async function getTasks(): Promise<Task[]> {
 const supabase = await createServerSupabase()
  
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching tasks:', error)
    throw new Error('Failed to fetch tasks')
  }
  
  return data || []
}

/**
 * Crée une nouvelle tâche
 */
export async function createTask(formData: FormData) {
const supabase = await createServerSupabase()
  
  
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  
  if (!title || title.trim().length === 0) {
    throw new Error('Title is required')
  }
  
  const { data, error } = await supabase
    .from('tasks')
    .insert({ 
      title: title.trim(), 
      description: description?.trim() || null,
      status: 'todo'
    })
    .select()
    .single()
  
  if (error) {
    console.error('Error creating task:', error)
    throw new Error('Failed to create task')
  }
  
  revalidatePath('/tasks')
  return data
}

/**
 * Met à jour le statut
 */
export async function updateTaskStatus(id: string, status: TaskStatus) {
const supabase = await createServerSupabase()
  
  
  const { error } = await supabase
    .from('tasks')
    .update({ 
      status,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
  
  if (error) {
    console.error('Error updating task:', error)
    throw new Error('Failed to update task')
  }
  
  revalidatePath('/tasks')
}


/**
 * Supprime une tâche
 */
export async function deleteTask(formData: FormData) {
  const supabase = await createServerSupabase()

  const id = formData.get("id") as string

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id)

  if (error) {
    console.error("Error deleting task:", error)
    throw new Error("Failed to delete task")
  }

  revalidatePath("/tasks")
}
