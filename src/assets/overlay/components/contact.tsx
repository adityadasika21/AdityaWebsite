import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from 'usehooks-ts';

function Contact() {

	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	return (
		<div
			style={{
				padding: '2rem',
				textAlign: 'center',
				borderRadius : '20px',
				fontFamily: 'Geist Mono, monospace',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: "rgba(251,255,241,0.5)",
			}}
		>
			<h1 style={{ fontSize: isSmallScreen ? "36px" : "48px", fontFamily : 'Anta',  marginBottom: '1rem', fontWeight : 600 }}>Contact Me</h1>
			<p style={{ fontSize: isSmallScreen ? "14px" : "18px", marginBottom: '2rem' }}>
				I’m always excited to connect! Whether you want to chat about code, share ideas, or just say hi—drop me a line.
			</p>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				<li
				style={{
					margin: '1rem 0',
					fontSize: isSmallScreen ? "14px" : "18px",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				>
				<FaEnvelope style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }} />
				Email:&nbsp;
				<a
					className="contact-link"
					href="mailto:akhil.dasika47@gmail.com"
					style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					color: '#000'
					}}
				>
					akhil.dasika47@gmail.com
				</a>
				</li>
				<li
				style={{
					margin: '1rem 0',
					fontSize: isSmallScreen ? "14px" : "18px",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				>
				<FaLinkedin style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }} />
				LinkedIn:&nbsp;
				<a
					className="contact-link"
					href="https://linkedin.com/in/adityadasika21"
					target="_blank"
					rel="noopener noreferrer"
					style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					color: '#000'
					}}
				>
					adityadasika21
				</a>
				</li>
				<li
				style={{
					margin: '1rem 0',
					fontSize: isSmallScreen ? "14px" : "18px",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				>
				<FaGithub style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }} />
				GitHub:&nbsp;
				<a
					className="contact-link"
					href="https://github.com/adityadasika21"
					target="_blank"
					rel="noopener noreferrer"
					style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					color: '#000'
					}}
				>
					adityadasika21
				</a>
				</li>
				<li
				style={{
					margin: '1rem 0',
					fontSize: isSmallScreen ? "14px" : "18px",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				>
				<FaInstagram style={{ marginRight: '0.5rem', animation: 'bounce 2s infinite' }} />
				Instagram:&nbsp;
				<a
					className="contact-link"
					href="https://instagram.com/drstupidity21"
					target="_blank"
					rel="noopener noreferrer"
					style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					color: '#000'
					}}
				>
					drstupidity21
				</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
