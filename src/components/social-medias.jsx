import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { socials } from '../content'

const SocialMedias = () => (
  <ul className='flex items-center'>
    <li className='mr-5 hover:text-slate-200 transition-colors'><a href={socials.github}><FaGithub size={40} /></a></li>
    <li className='mr-5 hover:text-slate-200 transition-colors'><a href={socials.linkedin}><FaLinkedin size={40} /></a></li>
    <li>
      <a
        href={socials.resume}
        className='flex items-center text-md rounded-full bg-teal-400/10 px-5 py-3 font-normal leading-5 text-teal-300 hover:scale-105 transition-transform'
      >
        <span className='mr-3'>Download Resume</span> <FaFileDownload size={30} />
      </a>
    </li>
  </ul>
)

export default SocialMedias
