```tsx
//import useMousePosition from './assets/components/useMouseEffect';
import HackerText from './assets/hackerText';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import { motion } from 'motion/react';
    const [leetData, setLeetData] = useState<LeetData | null>(null);
    const [ streak, setStreak ] = useState<number>(0);
    console.log(streak)
   //// const mousePosition = useMousePosition();
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

        const processSubmissionDates = (submissionCalendar: object) => {
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
    ```