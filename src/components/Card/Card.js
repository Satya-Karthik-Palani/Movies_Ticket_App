import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Card.css'
export default function Card(props) {
    const {generateSummary,show,id} = props;
    const getImgURL = (show)=>{
        if(show !== null){
            // console.log(show);
            let url= show["medium"]
            // console.log(url);
            return url;
        }
    }
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return (
            <div  data-aos="zoom-in-up" id="container" >

                <div className="show-details" >

                    <h1 > {show.name} </h1>

                    <p className="information" >Type : {show["type"]}</p>
                    <p className="information" >Language : {show["language"]}</p>
                    <p className="information" >Genres : {show["genres"].join(' , ')}</p>
                    {show["status"]!=="Ended" && show["rating"]["average"] && <p className="information" >Rating : {show["rating"]["average"]}</p>}



                    <div className="control" >

                                <button className="btn" onClick={(e) => generateSummary(e, id)}>
                                    <Link to='/summary'><span className="price" > $250 </span>  <span className="buy" >Book Now</span>  </Link>
                                    
                                </button>

                    </div>

                </div>

                <div className="show-image" >

                    <img src={getImgURL(show.image)} alt="Unavailable" />
                    <div className="info" >
                        <h2 > Additional Info </h2> 
                        <ul >
                            <li > <strong> Status : </strong>{show["status"]} </li >
                            <li > < strong > Run Time : </strong>{show["runtime"]}</li >
                            <li > < strong > Premiered : </strong>{show["premiered"]}</li >
                            {!show["status"]!=="Ended" && show["Ended"] && <li > < strong > Ended: </strong>{show["ended"]}</li >}


                        </ul> 
                    </div > 
                </div>

            </div>)
}
