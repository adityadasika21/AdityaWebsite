import { useMediaQuery } from "usehooks-ts"
import HackerText from "../../hackerText";

export default function PreviousExperience() {
    
    const isSmallScreen = useMediaQuery('(max-width : 768px');

    return (
        <>
            <div className="heading-div" style={{ textAlign: 'left', marginTop: isSmallScreen ? '0px' : '160px', }}>
                <h2 style={{ color: '#000', fontSize: isSmallScreen ? '32px' : '44px',
                    textTransform: 'uppercase', fontFamily : 'Anta'}}> 
                { <HackerText text='Previous Experience' time={60} />} </h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem'
                        }}>
                        <span
                            style={{
                            fontFamily: 'Geist Mono, monospace',
                            fontSize: isSmallScreen ? '14px' : '20px',
                            color: '#000', 
                            fontWeight : 600
                            }}
                        > {<HackerText text='Blueleaves Farms' time={60} /> } </span>
                        <span
                            style={{
                            fontSize: isSmallScreen ? '14px' : '20px',
                            color: '#000', fontWeight : 600
                            }}> { <HackerText text='Sept 2022 – Feb 2025' time={60} />} </span>
                    </div>                  
                </div>
                <div>
                    <p
                        className="aboutme-caption"
                        style={{
                            fontFamily: 'Geist Mono, monospace',
                            fontSize: isSmallScreen ? '16px' : '18px',
                            color: '#000',
                        }}
                    >
                    At Blueleaves Farms, my work life transformed into a full-blown tech circus—imagine this: I crafted a mind-blowing threejs website that was like a digital modern art gallery, drawing in curious onlookers with every pixel. But wait, that was just the opening act! Next came the Bluecradle webapp, a Swiss Army knife of a tool managing consignment, inventory, and all the behind-the-scenes magic. Picture me as a one-person band, orchestrating end-to-end systems with Firebase Firestore and Google Cloud Functions, where every line of code was a high-wire act that left bugs trembling in their boots. Amidst the chaos of juggling features and dodging digital banana peels, I found endless opportunities to learn, laugh, and occasionally sneak in a coffee break—and you know what else goes with coffee :). I'm genuinely thankful for this wild ride at Blueleaves Farms—it felt like being handed a backstage pass to the most entertaining tech show ever!
                    </p>
                </div>
                <h2 style={{ fontSize : '24px'}}>Projects I did at the previous company</h2>

                <div style={{ display: 'flex', gap: '20px', outline : '2px solid black', minWidth : '100%', minHeight : isSmallScreen ?'90vh' : '40vh', borderRadius: '20px', padding : '16px', flexDirection : isSmallScreen ? 'column' : 'row' }}>
                    <div style={{ flex: 1, outline: '1px solid black', borderRadius : '10px', height : '100%' }}>
                        <h1 style={{ fontSize : '32px'}}>BlueCradle</h1>
                    </div>
                    <div style={{ flex: 1, outline: '1px solid black', borderRadius : '10px', height : '100%' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '20px', outline : '2px solid black', minWidth : '100%', minHeight : isSmallScreen ?'90vh' : '40vh', borderRadius: '20px', padding : '16px', flexDirection : isSmallScreen ? 'column' : 'row' }}>
                    <div style={{ flex: 1, outline: '1px solid black', borderRadius : '10px', height : '100%' }}>
                        <h1 style={{ fontSize : '32px'}}>BlueCradle</h1>
                    </div>
                    <div style={{ flex: 1, outline: '1px solid black', borderRadius : '10px', height : '100%' }}></div>
                </div>
        </>
    )
}