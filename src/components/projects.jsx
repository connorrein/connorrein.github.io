import { projects } from '../content'
import ProjectCard from './project-card'

const Projects = () => (
  <section id='projects'>
    <h2 className='text-2xl my-6 text-slate-200'>Projects</h2>
    <ul>
      {projects.map((project) => (<ProjectCard key={project.title} {...project} />))}
    </ul>
  </section>
)

export default Projects
