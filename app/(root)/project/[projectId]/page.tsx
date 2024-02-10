import TaskCard from '@/components/TaskCard'
import Link from 'next/link'

const TaskMock = [
  {
    id: 1,
    title: 'Create a new project',
    description: 'Create a new project for the TaskPro app',
    statusId: 1
  },
  {
    id: 2,
    title: 'Create a new project',
    description: 'Create a new project for the TaskPro app',
    statusId: 1
  },
  {
    id: 3,
    title: 'Create a new project',
    description: 'Create a new project for the TaskPro app',
    statusId: 1
  }
]

export default async function ProjectPage() {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <Link href='/' className='font-light'>
          {' '}
          &lt; Back to my projects
        </Link>
        <h2 className='text-2xl font-semibold'>Project Page</h2>
        <h3 className='text-md font-light'>Tasks:</h3>
        <div className='flex flex-col gap-3'>
          {TaskMock && TaskMock.length > 0 ? (
            TaskMock.map(task => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                statusId={task.statusId}
              />
            ))
          ) : (
            <p>No tasks found</p>
          )}
        </div>
      </div>
    </>
  )
}
