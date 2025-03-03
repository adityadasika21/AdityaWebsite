import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Geist Mono, monospace',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Me</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        I’m always excited to connect! Whether you want to chat about code, share ideas, or just say hi—drop me a line.
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li
          style={{
            margin: '1rem 0',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaEnvelope
            style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }}
          />
          Email: <a className="contact-link" href="mailto:akhil.dasika47@gmail.com">akhil.dasika47@gmail.com</a>
        </li>
        <li
          style={{
            margin: '1rem 0',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaLinkedin
            style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }}
          />
          LinkedIn: <a className="contact-link" href="https://linkedin.com/in/adityadasika21" target="_blank" rel="noopener noreferrer">adityadasika21</a>
        </li>
        <li
          style={{
            margin: '1rem 0',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaGithub
            style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }}
          />
          GitHub: <a className="contact-link" href="https://github.com/adityadasika21" target="_blank" rel="noopener noreferrer">adityadasika21</a>
        </li>
        <li
          style={{
            margin: '1rem 0',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaInstagram
            style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }}
          />
          Instagram: <a className="contact-link" href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
        </li>
      </ul>
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        .contact-link {
          text-decoration: none;
          color: #000;
          transition: color 0.3s ease;
        }
        .contact-link:hover {
          color: #0077b5;
        }
      `}</style>
    </div>
  );
}

export default Contact;
