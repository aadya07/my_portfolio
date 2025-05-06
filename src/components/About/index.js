import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’m a Frontend Developer with a solid foundation in building
            scalable, responsive, and user-friendly web applications using
            React, Next.js, JavaScript, and Tailwind CSS. With hands-on
            experience at InCruiter, I’ve worked across the full development
            lifecycle—delivering features, optimizing performance, and
            contributing to seamless UI/UX design.
          </p>
          <p align="LEFT">
            Beyond frontend development, I’ve contributed to backend services
            using Node.js, Express.js, and MongoDB, integrating REST APIs and
            enhancing data-driven functionalities like scheduling, reporting,
            and whitelabeling. My experience also includes deploying
            applications on AWS and contributing to CI/CD pipelines in Agile
            environments.
          </p>
          <p>
            I’m deeply interested in building intuitive interfaces that solve
            real user problems. Whether improving interview platforms or
            designing dashboards, I focus on clean code, usability, and
            maintainability. I'm currently expanding my backend skills with Java
            and exploring system design to become a well-rounded full stack
            engineer.
          </p>
        </div>

        <div className="stage-cube-cont" onClick={() => setShowPopup(true)}>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />{' '}
              {/* JavaScript */}
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />{' '}
              {/* Angular */}
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" /> {/* React */}
            </div>
            <div className="face4">
              <span style={{ fontSize: '20px', color: '#8e44ad' }}>Gen AI</span>{' '}
              {/* Gen AI */}
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#007396" /> {/* Java */}
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" /> {/* Node */}
            </div>
          </div>
          <div className="click-text" onClick={() => setShowPopup(true)}>
            "<span className="click-me">Click Me</span>" to know more about my skills
          </div>
        </div>
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <h2 className="yellow-text">My Technical Skills</h2>
              <p>
                <strong>Languages:</strong> C++, JavaScript, Java, HTML, CSS,
                SQL
              </p>
              <p>
                <strong>Frameworks & Libraries:</strong> Node.js, REST APIs,
                Express.js, React.js
              </p>
              <p>
                <strong>Databases:</strong> MySQL, MongoDB
              </p>
              <p>
                <strong>Tools & Platforms:</strong> VS Code, Postman, Git,
                GitHub, AWS (S3, EC2, CloudWatch), Docker, Jenkins
              </p>
              <p>
                <strong>Concepts & Others:</strong> OOP, Data Structures,
                Algorithms, System Design, API Development
              </p>
              <button className="close-btn" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
