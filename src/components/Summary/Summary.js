import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Summary.css'
export default function Summary(props) {
  const [showForm, setShowForm] = useState(false);
  const[Submitted,setSubmitted]=useState(false);
  const {show,summary}=props;
    const onClickHandler = () => {
        setShowForm(!showForm);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setShowForm(!showForm);
    }
    const onSuccessfullHandler = (e)=>{
      setSubmitted(false);
    }
    const getImgURL = (image)=>{
      if(image !== null){
          console.log(image);
          let url= image["original"]
          // console.log(url);
          return url;
      }
  }
    if(showForm) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  return (
    <div>
      <h1>Summary  </h1>
      <div className='show_details'>
        <div className='show_img'><img src={getImgURL(show.show.image)} alt="Unavailable"></img></div>
        <div className='details'>
          <p className='description'><strong>Show Name : </strong>{show.show["name"]}</p>
          <p className="description" ><strong>Type : </strong>{show.show["type"]}</p>
          <p className="description" ><strong>Language : </strong>{show.show["language"]}</p>
          <p className="description" ><strong>Genres : </strong>{show.show["genres"].join(' , ')}</p>
          <p className="description" ><strong>Status : </strong>{show.show["status"]}</p>
          {!show.show["status"]!=="Ended" && show.show["Ended"] && <p className="description" ><strong>Run Time : </strong>{show.show["runtime"]}</p>}
          <p className="description" ><strong>Premiered : </strong>{show.show["premiered"]}</p>
          {!show.show["status"]!=="Ended" && show.show["Ended"] && <p > < strong > Ended : </strong>{show.show["ended"]}</p >}
          <p><strong>Summary : </strong><div dangerouslySetInnerHTML={{__html: summary}}></div></p>
        </div>
        
      </div>
      <center><button className="book-btn" onClick={onClickHandler}><span className="price" > $250 </span>  <span className="buy" >Book Now</span></button></center>
      {showForm && (
                <div className='modal'>
                  <div onClick={onClickHandler} className="overlay"></div>

                  <form className="modal-content" onSubmit={onSubmitHandler}>
                      <div className="input">
                        <input type="text" className="input-field" id='movie_name' placeholder="Name" defaultValue={props.show.show["name"]}/>
                        <span></span>
                        <label for='movie_name' className="input-label">Movie Name : </label>
                      </div>
                      <div className='input'>
                        <input type="email" className="input-field" placeholder="Email" />
                        <span></span>
                        <label for='Email' className="input-label">Enter the Email : </label>
                      </div>
                      <div className='input'>
                        <input type="text" className="input-field" placeholder="seatno" />
                        <span></span>
                        <label for='seatno' className="input-label">Enter the Seat No : </label>
                      </div>
                      <button className="submit-modal" type="submit"><span>Book Ticket</span></button>
                  </form>
                </div>
      )}
      {Submitted && (<div className='modal'>
      <div onClick={onClickHandler} className="overlay"></div>
      <div className="modal-content">
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
        <h2>Successfully booked the ticket !</h2>
        <button className="ok-modal" onClick={onSuccessfullHandler}><Link to='/'><span>Ok</span></Link></button>
      </div>
      </div>)}
    </div>
  )
}
