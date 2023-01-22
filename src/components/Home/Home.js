import React from 'react'
import Card from '../Card/Card'
import './Home.css'
export default function Home(props) {
  const {Data,generateSummary}=props;
  return (
    <div className='home'>
      <h1>Shows  </h1>
      <div className='shows'>
        {!Data && <h1 style={{ fontSize: "30px" }}>Loading .......</h1>}
        {Data && Data.map(show=>(
            <div className="box" key={Math.random()}>
              <Card generateSummary={generateSummary} show={show.show} id={show.show["id"]}/>
            </div>
        ))}
      </div>
    </div>
  )
}
