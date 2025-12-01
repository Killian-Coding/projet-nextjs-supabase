import { supabase } from '@/lib/supabaseClient'
import { Task } from '@/lib/types'

export async function createTask(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string | null

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, description, status: 'todo' }])

  if (error) throw error
  return data
}

export async function getTasks(): Promise<Task[]> {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updateTaskStatus(id: string, status: Task['status']) {
  const { data, error } = await supabase
    .from('tasks')
    .update({ status })
    .eq('id', id)

  if (error) throw error
  return data
}

export async function deleteTask(id: string) {
  const { data, error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

  if (error) throw error
  return data
}
