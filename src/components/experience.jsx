import { experience } from '../content'
import ExperienceCard from './experience-card'

const Experience = () => (
  <section id='experience'>
    <h2 className='text-2xl my-6 text-slate-200'>Experience</h2>
    <ol>
      {experience.map((item) => (<ExperienceCard key={item.title} {...item} />))}
    </ol>
  </section>
)

export default Experience
