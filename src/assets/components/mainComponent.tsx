import React from "react"

export default function HeaderLayout ({children} : {children : React.ReactNode}) {

    return (
        <>
            <div 
            className="h-auto w-full max-w-full flex justify-around p-16px py-40px"> 
                <a className="text-xl font-bold">Learnings</a>
                <a className="text-xl font-bold">Projects</a>
            </div>
            <div>{children}</div>
        </>
    )
}