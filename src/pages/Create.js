import React, { useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import {
    exportComponentAsJPEG,
  } from 'react-component-export-image';

function Create() {

    const [image, setImage] = useState(null);
    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

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
            <div className='card crete' ref={downloadRef}>
                <div className="author-box">
                    <div className="author-img">
                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Selected Image"
                                width="35"
                                height="auto"
                            />
                        )}
                    </div>
                    <div className="author-creadit">
                        <h2 contentEditable>author</h2>
                        <p contentEditable>id</p>
                    </div>
                </div>

                <div className="card-text">
                    <p contentEditable>write here..</p>
                </div>
            </div>

            <div className="box-up-down">
                <div className="up">
                    <input type="file" onChange={handleImageUpload} />
                </div>
                <div className="dwo">
                <button className='download-btn' onClick={() => exportComponentAsJPEG(downloadRef)}>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Create