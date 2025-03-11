import { useMediaQuery } from "usehooks-ts";
import { motion } from 'motion/react';
import { getDownloadURL, ref } from "firebase/storage";
import { FaLocationPin } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import PreviousExperience from "../../assets/overlay/components/prevexp";
import Projects from "../projects";
import Contact from "../../assets/overlay/components/contact";

export default function Home () {
    const isSmallScreen = useMediaQuery('(max-width : 768px');

    const handleDownload = async () => {
        const pathReference = ref(storage , "gs://adityadasika21.firebasestorage.app/Aditya_Resume.pdf");
        const url = await getDownloadURL(pathReference);

        const a = document.createElement("a");
        a.href = url;
        a.download = "Aditya_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); 
    }

    return (
        <>  
            <section style={{ display : 'flex', flexDirection: 'column', maxWidth: '60rem', minHeight : '100vh',  justifyContent : 'flex-start', margin : '0px auto', paddingTop : '72px'}}>
          
                <div className="name-introduction"
                    style={{ textAlign : "left", display : 'flex', 
                    justifyContent : 'center', padding : '40px' ,gap : '40px', height : '400px', borderRadius : '20px', 
                    flexDirection : 'row', outline :  '1px solid black', }}>
                        <div style={{ width : '100%', height : '100%', 
                         borderRadius : '25px', flex : 2}}>
                            <h1 style={{ textTransform : 'capitalize', fontSize : '40px'}}>Aditya Dasika</h1>
                            <p style={{ }}
                            >
                                A mid-level fullstack developer, experienced in building end-to-end systems with React, Tailwind for frontend and Firebase/AWS as backend. 

                            </p>
                        </div>
                        <div style={{ width : '100%', height : '100%', borderRadius : '25px', flex : 1}}>

                        </div>
                </div>
            </section> 
        </>
    )
}