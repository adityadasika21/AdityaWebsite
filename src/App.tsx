import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import { motion } from 'motion/react';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import useMousePosition from './assets/components/useMouseEffect';
import HackerText from './assets/hackerText';
import { useMediaQuery } from 'usehooks-ts';

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
    submissionCalendar :object;
    recentSubmissions :[];
    matchedUserStats : 	object;
    acSubmissionNum :[];
    totalSubmissionNum :[];
}

function App() {
    
    const [leetData, setLeetData] = useState<LeetData | null>(null);
    const [ streak, setStreak ] = useState<number>(0);
    const mousePosition = useMousePosition();
    const isSmallScreen = useMediaQuery('(min-width: 768px)')

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
        const parsedDates: string[] = [];

        const processSubmissionDates = (submissionCalendar: {}) => {
            const sortedTimestamps = Object.keys(submissionCalendar)
                .map((date) => Number(date))
                .sort((a, b) => a - b);

            sortedTimestamps.forEach((timestamp) => {
                parsedDates.push(dayjs.unix(timestamp).format("DD-MM-YY"));
            });
        };
       
        processSubmissionDates(leetData.submissionCalendar);

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

    console.log(`isSmallScreen : ${isSmallScreen}`)
    return (
        <>
            <div style={{ display : 'flex', padding: '30px', margin: 'auto 16px', gap: '28px', flexDirection: 'column'}}>
                <motion.div 
                    initial={{ y: isSmallScreen? '12vh' : '35vh'}}
                    animate={{ y: '0vh' }}
                    transition={{ duration: 0.8, delay: 3.5, ease: 'circOut' }}
                    className='heading-div' 
                    style={{ padding: '0px 30px', justifyContent: 'center', textAlign: 'center'}}>
                    <motion.h2 
                        initial = {{ opacity: 0, y: 20 }}
                        animate = {{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut'}}}
                        style={{ 
                            color : "#ECA72C", 
                            fontSize : '60px',
                            textTransform: 'uppercase',
                            marginBottom: '-8px'
                        }}
                        >
                            <HackerText text='Aditya Dasika' time={60} />
                    </motion.h2>
                    <motion.p 
                        initial = {{ opacity: 0, y: 20 }}
                        animate = {{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut'}}}
                        className='aboutme-caption' 
                        style={{ fontSize: '24px', color: 'white', textTransform: 'uppercase' }}
                    >
                        <HackerText text='Software Developer' time={45}/>
                    </motion.p>
                </motion.div>
                {/* <div style={{ width: '1080px', margin: '0px auto', color: 'white'}}>
                    <div className='about-me'>
                        <h3>About me</h3>
                        <p>
                            THis is something i have to make up and write
                        </p>
                    </div>
                    <div className='experience'>
                        <h3>Experience</h3>
                        <p>
                            <h4>BlueLeaves Farms (2018 - current)</h4>
                            <p>
                                An experience working at the company describing the things i worked in adn the software's
                            </p>
                        </p>
                    </div>   
                </div> */}
            </div>
            <div className='mouse-event' style={{ position: 'fixed',  left: mousePosition.x ? mousePosition.x - 40 : 0, 
   top: mousePosition.y ? mousePosition.y - 40 : 0, background: 'radial-gradient(circle, rgba(249,199,132,0.5) 0%, transparent 70%)', height: '80px', width: '80px', borderRadius: '40px' }} />
        </>
    )
}

export default App
