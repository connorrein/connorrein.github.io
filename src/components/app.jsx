import Hero from './hero'
import SocialMedias from './social-medias'
import About from './about'
import Experience from './experience'
import Education from './education'
import Projects from './projects'
import KleinSurfaceCanvas from './klein-surface-canvas'

const App = () => (
  <div className='font-sans bg-slate-900 text-slate-400'>
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24'>
          <Hero />
          <KleinSurfaceCanvas />
          <SocialMedias />
        </header>
        <main className='pt-20 lg:w-3/5 lg:py-24'>
          <About />
          <Experience />
          <Education />
          <Projects />
        </main>
      </div>
    </div>
  </div>
)

export default App
