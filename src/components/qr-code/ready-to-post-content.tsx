import { FzbScreenId } from "~/zod-types/branded-strings";
import { Button } from "@mui/material";
import { ScanState } from "./QrCodeScanForScreenSlotDialog";


interface ReadyToPostContentProps {
  screenId: FzbScreenId;
  onUpdateScanState: (scanState: ScanState) => void;
  onPostToScreen: (screenId: FzbScreenId) => void;
}


export const ReadyToPostContent = ({ screenId, onUpdateScanState, onPostToScreen }: ReadyToPostContentProps) => {

  const screenGridElement = screenId.split('#')[1];

  const doRescan = () => {
    onUpdateScanState({ scanState: 'scanning' });
  };
  
  return (
    <>
      <div>Post to FizzBoard Screen {screenGridElement}?</div>
      <Button onClick={() => onPostToScreen(screenId)}>Post</Button>
      <Button onClick={doRescan}>Re-scan</Button>
    </>
  );
};
