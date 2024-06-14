import React, { useState } from 'react';
import styles from '../CreateShort.module.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { copyToClipboard, handleDownload, qrCodeRef } from '../../../utils/utils';
import { CgCopy } from "react-icons/cg";
import { MdOutlineFileDownload } from "react-icons/md";


function UrlShortener({ shortenedUrlTitle, placeholder, buttonCopyUrl, longUrl, description }) {

  const [searchParams] = useSearchParams();

  const shortId = searchParams.get('shortId');
  const url = searchParams.get('url');
  const domain = window.location.origin;

  const shortUrl = `${domain}/${shortId}`;

  const copyShortUrl = () => {
    copyToClipboard(shortUrl)
  }

  const downloadQRCode = () => {
    handleDownload("myQRCOde-123456")
  };

  return (
    <div className={styles.urlShortener}>
      <h2>{shortenedUrlTitle}</h2>
      <p>{description}</p>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={shortUrl}
          readOnly
        />
        <button
        onClick={copyShortUrl}
        id={styles.actionbutton}
        style={{
          borderRight:"1px solid black"
        }}
        ><CgCopy 
        color='#000'
        />
        </button>
        <button
        onClick={downloadQRCode}
        id={styles.actionbutton}
        style={{
         borderTopRightRadius:"4px",
         borderBottomRightRadius:"4px"
        }}


        >
          <MdOutlineFileDownload/>
          </button>
      </div>
      <p>Long URL: <a href={url} target="_blank" rel="noopener noreferrer" style={{color:"#a7b8eb"}}>{url}</a></p>
    </div>
  );
}

export default UrlShortener;
