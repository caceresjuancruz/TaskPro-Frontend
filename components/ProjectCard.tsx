'use client'
import { Card, CardBody } from '@nextui-org/card'
import { useRouter } from 'next/navigation'

interface ProjectCardInterface {
  id: number
  title: string
}

const ProjectCard = ({ id, title }: ProjectCardInterface) => {
  const router = useRouter()

  return (
    <Card
      shadow='sm'
      fullWidth
      isHoverable
      isPressable
      allowTextSelectionOnPress
      onClick={() => router.push(`/project/${id}`)}
    >
      <CardBody>
        <p>{title}</p>
      </CardBody>
    </Card>
  )
}

export default ProjectCard
