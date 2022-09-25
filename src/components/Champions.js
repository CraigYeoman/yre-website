import { useState } from "react";

const Champions = () => {
    
    const [year, selectedYear] = useState([
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
    
    ])
    
    const array = 0
    const date = year.find((date) => date.id === array)
    
    return (
        <div>
         <div className="champion--container">
            <div>L</div>
            <h3>{date.year} Champions</h3>
            {date.winners.map((winner) => (
                       <li>{winner}</li>
                   )
                   )}
            <div>L</div>
        </div>   
        {/*<div className="champion--container">
            {year.filter((date) => date.id === id).map((winner) => {
                const {id, year , winners} = winner
                return <li>{winners}</li>
})}
        </div>
           <div className="champion--container">
           {year.map((date) => {
               const {id, year, winners} = date
               return <div key={id}>
                   <h3>{year} Champions</h3>
                   {winners.map((winner) => (
                       <li>{winner}</li>
                   )
                   )}
               </div>
           }     
           )}
       </div>*/}
       </div>
    )
}

export default Champions