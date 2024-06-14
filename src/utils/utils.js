import React from "react"
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
export const  qrCodeRef = React.createRef();

export const copyToClipboard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      alert('Copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  export const handleDownload = async (id) => {
    const divElement = document.getElementById(id);
  
    if (divElement === null) {
      return;
    }
  
    try {
      const dataUrl = await toPng(divElement);
      const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
      const filename = `shortnerUrl-${timestamp}.png`;
      saveAs(dataUrl, filename);
    } catch (error) {
      console.error('Failed to convert div to image', error);
    }
  };
