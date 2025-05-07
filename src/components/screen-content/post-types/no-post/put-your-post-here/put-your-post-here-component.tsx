import { QRCodeSVG } from "qrcode.react"
import { Link } from "react-router-dom"
import { Dimensions } from "../../../ScreenContentComponent";


interface PutYourPostHereComponentProps {
  dimensions: Dimensions | null;
  sendPostToScreenUrl: string;
  gridCoordinate: string;
}

export const PutYourPostHereComponent = ({
  dimensions,
  sendPostToScreenUrl,
}: PutYourPostHereComponentProps) => {
  
  return (
    <>
      <div>
        <Link 
          to={sendPostToScreenUrl}
        >
          Scan QR code to post a message here
        </Link>
      </div>
      <QRCodeSVG 
        value={sendPostToScreenUrl}
      />
      {
        dimensions && (
          <>
            <div>
              {`${dimensions.width.toFixed(0)}x${dimensions.height.toFixed(0)}`} - {`${(dimensions.width / dimensions.height).toFixed(2)}:1`}
            </div>
          </>
        )
      }
    </>
  )
};