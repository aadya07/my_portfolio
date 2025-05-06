import { useEffect, useState } from 'react'
import {
  faAngular,
  faAws,
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
import { faCode, faCodeBranch, faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
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
              strArray={[
                'M',
                'y',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <div className="experience">
            <h2 className="experience">InCruiter</h2>
            <h3 className="experience">
              Frontend Developer-I — Bengaluru, India
            </h3>
            <ul>
              <li>
                Developed and optimized a multi-page website using React and
                Next.js, improving performance by 40%, SEO by 35%, and user
                experience by 25%.
              </li>
              <li>
                Built and maintained RESTful APIs using Node.js and Express,
                improving response times by 30%.
              </li>
              <li>
                Implemented responsive design across 20+ web pages, increasing
                cross-device compatibility by 50%.
              </li>
              <li>
                Integrated Redux-Saga for side effect management, reducing bugs
                by 30%.
              </li>
              <li>
                Streamlined Admin portal and core products with MongoDB-based
                solutions, boosting data efficiency by 30%.
              </li>
              <li>
                Designed reporting features for panelists and candidates to
                enhance data-driven decisions.
              </li>
              <li>
                Optimized Mock Interview product with payment integration and
                personalized portal, increasing conversions by 50%.
              </li>
              <li>
                Built scheduling features, resulting in a 60% platform traffic
                increase.
              </li>
              <li>
                Developed a performance dashboard, improving user engagement by
                45%.
              </li>
              <li>
                Refactored codebase, reducing technical debt and improving
                efficiency by 20%.
              </li>
              <li>
                Participated in Agile processes to ensure timely delivery of
                features.
              </li>
              <li>Contributed to CI/CD pipelines for seamless updates.</li>
              <li>
                Deployed and monitored applications using AWS EC2, S3, and
                CloudWatch for high availability.
              </li>
            </ul>
          </div>
        </div>
        <div className="tech-stack-grid">
          {[
            { label: 'React.js', icon: faReact, color: '#61DBFB' },
            { label: 'Next.js', icon: faJsSquare, color: '#000' },
            { label: 'Node.js', icon: faNodeJs, color: '#68A063' },
            { label: 'MongoDB', icon: faDatabase, color: '#4DB33D' },
            { label: 'Java', icon: faJava, color: '#007396' },
            { label: 'AWS', icon: faAws, color: '#FF9900' },
            { label: 'Tailwind', icon: faCss3, color: '#38B2AC' },
            { label: 'Redux', icon: faCodeBranch, color: '#764ABC' },
            { label: 'C++', icon: faCode, color: '#00599C' }, // generic code icon
            { label: 'JavaScript', icon: faJsSquare, color: '#F7DF1E' },
            { label: 'Generative AI', icon: faRobot, color: '#8E44AD' }, // using robot icon
            { label: 'Angular', icon: faAngular, color: '#DD0031' },
            { label: 'HTML5', icon: faHtml5, color: '#E44D26' },
            { label: 'CSS3', icon: faCss3, color: '#264DE4' },
            { label: 'MySQL', icon: faDatabase, color: '#00758F' },
          ].map((tech, index) => (
            <div className="tech-card" key={index}>
              <FontAwesomeIcon icon={tech.icon} color={tech.color} size="2x" />
              <span>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
