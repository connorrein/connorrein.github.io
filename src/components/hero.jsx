import { profile } from '../content'

const Hero = () => (
  <section className=''>
    <h1 className='text-slate-200 text-5xl font-bold'>{profile.name}</h1>
    <h2 className='text-slate-200 text-lg mt-2'>{profile.title}</h2>
    <p className='mt-4'>{profile.description}</p>
  </section>
)

export default Hero
