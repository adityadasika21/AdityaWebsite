import {ReactNode} from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
    children: ReactNode;
}

export default function Header ({ children } : HeaderProps ) {

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: 0, // Stays at the top
                    left: '50%', // Moves the left edge to the center
                    transform: 'translateX(-50%)', // Shifts it back by half its width
                    maxWidth: "1080px",
                    padding: '32px',
                    width: '100%',
                    justifyContent: 'space-between',
                    display: "flex",
                    zIndex: 100,
                    margin: '0 auto',
                    overflow: 'auto',
                }}
            >
                <Link to={'/blog'}>Learnings</Link>
                <Link to={'/projects'}>Projects</Link>
            </div>
                <div>{children}</div>
        </>
    )
}