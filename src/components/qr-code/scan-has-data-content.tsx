import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { ScanState } from "./QrCodeScanForScreenSlotDialog";
import { FzbScreenScanSchema } from "~/zod-types/screen-scan";
import { useEffect } from "react";


interface ScanHasDataContentProps {
  scanData: string;
  onUpdateScanState: (scanState: ScanState) => void;
}


export const ScanHasDataContent = ({ scanData, onUpdateScanState }: ScanHasDataContentProps) => {

  useEffect(() => {
    const parsedScreenScan = FzbScreenScanSchema.safeParse(JSON.parse(scanData));
    if (!parsedScreenScan.success) {
      onUpdateScanState({
        scanState: 'error',
        errorMessage: 'Invalid screen scan',
      });
    } else {
      onUpdateScanState({
        scanState: 'ready-to-post',
        screenId: parsedScreenScan.data.screenId,
      });
    }
  }, [scanData, onUpdateScanState]);

  return (
    <Box>
      <Typography variant="h6">Processing scan data...</Typography>
    </Box>
  );
};
