import Comments from '@/components/Comments'
import { TaskStatus } from '@/constants'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

const TaskExample = {
  id: '1',
  name: 'Task 1',
  description: 'This is a task description',
  statusId: 2
}

export default async function TaskPage({
  params
}: {
  params: { projectId: string; taskId: string }
}) {
  const getColor = (statusId: number) => {
    if (statusId === 1) return 'default'
    else if (statusId === 2) return 'primary'
    else if (statusId === 3) return 'secondary'
    else if (statusId === 4) return 'success'
    else if (statusId === 5) return 'danger'
    else return 'default'
  }

  return (
    <>
      <div className='flex flex-col gap-4'>
        <Link href={`/project/${params.projectId}`} className='font-light'>
          {' '}
          &lt; Back to all tasks
        </Link>
        <div className='flex items-center gap-4'>
          <h2 className='text-2xl font-semibold'>Task Page</h2>
          <Chip color={getColor(TaskExample.statusId)}>
            {TaskStatus[TaskExample.statusId]}
          </Chip>
        </div>
        <p>{TaskExample.description}</p>
        <Comments comments={[]} />
      </div>
    </>
  )
}
