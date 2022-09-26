import { useState } from "react";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import uniqid from "uniqid";

const Champions = () => {
    const [array, updateArray] = useState(0)
    const year = [
        {
            id: 0,
            year: 2022,
            winners: [
                "Kenton Allen - 2022 81 Speedway B-Mod Track Champion",
                "Willie Gammil - 2022 Salina Highbanks B-Mod Track Champion",
                "Chad Williams - 2022 Old No. 1 Speedway A-Mod IMCA Track Champion",
                "Lonnie Robbins - 2022 Tri-State Speedway A-Mod USRA Track Champion",
                "JC Morton - 2022 Dallas County Speedway B-Mod Track Champion",
                "Jacob Ebert - 2022 Central Missouri Speedway B-Mod Track Champion",
                "Jaren Martin - 2022 Springfield Raceway Midwest Mod A-Class Track Champion",
                "Riley Duncan - 2022 Springfield RacewayMidwest Mod B-Class Track Champion"
            ]
        },
        {
            id: 1,
            year: 2021,
            winners: [
                "Kenton Allen - 2021 81 Speedway B-Mod Track Champion",
                "Willie Gammil - 2021 Salina Highbanks B-Mod Track Champion",
                "Chad Williams - 2021 Old No. 1 Speedway A-Mod IMCA Track Champion",
                "Lonnie Robbins - 2021 Tri-State Speedway A-Mod USRA Track Champion",
                "JC Morton - 2021 Dallas County Speedway B-Mod Track Champion",
                "Jacob Ebert - 2021 Central Missouri Speedway B-Mod Track Champion",
                "Jaren Martin - 2021 Springfield Raceway Midwest Mod A-Class Track Champion",
                "Riley Duncan - 2021 Springfield RacewayMidwest Mod B-Class Track Champion"
            ] 
        },
        {
            id: 2,
            year: 2020,
            winners: [
                "Kenton Allen - 2020 81 Speedway B-Mod Track Champion",
                "Willie Gammil - 2020 Salina Highbanks B-Mod Track Champion",
                "Chad Williams - 2020 Old No. 1 Speedway A-Mod IMCA Track Champion",
                "Lonnie Robbins - 2020 Tri-State Speedway A-Mod USRA Track Champion",
                "JC Morton - 2020 Dallas County Speedway B-Mod Track Champion",
                "Jacob Ebert - 2020 Central Missouri Speedway B-Mod Track Champion",
                "Jaren Martin - 2020 Springfield Raceway Midwest Mod A-Class Track Champion",
                "Riley Duncan - 2020 Springfield RacewayMidwest Mod B-Class Track Champion"
            ] 
        }
    
    ]
    
    const date = year.find((date) => date.id === array)
    const leftClick = () => {
        if (array === 0) {
            return updateArray(array + 2)
        } else {
            return updateArray(array - 1)
        }
        
    }
    const rightClick = () => {
        if (array === 2) {
            return updateArray(array - 2)
        } else {
            return updateArray(array + 1)
        }
        
    }
    
    return (
        <div>
            <div className="champion--container">
                <button className="left--button" onClick={leftClick}><BsFillArrowLeftCircleFill /></button>
                    <div className="champion--list">
                        <h3>{date.year} Champions</h3>
                        {date.winners.map((winner) => (
                                <li key={uniqid()}>{winner}</li>
                            )
                            )}
                    </div>
                <button className="right--button" onClick={rightClick}><BsFillArrowRightCircleFill /></button>
            </div>   
       </div>
    )
}

export default Champions