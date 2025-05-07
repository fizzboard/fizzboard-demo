import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';
import { GridDimensionId, GRID_DIMENSION_OPTIONS } from '~/zod-types/board-config/grid-dimensions';
import { BoardLocationSettingId } from '~/zod-types/board-config/board-location-setting';
import { ActiveGridSelector } from './ActiveGridSelector';
import { ScreenSettingsComponent } from './ScreenSettingsComponent';
import { useState } from 'react';
import { FzbScreenConfigData } from '~/zod-types/screen-config/fzb-screen-config';
import { getGridCellName } from '~/utils';


interface GridSettingsDialogProps {
  open: boolean;
  onClose: () => void;

  gridDimensionsId: GridDimensionId;
  boardLocationSettingId: BoardLocationSettingId;

  allScreenSettings: FzbScreenConfigData[];
  setAllScreenSettings: (allScreenSettings: FzbScreenConfigData[]) => void;
}

export const GridSettingsDialog = ({
  open,
  onClose,
  gridDimensionsId,
  boardLocationSettingId,
  allScreenSettings,
  setAllScreenSettings,
}: GridSettingsDialogProps) => {
  
  const [activeGridCellIndex, setActiveGridCellIndex] = useState(0);
  
  const gridDimension = GRID_DIMENSION_OPTIONS.find(option => option.id === gridDimensionsId);

  if (!gridDimension) {
    console.log("No grid dimension found for gridDimensionsId:", gridDimensionsId);
    return null;
  }
  
  const rowCount = gridDimension.rowCount ?? 1;
  const columnCount = gridDimension.columnCount ?? 1;

  const activeGridCellName = getGridCellName(activeGridCellIndex, columnCount);

  const activeScreenSettings = allScreenSettings[activeGridCellIndex];
  console.log("activeScreenSettings:", activeScreenSettings);

  const onActiveGridCellChange = (row: number, col: number) => {
    const newIndex = row * columnCount + col;
    setActiveGridCellIndex(newIndex);
  }


  const onScreenSettingsChange = (updatedScreenSettings: FzbScreenConfigData) => {
    const updatedAllScreenSettings = [...allScreenSettings];
    updatedAllScreenSettings[activeGridCellIndex] = updatedScreenSettings;

    console.log("updatedAllScreenSettings", updatedAllScreenSettings);

    setAllScreenSettings(updatedAllScreenSettings);
  }

  if (!activeScreenSettings) {
    console.log("No active screen settings found for boardLocationSettingId:", boardLocationSettingId);
    return null;
  }


  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Grid Settings - {activeGridCellName}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <ActiveGridSelector
            rowCount={rowCount}
            columnCount={columnCount}
            activeGridCell={activeGridCellName}
            onActiveGridCellChange={onActiveGridCellChange}
          />
          <ScreenSettingsComponent
            screenSettings={activeScreenSettings}
            onScreenSettingsUpdate={onScreenSettingsChange}
            isDisabled={true}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
