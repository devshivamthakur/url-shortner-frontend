import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createShortIdByUrl } from '../../../utils/API/ApICall';

function UrlShortener({ placeholder, button, errorEnterUrl, errorValidUrl, description }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShorten = async () => {
    if (!url) {
      setError(errorEnterUrl);
      return;
    }
    if (!isValidUrl(url)) {
      setError(errorValidUrl);
      return;
    }
    setError('');
    setLoading(true);
    await onPressCreateShortId(url);
    setLoading(false);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const onPressCreateShortId = async (url) => {
    try {
      const result = await createShortIdByUrl(url);
      if (!result) {
        setError("Unable to create shortId. Please try again later.");
        return;
      }
      navigate(`/shortener?shortId=${result.shortId}&url=${encodeURIComponent(url)}`);
    } catch (error) {
      setError("Unable to create shortId. Please try again later.");
      return;
    }
  };

  return (
    <div>
      <div className="input-container">
        <input 
          type="text" 
          placeholder={placeholder} 
          value={url} 
          className='url-input'
          onChange={(e) => setUrl(e.target.value)} 
        />
        <button onClick={handleShorten} disabled={loading}>{button}</button>
      </div>
      {error && <p className="error">{error}</p>}
      {loading && <p>shortId is creating...</p>}
      <p
        style={{
          width: "67%",
          alignSelf: "center",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default React.memo(UrlShortener);
