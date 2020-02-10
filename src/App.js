import React from 'react';
import Countdown from 'react-countdown';
import Slider from "react-slick";
import { isMobile } from "react-device-detect";
import hildur1 from "./hildur1.jpg";
import hildur2 from "./hildur2.jpg";
import hildur3 from "./hildur3.jpg";
import hildur4 from "./hildur4.jpg";
import hildur5 from "./hildur5.jpg";
import hildur6 from "./hildur6.jpg";
import hildur7 from "./hildur7.jpg";
import "slick-carousel/slick/slick.css";

import './App.css';

function App() {
  let now = () => {
    let date = new Date();
    let utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
                            date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    return utc;
  };
  let hildurLendir = new Date(Date.UTC(2020, 3, 2, 22, 30, 0, 0));
  let hildurLoftid = new Date(Date.UTC(2020, 3, 2, 20, 5, 0, 0));
  let formatTime = (days, hours, minutes, seconds) => {
    return <span>
          {days === 0 ? '' : <span>{days} {days%10 === 1 ? 'dag' : 'daga'} </span>}
          {hours === 0 ? '' : <span>{hours} {hours%10 === 1 ? 'klukkustund' : 'klukkustundir'} </span>}
          {minutes === 0 ? '' : <span>{minutes} {minutes%10 === 1 ? 'mínútu' : 'mínútur'} </span>}
          {seconds === 0 ? '' : <span>{seconds} {seconds%10 === 1 ? 'sekúndu' : 'sekúndur'}</span>}
        </span>;
  };
  const rendererLendir = ({ total, days, hours, minutes, seconds, completed }) => {
    return (
      <div className={'banner'} id={'countdownLendir'}>
        {completed ?
          <span>Þú ert komin!</span>
          :
          <span>Hildur lendir á Íslandi eftir:
            <br/>
            {formatTime(days, hours, minutes, seconds)}
          </span>
        }
      </div>
    );
  };
  const rendererLoftid = ({ total, days, hours, minutes, seconds, completed }) => {
    return (
      <div className={'banner'} id={'countdownLoftid'}>
        {completed ?
          <span>Þú ert í flugvélinni!</span>
          :
          <span>Hildur fer í flugvélina eftir:
            <br/>
            {formatTime(days, hours, minutes, seconds)}
          </span>
        }
      </div>
    );
  };
  var sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1:2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    };
  return (
    <div className="App">
      <div className="heart love1" style={isMobile ? {top: '20%'} : {}}></div>
      <div className="heart love2" style={isMobile ? {top: '20%'} : {}}></div>
      {isMobile ? '' :
        <div>
          <div className="heart love1 ver1"></div>
          <div className="heart love2 ver1"></div>

          <div className="heart love1 ver2"></div>
          <div className="heart love2 ver2"></div>

          <div className="heart love1 ver3"></div>
          <div className="heart love2 ver3"></div>

          <div className="heart love1 ver4"></div>
          <div className="heart love2 ver4"></div>
        </div>
      }
      <Slider {...sliderSettings}>
        <div>
          <img alt="hildur-1" src={hildur1}/>
        </div>
        <div>
          <img alt="hildur-2" src={hildur2}/>
        </div>
        <div>
          <img alt="hildur-3" src={hildur3}/>
        </div>
        <div>
          <img alt="hildur-4" src={hildur4}/>
        </div>
        <div>
          <img alt="hildur-5" src={hildur5}/>
        </div>
        <div>
          <img alt="hildur-6" src={hildur6}/>
        </div>
        <div>
          <img alt="hildur-7" src={hildur7}/>
        </div>
      </Slider>
      <Countdown
        date={hildurLendir}
        renderer={rendererLendir}
        now={now} />
      {isMobile ? '' :
        <Countdown
          date={hildurLoftid}
          renderer={rendererLoftid}
          now={now} />
      }
    </div>
  );
}

export default App;
