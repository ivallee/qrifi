import { QRCodeSVG } from 'qrcode.react';

type QRCodeProps = {
  QRString: string;
};

export default function QRCode({ QRString }: QRCodeProps) {

  return (
    <QRCodeSVG 
      value={QRString}
      size={150}
    />
  );
}