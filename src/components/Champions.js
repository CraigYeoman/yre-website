import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import uniqid from "uniqid";

const Champions = () => {
  const [array, updateArray] = useState(0);
  const year = [
    {
      id: 0,
      year: 2022,
      winners: [
        "200+ Wins in 2022   ",
        "John Potter - 2022 Salina highbanks B-Mod Track Champion",
        "Gabe Hodges - 2022 81 Speedway B-Mod Track Champion",
        "Jackie Dalton - 2022 Springfield Raceway B-Mod Track Champion",
        "Jackie Dalton - 2022 Monett Motor Speedway B-Mod Track Champion",
        "Colby Artherton - 2022 Caney Valley Speedway B-Mod Track Champion",
        "Brian Bolin - 2022 Nevada Speedway B-Mod Track Champion",
        "Brian McGowen - 2022 Humboldt Speedway B-Mod Track Champion",
        "Richard Magee - 2022 Tulsa Speedway B-Mod Track Champion",
        "Denver Lee - 2022 Tri-State Speedway USRA Stock Car Track Champion",
        "Nic Hanes - 2022 I-35 Speedway USRA Stock Car Track Champion",
        "Tim Eaton - 2022 US 36 Speedway IMCA Northern SportMod Track Champion",
        "Jerad McIntire - 2022 Springfield Raceway Midwest Mod A-Class Track Champion",
        "Caden Bolin - 2022 Nevada Speedway Midwest Mod Track Champion",
        "Jason Foster - 2022 KMS Speedway USRA A-Mod Track Champion",
        "Chad Williams - 2022 Old #1 Speedway IMCA A-Mod Track Champion",
      ],
    },
    {
      id: 1,
      year: 2021,
      winners: [
        "Cole Wells - 2021 Cash Money Late Model Champion",
        "Jeard McIntire - 2021 Springfield Raceway Mid-west Mod Track Champion",
        "Kenton Allen - 2021 81 Speedway B-Mod Track Champion",
        "Justin Shoemaker - 2021 Salina Highbanks B-Mod Track Champion",
        "JC Morton - 2021 Battle of the Bullring Winner",
        "JC Morton - 2021 Lucas Oil Nationals Winner",
      ],
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
        "Riley Duncan - 2020 Springfield Raceway Midwest Mod B-Class Track Champion",
      ],
    },
  ];

  const date = year.find((date) => date.id === array);
  const leftClick = () => {
    if (array === 0) {
      return updateArray(array + 2);
    } else {
      return updateArray(array - 1);
    }
  };
  const rightClick = () => {
    if (array === 2) {
      return updateArray(array - 2);
    } else {
      return updateArray(array + 1);
    }
  };

  return (
    <div>
      <div className="champion--container">
        <button className="left--button" onClick={leftClick}>
          <BsFillArrowLeftCircleFill />
        </button>
        <div className="champion--list">
          <h3>{date.year} Champions</h3>
          {date.winners.map((winner) => (
            <li key={uniqid()}>{winner}</li>
          ))}
        </div>
        <button className="right--button" onClick={rightClick}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Champions;
