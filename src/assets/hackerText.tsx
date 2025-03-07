import { useState, useEffect } from "react";

function HackerText({ text, time }: { text: string, time : number }) {
    const [displayText, setDisplayText] = useState<string>("");
  
    useEffect(() => {
        let iteration = 0;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456798";
        const delay = 0;
        let intervalId: ReturnType<typeof setInterval>;
     
        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                setDisplayText(
                    text
                    .split("")
                    .map((_char, index) => {
                        if (index < iteration) {
                        return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
                );
                iteration += 1 / 3;
                if (iteration >= text.length) {
                    setDisplayText(text);
                    clearInterval(intervalId);
                }
            }, time);
        }, delay);
    
        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [text, time]);
  
    return <span style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>{displayText}</span>;
}

export default HackerText