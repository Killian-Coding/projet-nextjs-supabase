import { getTasks } from '@/app/actions/task'
import TaskForm from 'app/tasks/TaskForm'
import TaskList from 'app/tasks/TaskList'

export const dynamic = 'force-dynamic'

export default async function TasksPage() {
  const tasks = await getTasks()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestionnaire de Tâches</h1>
        </header>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1"><div className="sticky top-8"><TaskForm /></div></div>
          <div className="lg:col-span-2"><TaskList initialTasks={tasks} /></div>
        </div>
      </div>
    </div>
  )
}
