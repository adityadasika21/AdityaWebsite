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
            
        }}>
            <div style={{ zIndex : 1}}>
                <Header>
                    <Overlay />
                </Header>
            </div> 
        </div>
        </>
    )
}