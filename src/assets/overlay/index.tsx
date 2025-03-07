import { useMediaQuery } from 'usehooks-ts';
import HackerText from '../hackerText';
import Contact from './components/contact';
import PreviousExperience from './components/prevexp';

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
                
                <div style={{ fontSize : '16px', justifyContent : 'center', alignContent : 'center', display : 'flex'}}>
                    <p style={{ 
                        backgroundColor : 'rgba(113,179,64,0.6)', padding : '16px', textAlign: 'center', 
                        borderRadius: '100px', fontWeight : 600, outline : '6px double rgba(0,0,0,1)', textDecoration : 'underline', pointerEvents : 'all', width : 'fit-content' }}
                        onClick={() => {console.log('Downloading Resume')}}>
                        Actively looking for a job<br />Click to download my CV</p>
                </div> 
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