import React from 'react'
import QRCode from 'react-qr-code';
import { qrCodeRef } from '../../../utils/utils';

const QrComponent = ({
    shortIdUrl
}) => {

    return (
        <div style={{
            background: 'white',
            padding: '16px',
            display: "inline-block",
            margin: "10px",
            height: "auto",
            maxWidth: 180,
            width: "100%"
        }}
        id="myQRCOde-123456"
        
        >
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={shortIdUrl}
                viewBox={`0 0 256 256`}
                ref={qrCodeRef}
            />

        </div>
    )
}

export default QrComponent
