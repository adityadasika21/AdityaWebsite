
export default function Background () {

    return (
        <div style={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            zIndex: -1, 
            width: '100vw', 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <svg width="500" height="500">
                <image href="src/assets/media/Vector.svg" width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    )
}