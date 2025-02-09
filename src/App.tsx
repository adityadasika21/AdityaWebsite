import { useEffect, useState } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import { motion } from 'motion/react';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

interface LeetData {
    totalSolved : number;
    totalSubmissions : 	[];
    totalQuestions : number;
    easySolved : number;
    totalEasy : number;
    mediumSolved : number;
    totalMedium : number;
    hardSolved : number;
    totalHard : number;
    ranking : number;
    contributionPoint :number;
    reputation : number;
    submissionCalendar :{};
    recentSubmissions :[];
    matchedUserStats : 	{};
    acSubmissionNum :[];
    totalSubmissionNum :[];
}

function App() {
    
    const [leetData, setLeetData] = useState<LeetData | null>(null);
    const [ leetDates, setLeetDates ] = useState<String[] | null>(null);
    const [ streak, setStreak ] = useState<Number>(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const response : AxiosResponse  =  await axios.get("https://leetcode-api-faisalshohag.vercel.app/drstupidity");

                setLeetData(response.data)
            } catch (e) {
                console.log("Error Fetching Leetcode data", e)
            }
            
        }
        getData();
    }, [])

    useEffect(() => {
        if (!leetData || leetData.totalSolved < 1) return;
        let parsedDates: string[] = [];

        const processSubmissionDates = (submissionCalendar: {}) => {
            const sortedTimestamps = Object.keys(submissionCalendar)
                .map((date) => Number(date))
                .sort((a, b) => a - b);

            sortedTimestamps.forEach((timestamp) => {
                parsedDates.push(dayjs.unix(timestamp).format("DD-MM-YY"));
            });
        };
       
        processSubmissionDates(leetData.submissionCalendar);
        setLeetDates(parsedDates);

        console.log(parsedDates[parsedDates.length - 1])

        let curStreak = 1;

        for (let i =1; i < parsedDates.length; i++) {
            if ( dayjs(parsedDates[i], "DD-MM-YY").diff(dayjs(parsedDates[i-1], "DD-MM-YY"), 'day') > 1 ){
                console.log(parsedDates[i])
                curStreak = 1;
            }
            ++curStreak;
        }
        setStreak(curStreak);


    }, [leetData]);

    return (
        <>
            <div style={{ display : 'flex', gap: '0px' }}>
                <div className='heading-div' style={{ outline: '1px solid white', width: '100%', flex: 1}}>
                    <motion.h2 
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1, transition: { duration: 0.5, ease: 'easeIn'}}}
                        
                        style={{ 
                            color : "#ECA72C", 
                            fontSize : '60px', 
                            flex: 1
                    }}>
                        Aditya Daiska 
                    </motion.h2>
                    <p className='aboutme-caption' style={{ fontSize: '30px' }}>
                        Full Stack Engineer 
                    </p>
                    <p className='aboutme-caption'>
                        Current Leetcode streak - {streak}
                    </p>
                </div>
                <div className='heading-div' style={{ outline: '1px solid white', width: '100%', borderRadius: '16px'}}>
                    <div className='about-me' style={{ outline: '1px solid white'}} >
                        <h2 style={{ textAlign : 'left', color : "#ECA72C",  flex: 1}}>
                            About me 
                        </h2>
                        <p style={{ color: 'white'}}>
                            I am a software developer at Blueleaves Farms, worked on different projects with React and JavaScript and TypeScript. <br />
                            Made a new web application for data collection and HR processes 
                            I am a software developer at Blueleaves Farms, worked on different projects with React and JavaScript and TypeScript. <br />
                            Made a new web application for data collection and HR processes 
                            I am a software developer at Blueleaves Farms, worked on different projects with React and JavaScript and TypeScript. <br />
                            Made a new web application for data collection and HR processes 
                        </p>
                    </div>
                    <div className='about-me' style={{ outline: '1px solid white'}} >
                        <h2 style={{ textAlign : 'left', color : "#ECA72C",  flex: 1}}>
                            About me 
                        </h2>
                        <p style={{ color: 'white'}}>
                            I am a software developer at Blueleaves Farms, worked on different projects with React and JavaScript and TypeScript. <br />
                            Made a new web application for data collection and HR processes 
                        </p>
                    </div>
                    <div className='about-me' style={{ outline: '1px solid white'}} >
                        <h2 style={{ textAlign : 'left', color : "#ECA72C",  flex: 1}}>
                            About me 
                        </h2>
                        <p style={{ color: 'white'}}>
                            I am a software developer at Blueleaves Farms, worked on different projects with React and JavaScript and TypeScript. <br />
                            Made a new web application for data collection and HR processes 
                        </p>
                    </div>
                </div>
            </div>
            <div className='current-contributions'>
                <h2>Current Contributions</h2>
            </div>
        </>
    )
}

export default App
