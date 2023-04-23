import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { quotes } from './Quotes'
import domtoimage from 'dom-to-image';
import { RWebShare } from "react-web-share";
import {
  exportComponentAsJPEG,
  // exportComponentAsPDF,
  // exportComponentAsPNG,
} from 'react-component-export-image';

function QuotesGenerator() {
  const [currentQuote, setCurrentQuote] = useState({});

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }

  const downloadRef = useRef();

  const handleDownloadImage = () => {
    const targetEl = downloadRef.current;
    domtoimage.toJpeg(targetEl, { quality: 1.0 }).then((dataUrl) => {
      let link = document.createElement('a');
      link.download = 'my-image-name.png';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className='container'>

      <div className='card' ref={downloadRef}>

        <div className="author-box">
          <div className="author-img">
            <img src={currentQuote.image} alt="author" />
          </div>
          <div className="author-creadit">
            <h2>{currentQuote.author}</h2>
            <p>{currentQuote.anime}</p>
          </div>
        </div>

        <div className="card-text">
          <p>{currentQuote.quote}</p>
        </div>

 

      </div>

      <div className="button-box">
        <button className='generate-btn' onClick={getRandomQuote}>Generate</button>
        <button className='download-btn' onClick={() => exportComponentAsJPEG(downloadRef)}>Download</button>
        <Link to="/create" className='create-btn'>Create</Link>
      </div>

      <RWebShare
        data={{
          text: "Anime Quotes About Life",
          url: window.location.href,
          title: "Anime Quotes",
        }}
        onClick={() => console.log("shared successfully!")}>
        <div className="creadit" >
          <div className="img-icon">
            <img src="./assets/share-icon.gif" alt="icon" />
          </div>
          <div className="share">
            <h4>share</h4>
          </div>
        </div>
      </RWebShare>
    </div>
  );
}

export default QuotesGenerator;


