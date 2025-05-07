import { PutYourPostHereComponent } from "../../post-types/no-post/put-your-post-here/put-your-post-here-component";
import { Dimensions } from ".";
import { FzbScreenConfigPosterPlacedScreenImageData } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";
import { QRCodeSVG } from "qrcode.react";
import { Box, Typography } from "@mui/material";


interface InvitationToPostToScreenComponentProps {
  screenConfig: FzbScreenConfigPosterPlacedScreenImageData;
  sendPostToScreenUrl: string;

  dimensions: Dimensions | null;
}

export const InvitationToPostToScreenComponent = (props: InvitationToPostToScreenComponentProps) => {

  const {
    screenConfig,
    sendPostToScreenUrl,
    dimensions,
  } = props;

  if (!screenConfig.invitationParameters) {
    return (
      <PutYourPostHereComponent 
        dimensions={dimensions}
        gridCoordinate={""}
        sendPostToScreenUrl={sendPostToScreenUrl}
      />
    )
  }
  
  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    > 
      <Typography>
        {screenConfig.invitationParameters.aboveQrCodeText}
      </Typography>
      <QRCodeSVG 
        value={sendPostToScreenUrl}
      />

      <Typography>
        {screenConfig.invitationParameters.belowQrCodeText}
      </Typography>
    </Box>
  )
};
