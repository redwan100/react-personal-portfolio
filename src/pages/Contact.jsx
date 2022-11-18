import styled from 'styled-components';
import { motion } from 'framer-motion';
import Social from '../components/Social';
import SectionTitle from '../shared/SectionTitle';

const ContactStyle = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  margin-top: 2rem;
  border-radius: 8px;
  .title {
    margin-bottom: 1rem;
    padding: 1.5rem;
  }

  .details {
    padding: 1.5rem;
    p {
      font-weight: 600;
      margin-bottom: 10px;

      span {
        font-weight: 500;
        color: ${({ theme }) => theme.descColor};
        font-size: 14px;
      }
    }
  }

  .sIcons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .mapBox {
    height: 500px;
    iframe {
      width: 100%;
      border: none;
      height: 100%;
    }
  }
`;
function Contact() {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <ContactStyle>
        <div>
          <SectionTitle title="Contact Information" />
        </div>

        <div className="details">
          <p>
            Address: <span>Boalmary, faridpur, Dhaka, Bangladesh.</span>
          </p>
          <p>
            Emai: <span>redwanislam2760@gmail.com</span>
          </p>
          <p>
            Phone: <span>+880 1965182760</span>
          </p>
          <p>
            Job: <span>Freelancer</span>
          </p>
          <p>
            Skype:
            <span>
              <a href="#">Start Chat</a>
            </span>
          </p>

          <p>
            <Social />
          </p>
        </div>

        <div className="map">
          <SectionTitle title="Contact Map" />

          <div className="mapBox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183371.70069512632!2d89.52932285145721!3d23.373322001325747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe4ab85cc2a27f%3A0xc32d8645f04e4a46!2sBoalmari!5e0!3m2!1sen!2sbd!4v1668614398429!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </ContactStyle>
    </motion.div>
  );
}

export default Contact;
