import { useEffect, useRef } from "react";
const QR = require('qrcode');

type QRCodeProps = {
  QRString: string;
};

export default function QRCode({ QRString }: QRCodeProps) {
  const canvasEl = useRef(null);

  useEffect(() => {
    console.log(canvasEl)
    QR.toCanvas(canvasEl.current, QRString, function(error) {
      if (error) console.error(error)
      console.log('success!');
    });
  }, [QRString]);

  return (
    <canvas id="qr" ref={canvasEl}></canvas>
  );
}