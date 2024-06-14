import React,{useEffect} from 'react';
import styles from './CreateShort.module.css';
import { STRINGS } from './constants';
import UrlShortener from './components/UrlShortener';
import UrlDetails from './components/UrlDetails';
import UrlActions from './components/UrlActions';
import Header from '../HomeScreen/components/Header';
import { useSearchParams } from 'react-router-dom';
import QrComponent from './components/QrComponent';

function ShortIdDetails() {
  const [searchParams] = useSearchParams();

  const shortId = searchParams.get('shortId');
  const url = searchParams.get('url');
  
  useEffect(() => {

    if(!shortId || !url){
      window.location.href = "/"
    }
 
  }, [shortId,url])
  
  const domain = window.location.origin;

  const shortUrl = `${domain}/${shortId}`;

  return (
    <div className={styles.App}>
      <Header title={STRINGS.title} />
      <QrComponent
      shortIdUrl={shortUrl}
      />
      <UrlShortener 
        shortenedUrlTitle={STRINGS.shortenedUrlTitle}
        placeholder={STRINGS.placeholder} 
        buttonCopyUrl={STRINGS.buttonCopyUrl} 
        longUrl={STRINGS.longUrl} 
        description={STRINGS.description}
      />
      <UrlDetails 
        note={STRINGS.note} 
      />
      <UrlActions 
        buttonClicks={STRINGS.buttonClicks} 
        buttonShortenAnother={STRINGS.buttonShortenAnother} 
      />
    </div>
  );
}

export default ShortIdDetails;
