import ProjectCard from '@/components/ProjectCard'

const ProjectsMock = [
  {
    id: 1,
    name: 'TaskPro',
    statusId: 1
  },
  {
    id: 2,
    name: 'TaskPro',
    statusId: 1
  },
  {
    id: 3,
    name: 'TaskPro',
    statusId: 1
  }
]

export default function Home() {
  return (
    <>
      <h3 className='text-2xl font-semibold'>Projects</h3>
      <div className='mt-4 flex flex-col gap-3'>
        {ProjectsMock && ProjectsMock.length > 0 ? (
          ProjectsMock.map(project => (
            <ProjectCard
              key={project.id}
              title={project.name}
              id={project.id}
            />
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
    </>
  )
}
