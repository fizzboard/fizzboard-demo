import { QRCodeSVG } from "qrcode.react"
import { Link } from "react-router-dom"
import { Dimensions } from "../../../ScreenContentComponent";


interface NoPostReportingComponentProps {
  dimensions: Dimensions | null;
  sendPostToScreenUrl: string;
  gridCoordinate: string;
}

export const NoPostReportingComponent = ({
  dimensions,
  sendPostToScreenUrl,
  gridCoordinate,
}: NoPostReportingComponentProps) => {
  
  return (
    <>
      {
        dimensions && (
          <>
            <div>
              {`${dimensions.width.toFixed(0)}x${dimensions.height.toFixed(0)}`}
            </div>
            <div>
              {`${(dimensions.width / dimensions.height).toFixed(2)}:1`}
            </div>
          </>
        )
      }
      <div>
        {sendPostToScreenUrl}
      </div>
      <QRCodeSVG 
        value={sendPostToScreenUrl}
        size={100}
        level="H"
      />
      <Link 
        to={sendPostToScreenUrl}
      >
        {gridCoordinate}
      </Link>
    </>
  )
};