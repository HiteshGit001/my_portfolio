import React, { useEffect, useState } from 'react'

const HeroProjectContainer = ({ blok }) => {
  // const item = [10, -10, 30, 10];
  const [item, setItem] = useState<any>(
    blok?.ProjectItems
  )
  console.log(blok, "blok proj")
  const [id, setId] = useState<any>(null);

  const handleMouseEnter = (ind: number) => {
    setId(ind);
  };

  const handleMouseOut = () => {
    setId(null);
  };

  return (
    <div className="cd">
      {item.map((ele, ind) => {
        return (
          <a
            key={ele?.title + ind}
            style={{ gap: "1rem", transform: `rotate(${ele?.angle}deg)`, width: "20rem" }}
            className={`pointer col_center white project_card ${ind === id ? "project_card_hover" : "project_card_1"
              }`}
            href={ele?.link}
            onMouseOver={() => handleMouseEnter(ind)}
            onMouseOut={() => handleMouseOut()}
          >
            <div>
              <img width={50} className='br_8 b_1_solid_white' height={50} src={ele?.projectImg?.filename} />
            </div>
            <div>
              <p>{ele?.title}</p>
            </div>
          </a>
        );
      })}
    </div>
  )
}

export default HeroProjectContainer