import { useMediaQuery } from 'usehooks-ts';
import HackerText from '../hackerText';
import { useInView } from 'react-intersection-observer';
import Contact from '../../uicomponents/contact';

export default function Overlay () {

    const isSmallScreen = useMediaQuery('(max-width : 768px');
    const { ref, inView } = useInView({
        threshold : 0.2,
        triggerOnce : true
    })

    return (
        <>
            <div style={{ display : 'flex', flexDirection: 'column', maxWidth: '1080px', minHeight : '100vh',  justifyContent : 'center', margin : '0px auto'}}>
            
                <div 
                    className='heading-div' 
                    style={{ textAlign : "center" }}>

                    <h2 
                        style={{ 
                            color : "white", 
                            fontSize : isSmallScreen ? '80px' : "84px",
                            textTransform: 'uppercase',
                            mixBlendMode : 'difference'
                        }}
                        >
                            <HackerText text='Aditya Dasika' time={60} />
                    </h2>
                    <p 
                        className='aboutme-caption' 
                        style={{ 
                            fontSize: isSmallScreen ? '22px' : '32px', 
                            color: 'white', 
                            textTransform: 'uppercase',
                            mixBlendMode : 'difference'
                        }}
                    >
                        <HackerText text='FullStack Developer' time={45}/>
                    </p>
                </div> 
            
            </div> 
            <section
                ref = {ref}
                className="name-landing-div"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '1080px',
                    height: '100svh',
                    justifyContent: 'flex-start',
                    gap: '40px', 
                    padding : '32px',
                    margin : '0px auto', 
                    
                }}>
                <div className="heading-div" style={{ textAlign: 'left', 
                    marginTop: isSmallScreen ? '0px' : '160px', }}>
                    <h2
                        style={{
                            color: 'white',
                            fontSize: isSmallScreen ? '32px' : '44px',
                            textTransform: 'uppercase',
                            mixBlendMode : "difference"
                        }}> { inView ? <HackerText text='Previous Experience' time={60} /> : ""} </h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem',
                            mixBlendMode : "difference"
                        }}>
                        {inView &&<span
                            style={{
                            fontFamily: 'Geist Mono, monospace',
                            fontSize: isSmallScreen ? '14px' : '20px',
                            color: 'white', 
                            fontWeight : 600,
                            mixBlendMode : "difference"
                            }}
                        >  <HackerText text='Blueleaves Farms' time={60} />  
                        </span>}
                        <span
                            style={{
                            fontFamily: 'Geist Mono, monospace',
                            fontSize: isSmallScreen ? '14px' : '20px',
                            color: 'white', fontWeight : 600,
                            mixBlendMode : "difference"
                            }}> <HackerText text='Sept 2022 – Feb 2025' time={60} /> </span>
                    </div>                  
                </div>
                <div>
                    <p
                        className="aboutme-caption"
                        style={{
                            fontFamily: 'Geist Mono, monospace',
                            fontSize: isSmallScreen ? '16px' : '18px',
                            color: 'white',
                            mixBlendMode : "difference"
                        }}
                    >
                    At Blueleaves Farms, my work life transformed into a full-blown tech circus—imagine this: I crafted a mind-blowing threejs website that was like a digital modern art gallery, drawing in curious onlookers with every pixel. But wait, that was just the opening act! Next came the Bluecradle webapp, a Swiss Army knife of a tool managing consignment, inventory, and all the behind-the-scenes magic. Picture me as a one-person band, orchestrating end-to-end systems with Firebase Firestore and Google Cloud Functions, where every line of code was a high-wire act that left bugs trembling in their boots. Amidst the chaos of juggling features and dodging digital banana peels, I found endless opportunities to learn, laugh, and occasionally sneak in a coffee break—and you know what else goes with coffee :). I'm genuinely thankful for this wild ride at Blueleaves Farms—it felt like being handed a backstage pass to the most entertaining tech show ever!
                    </p>
                </div>
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