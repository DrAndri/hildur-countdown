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
import "slick-carousel/slick/slick-theme.css";

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
  const renderer = ({ total, days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Þú ert á leiðinni!";
    } else {
      // Render a countdown
      return <span>
            {days} {days%10 === 1 ? 'dag' : 'dagar'} {hours} {hours%10 === 1 ? 'klukkustund' : 'klukkustundir'} {minutes} {minutes%10 === 1 ? 'mínútu' : 'mínútur'} {seconds} {seconds%10 === 1 ? 'sekúndu' : 'sekúndur'}
          </span>;
    }
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
      <div class="heart love1" style={isMobile ? {top: '20%'} : {}}></div>
      <div class="heart love2" style={isMobile ? {top: '20%'} : {}}></div>
      {isMobile ? '' :
        <div>
          <div class="heart love1 ver1"></div>
          <div class="heart love2 ver1"></div>

          <div class="heart love1 ver2"></div>
          <div class="heart love2 ver2"></div>

          <div class="heart love1 ver3"></div>
          <div class="heart love2 ver3"></div>

          <div class="heart love1 ver4"></div>
          <div class="heart love2 ver4"></div>
        </div>
      }
      <Slider {...sliderSettings}>
        <div>
          <img src={hildur1}/>
        </div>
        <div>
          <img src={hildur2}/>
        </div>
        <div>
          <img src={hildur3}/>
        </div>
        <div>
          <img src={hildur4}/>
        </div>
        <div>
          <img src={hildur5}/>
        </div>
        <div>
          <img src={hildur6}/>
        </div>
        <div>
          <img src={hildur7}/>
        </div>
      </Slider>
      <div id={'countdown'}>
        <span>Hildur lendir á Íslandi eftir:</span>
        <br/>
        <Countdown
          date={hildurLendir}
          renderer={renderer}
          now={now} />
      </div>
    </div>
  );
}

export default App;
