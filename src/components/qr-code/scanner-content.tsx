import { ScanState } from "./QrCodeScanForScreenSlotDialog";
import { ScanningContent } from "./scanning-content";
import { ReadyToPostContent } from "./ready-to-post-content";
import { ErrorContent } from "./error-content";
import { ScanHasDataContent } from "./scan-has-data-content";
import { FzbScreenId } from "~/zod-types/branded-strings";


interface ScannerContentProps {
  scanState: ScanState;

  onUpdateScanState: (scanState: ScanState) => void;
  onScreenScanComplete: (screenId: FzbScreenId) => void;
}

export const ScannerContent = ({ scanState, onUpdateScanState, onScreenScanComplete }: ScannerContentProps) => {

  switch (scanState.scanState) {
    case 'scanning':
      return (
        <ScanningContent
          onUpdateScanState={onUpdateScanState}
        />
      );
    case 'scan-has-data':
      return (
        <ScanHasDataContent
          scanData={scanState.scanData}
          onUpdateScanState={onUpdateScanState}
        />
      );
    case 'ready-to-post':
      return (
        <ReadyToPostContent
          screenId={scanState.screenId}
          onUpdateScanState={onUpdateScanState}
          onPostToScreen={onScreenScanComplete}
        />
      );
    case 'error':
      return <ErrorContent />;
    default:
      return null;
  }
};
