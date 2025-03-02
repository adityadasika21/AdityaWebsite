import HackerText from '../hackerText';

export default function Overlay () {


    return (
        <div style={{ display : 'flex', padding: '30px', gap: '28px', flexDirection: 'column', maxWidth: '1024px', margin: '0px auto', justifyContent : 'space-between'}}>
            <div style={{
                height : 'auto', width : '100%', 
                display : 'flex', justifyContent : 'space-between', 
                padding: '16px'
            
            }}> 
                <a style={{ fontSize : '24px',}}>Learnings</a>
                <a style={{ fontSize : '24px',}}>Projects</a>
            </div>
            <div 
                className='heading-div' 
                style={{ 
                    top: 0, left : 0, 
                    transform:'translate(0%, 85%)',
                    textAlign : 'center'
            }}>

                <h2 
                    style={{ 
                        color : "#343434", 
                        fontSize : '60px',
                        textTransform: 'uppercase',
                        marginBottom: '-8px'
                    }}
                    >
                        <HackerText text='Aditya Dasika' time={60} />
                </h2>
                <p 
                    className='aboutme-caption' 
                    style={{ fontSize: '24px', color: '#343434', textTransform: 'uppercase' }}
                >
                    <HackerText text='Software Developer' time={45}/>
                </p>
            </div>
     
        </div>
    )
}