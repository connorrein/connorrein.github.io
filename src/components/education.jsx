import { education } from '../content'
import ExperienceCard from './experience-card'

const Education = () => (
  <section id='education'>
    <h2 className='text-2xl my-6 text-slate-200'>Education</h2>
    <ol>
      {education.map((item) => (<ExperienceCard key={item.title} {...item} />))}
    </ol>
  </section>
)

export default Education
