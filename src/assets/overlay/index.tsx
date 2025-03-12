import { useMediaQuery } from 'usehooks-ts';
import Contact from './components/contact';
import PreviousExperience from './components/prevexp';
import { motion } from 'motion/react'
import { FaDownload} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../context/firebase';
import Projects from '../../views/projects';

export default function Overlay () {

    const isSmallScreen = useMediaQuery('(max-width : 768px');

    const handleDownload = async () => {
        const pathReference = ref(storage , "gs://adityadasika21.firebasestorage.app/Aditya_Resume.pdf");
        const url = await getDownloadURL(pathReference);

        window.open(url, "_blank")
    }

    return (
        <>
            <section style={{ display : 'flex', flexDirection: 'column', maxWidth: '1024px', minHeight : '100vh',  justifyContent : 'center', margin : 'auto auto', gap: '100px'}}>
                <div
                    style={{ textAlign : "center", display : 'flex', justifyContent : 'center', gap : '0px', flexDirection : 'column', paddingTop: '64px' }}>
                    <motion.h2 
                        initial={{ y : -140, x : -40, opacity : 0 }}
                        animate={{ y : 0, x : 0, opacity : 1}}
                        transition={{ ease : 'easeInOut'}}
                        style={{ 
                            color : "#000", 
                            fontSize : isSmallScreen ? '80px' : "112px",
                            textTransform: 'uppercase', 
                            fontFamily : 'Anta'
                        }}
                        >
                            Aditya Dasika
                            
                    </motion.h2>
                    <motion.p 
                        className='aboutme-caption' 
                        style={{ 
                            fontSize: isSmallScreen ? '22px' : '32px', 
                            color: '#000', 
                            textTransform: 'uppercase', fontFamily : 'Anta' 
                        }}
                    >
                        Fullstack Engineer
                    </motion.p>
                </div> 
                <motion.div 
                    style={{ textAlign : 'center', gap : '8px', display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay : 1 }}
                >
                    <p style={{ padding : '4px 12px', backgroundColor: 'rgba(255,255,255,0.5)', width : 'fit-content', borderRadius : '400px'}}>Actively looking for a job</p>
                    <div 
                    style={{ fontSize : '16px', width : '80%', margin : '0px auto', display : 'flex', justifyContent : 'space-between',
                        backgroundColor : 'rgba(113,179,64,0.6)', padding : '16px',borderRadius: '12px', alignItems : 'center',
                        fontWeight : 600, outline : '6px double rgba(0,0,0,1)'
                    }}>                    
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', justifySelf: 'center' }}
                        onClick={() => handleDownload()}
                    >
                        <FaLocationDot /> Hyderabad
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', justifySelf: 'center' }}
                        onClick={() => handleDownload()}
                    >
                        Resume <FaDownload />
                    </div>

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
                    justifyContent: 'center',
                    gap: '40px', 
                    padding : '32px',
                    margin : '0px auto'
                }}>
                <PreviousExperience />
            </section>
            <section
                className="name-landing-div"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '1024px',
                    justifyContent: 'flex-start',
                    gap: '40px', 
                    padding : '32px',
                    margin : '0px auto'
                }}>
                <Projects />
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