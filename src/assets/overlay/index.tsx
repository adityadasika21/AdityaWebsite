import { useMediaQuery } from 'usehooks-ts';
import HackerText from '../hackerText';
import Contact from './components/contact';
import PreviousExperience from './components/prevexp';
import { motion } from 'motion/react'
import { FaDownload, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function Overlay () {

    const isSmallScreen = useMediaQuery('(max-width : 768px');

    return (
        <>
            <section style={{ display : 'flex', flexDirection: 'column', maxWidth: '1024px', minHeight : '100vh',  justifyContent : 'center', margin : 'auto auto', gap: '100px'}}>
                <div 
                    style={{ textAlign : "center", display : 'flex', justifyContent : 'center', gap : '0px', flexDirection : 'column', paddingTop: '64px' }}>
                    <h2 
                        style={{ 
                            color : "#000", 
                            fontSize : isSmallScreen ? '80px' : "112px",
                            textTransform: 'uppercase', 
                            fontFamily : 'Anta'
                        }}
                        >
                            <HackerText text='Aditya Dasika' time={60} />
                    </h2>
                    <p 
                        className='aboutme-caption' 
                        style={{ 
                            fontSize: isSmallScreen ? '22px' : '32px', 
                            color: '#000', 
                            textTransform: 'uppercase', fontFamily : 'Anta' 
                        }}
                    >
                        <HackerText text='Backend Developer' time={50}/>
                    </p>
                </div> 
                <motion.div 
                    style={{ 
                        fontSize: '16px', 
                        width: '80%', 
                        margin: '0px auto', 
                        display: 'grid', 
                        gridTemplateColumns: '1fr auto 1fr', /* Ensures center alignment */
                        alignItems: 'center',
                        backgroundColor: 'rgba(113,179,64,0.6)', 
                        padding: '16px',
                        borderRadius: '12px', 
                        fontWeight: 600, 
                        outline: '6px double rgba(0,0,0,1)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay : 3 }}
                >                    
                    {/* Left Section: Location */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
                        <FaLocationDot /> Hyderabad
                    </div>

                    {/* Center Section: Resume */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', justifySelf: 'center' }}>
                        Resume <FaDownload />
                    </div>

                    {/* Right Section: Social Links */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', fontSize: '24px', justifySelf: 'end' }}>
                        <a target='_blank' rel='noopener norefferer' href='https://github.com/adityadasika21/'><FaGithubSquare /></a>
                        <a target='_blank' rel='noopener norefferer' href='https://instagram.com/drstupidity21'><FaInstagramSquare/></a>
                        <a target='_blank' rel='noopener norefferer' href='https://x.com/dasika47'><FaTwitterSquare /></a>
                    </div>
                </motion.div>

            </section> 
            <section
                className="name-landing-div"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '1024px',
                    minHeight: '100svh',
                    justifyContent: 'flex-start',
                    gap: '40px', 
                    padding : '32px',
                    margin : '0px auto'
                }}>
                <PreviousExperience />
            </section>
            <section 
             style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '1024px',
                height: '100svh',
                justifyContent: 'center',
                gap: '40px', 
                padding : '32px',
                margin : '0px auto'
            }}
            >
                <Contact />
            </section>
        </>
    )
}