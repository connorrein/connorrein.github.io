import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

const SocialMedias = () => (
  <ul className='flex items-center'>
    <li className='mr-5 hover:text-slate-200 transition-colors'><a href='https://github.com/connorrein'><FaGithub size={40} /></a></li>
    <li className='mr-5 hover:text-slate-200 transition-colors'><a href='https://linkedin.com/in/connorrein'><FaLinkedin size={40} /></a></li>
    <li>
      <a
        href='https://github.com/connorrein/resume/releases/download/v1.0.3/connor-reinholdtsen-resume.pdf'
        className='flex items-center text-md rounded-full bg-teal-400/10 px-5 py-3 font-normal leading-5 text-teal-300 hover:scale-105 transition-transform'
      >
        <span className='mr-3'>Download Resume</span> <FaFileDownload size={30} />
      </a>
    </li>
  </ul>
)

export default SocialMedias
