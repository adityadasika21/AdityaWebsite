import BackgroundScene from "./assets/canvas"
import Overlay from "./assets/overlay"

function App() {
    

    return (
        <>
            <div style={{
                position : 'absolute', 
                width : "100vw",
                height : "100vh",
                zIndex : -1
            }}>
                <BackgroundScene />
            </div>
            <div style={{
                position : 'absolute', 
                width : "100vw",
                height : "100vh",
                zIndex : 5
            }}>
                <Overlay />
            </div>
        </>
    )
}

export default App
