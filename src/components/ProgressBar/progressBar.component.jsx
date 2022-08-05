import { useEffect, useRef, useState } from 'react';
import './progressBar.styles.css';

//Component to track the screen number user is active on
const ProgressBar = ({ screen }) => {
    const [pageArr, setPageArr] = useState([]);

    //Getting the refs to page numbers and bar
    const page2 = useRef(0);
    const page3 = useRef(0);
    const page4 = useRef(0);

    const bar2 = useRef(0);
    const bar3 = useRef(0);
    const bar4 = useRef(0);

    //Setting the page Array to keep track of page number user is active on
    useEffect(() => {
        setPageArr((page) => [...page, screen]);
    }, [screen]);

    //Based on pageArray set the progress styles
    useEffect(() => {
        if(pageArr.includes(2)){
            page2.current.style.backgroundColor = "#5A4AD1";
            page2.current.style.color = "white";
            page2.current.style.border = "1px solid #5A4AD1"

            bar2.current.style.backgroundColor = "#5A4AD1";
            bar2.current.style.border = "1px solid #5A4AD1"
        }
        if(pageArr.includes(3)){
            page3.current.style.backgroundColor = "#5A4AD1";
            page3.current.style.color = "white";
            page3.current.style.border = "1px solid #5A4AD1"

            bar3.current.style.backgroundColor = "#5A4AD1";
            bar3.current.style.border = "1px solid #5A4AD1"
        }
        if(pageArr.includes(4)){
            page4.current.style.backgroundColor = "#5A4AD1";
            page4.current.style.color = "white";
            page4.current.style.border = "1px solid #5A4AD1"

            bar4.current.style.backgroundColor = "#5A4AD1";
            bar4.current.style.border = "1px solid #5A4AD1"
        }
    }, [pageArr]);

    return (
        <div className="Progress">
            <div className="BarContainer">
                <div className="Bar"></div>
                <div className="Bar" ref={bar2}></div>
                <div className="Bar" ref={bar3}></div>
                <div className="Bar" ref={bar4}></div>
            </div>
            <div className="Page Page1">1</div>
            <div className="Page" ref={page2}>2</div>
            <div className="Page" ref={page3}>3</div>
            <div className="Page" ref={page4}>4</div>
        </div>
    )
};

export default ProgressBar;