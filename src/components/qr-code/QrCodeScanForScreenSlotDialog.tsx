import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { ScannerContent } from './scanner-content';
import { useState } from 'react';
import { FzbScreenId } from '~/zod-types/branded-strings';


export type ScanState = {
  scanState: 'initializing'
 } | {
  scanState: 'scanning'
 } | {
  scanState: 'scan-has-data'
  scanData: string;
 } | {
  scanState: 'ready-to-post'
  screenId: FzbScreenId;
 } | {
  scanState: 'error'
  errorMessage: string;
 };

interface QrCodeScanForScreenSlotDialogProps {
  open: boolean;
  onClose: () => void;
  
  onScreenScanComplete: (screenId: FzbScreenId) => void;
}

export const QrCodeScanForScreenSlotDialog = ({
  open,
  onClose,
  onScreenScanComplete,
}: QrCodeScanForScreenSlotDialogProps) => {

  const [scanState, setScanState] = useState<ScanState>({
    scanState: 'scanning',
  });
  
  const onUpdateScanState = (newScanState: ScanState) => {
    setScanState(newScanState);
  };

  
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Scan to Post to FizzBoard</DialogTitle>
      <DialogContent>
        <ScannerContent
          scanState={scanState}
          onUpdateScanState={onUpdateScanState}
          onScreenScanComplete={onScreenScanComplete}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
