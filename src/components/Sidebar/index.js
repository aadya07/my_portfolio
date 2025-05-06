import { Link, NavLink, useLocation } from 'react-router-dom'
import './index.scss'
import HelloIcon from '../../assets/images/hello-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import MyPhoto from '../../assets/images/Adya-photo.png'

const Sidebar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <div className="nav-bar">
      {isHomePage ? (
        ' '
      ) : (
        <Link className="logo" to="/">
          <img
            className="logo-class"
            src={isHomePage ? ' ' : MyPhoto}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      )}
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? 'active experience-link' : 'experience-link')}
            >
            <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/adya-choudhary-666313203/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aadya07"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.geeksforgeeks.org/user/aadya07/"
            target="_blank"
            rel="noreferrer"
            aria-label="GeeksforGeeks"
          >
            <img
              src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
              alt="GeeksforGeeks"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/choudharyaadya07/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
