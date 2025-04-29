import { Box } from "@mui/material";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRef } from "react";
import { useEffect } from "react";
import { ScanState } from "./QrCodeScanForScreenSlotDialog";


interface ScanningContentProps {
  onUpdateScanState: (scanState: ScanState) => void;
}


export const ScanningContent = ({ onUpdateScanState }: ScanningContentProps) => {
  
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (!scannerRef.current) {
      // Wait for the next tick to ensure the DOM element is mounted
      setTimeout(() => {
        const element = document.getElementById('qr-reader');
        if (!element) {
          console.error('QR reader element not found');
          return;
        }

        scannerRef.current = new Html5QrcodeScanner(
          "qr-reader",
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          false
        );

        scannerRef.current.render(
          (decodedText) => {
            onUpdateScanState({
              scanState: 'scan-has-data',
              scanData: decodedText,
            });
          },
          (error) => {
            console.warn(`QR Code scan error: ${error}`);
          }
        );
      }, 0);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
        scannerRef.current = null;
      }
    };
  }, [onUpdateScanState]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <div id="qr-reader" style={{ width: '100%' }}></div>
    </Box>  );
};
