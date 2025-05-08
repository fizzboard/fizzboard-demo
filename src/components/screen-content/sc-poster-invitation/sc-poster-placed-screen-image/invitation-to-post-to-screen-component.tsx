import { PutYourPostHereComponent } from "../../post-types/no-post/put-your-post-here/put-your-post-here-component";
import { Dimensions } from ".";
import { FzbScreenConfigPosterPlacedScreenImageData } from "~/zod-types/screen-config/fzb-poster-placed-screen-image";
import { QRCodeSVG } from "qrcode.react";
import { Box, Typography, Link } from "@mui/material";
import { addUrlParam, POST_TO_SCREEN_URL_PARAMS_DEMO_USER_PROFILE_ID } from "~/url-utils";


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

  const urlWithDemoUserId = screenConfig.invitationParameters.demoUserId ?
    addUrlParam(sendPostToScreenUrl, POST_TO_SCREEN_URL_PARAMS_DEMO_USER_PROFILE_ID, screenConfig.invitationParameters.demoUserId) :
    sendPostToScreenUrl;
  
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

      <Link href={urlWithDemoUserId} target="_blank" rel="noopener noreferrer">
        <QRCodeSVG 
          value={urlWithDemoUserId}
        />
      </Link>

      <Typography>
        {screenConfig.invitationParameters.belowQrCodeText}
      </Typography>
    </Box>
  )
};
