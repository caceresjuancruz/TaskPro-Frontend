'use client'
import { Card, CardBody } from '@nextui-org/card'
import { useParams, useRouter } from 'next/navigation'

interface TaskCardInterface {
  id: number
  title: string
  description: string
  statusId: number
}

const TaskCard = ({ id, title, description, statusId }: TaskCardInterface) => {
  const router = useRouter()
  const params = useParams<{ projectId: string }>()
  return (
    <Card
      shadow='sm'
      fullWidth
      isHoverable
      isPressable
      allowTextSelectionOnPress
      onClick={() => router.push(`/project/${params.projectId}/task/${id}`)}
    >
      <CardBody>
        <p>{title}</p>
      </CardBody>
    </Card>
  )
}

export default TaskCard
