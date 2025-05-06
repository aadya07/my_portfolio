import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'A', 'd', 'y', 'a']
  const surNameArray = [' ', 'C', 'h', 'o', 'u', 'd', 'h', 'a', 'r', 'y']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '-',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={surNameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Front End Developer / Java Developer / JavaScript Developer / React
            Developer{' '}
          </h2>
          <div className="contact-container">
            <div className="contact-links">
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
              <Link to="/about" className="flat-button">
                ABOUT ME
              </Link>
              <Link to="/experience" className="flat-button">
                EXPERIENCE
              </Link>
            </div>
            <br />
            <div className="contact-details">
              <div>
                <a
                  href="https://www.linkedin.com/in/adya-choudhary-666313203/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/aadya07"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.geeksforgeeks.org/user/aadya07/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GeeksforGeeks"
                >
                  <img
                    src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                    alt="GeeksforGeeks"
                    style={{ width: '40px', height: '20px' }}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://leetcode.com/u/choudharyaadya07/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    style={{ width: '35px', height: '30px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
