import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timeoutId)  
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_229e7kv', 'template_e6eqgeg', form.current, '9BHm_b_KCHCV3efdr')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className= "contact-text">
            I'm always open to discussing new projects, creative ideas, or collaboration opportunities. 
            Whether you have a question, a job opportunity, or just want to say hello, feel free to reach 
            out through the form below.
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Your Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
            Adya Choudhary,
            <br />
            Bengaluru, Karnataka
            <br />
            <br />
            <a href="tel:+919979356442">+91-9979356442</a>
            <br />
            <a href="mailto:adyacodes@gmail.com">adyacodes@gmail.com</a>
        </div>
        <div className="map-wrap">
            <MapContainer center={[12.9716, 77.5946]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[12.9716, 77.5946]}>
                <Popup>Welcome to Bengaluru, Karnataka!</Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
       
    </>
  )
}

export default Contact;