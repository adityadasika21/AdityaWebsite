import BackgroundScene from "../../assets/canvas";
import Overlay from "../../assets/overlay";
import Header from "../../uicomponents/header";

export default function Home () {
    
    return (
        <>
        <div style={{
            position : 'fixed', 
            width : "100vw",
            height : "100vh",
            zIndex : -1
        }}>
            <BackgroundScene />
        </div> 
        <div style={{
            position: 'absolute',
            width: "100vw",
            minHeight: "100vh",
            zIndex: 5,
            backdropFilter: "blur(10px)",  // Heavy blur effect
            WebkitBackdropFilter: "blur(10px)", // Safari support
            overflow: "hidden"
        }}>
          
            <div style={{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                background: "url('https://www.transparenttextures.com/patterns/noisy.png'), rgba(0,0,0,0.1)",
                mixBlendMode: "overlay",
                opacity: 0.4,
                animation: "noise 0.2s steps(2) infinite",
                pointerEvents : 'none'
            }} />
                {/* <Header>    </Header> */}
                    <Overlay />
            
            <style>
                {`
                    @keyframes noise {
                        0% { background-position: 0 0; }
                        100% { background-position: 100px 100px; }
                    }
                `}
            </style>
      
        </div> 
        </>
    )
}