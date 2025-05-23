import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK } from '~/zod-types/screen-config/fzb-show-permanent-image';
import { SCREEN_CONFIG_TYPE_POSTER_INVITATION_ADD_IMAGE_TO_BOARD_IMAGE_POOL } from '~/zod-types/screen-config/fzb-poster-invitation-add-image-to-board-image-pool';
import { FzbScreenConfigData } from '~/zod-types/screen-config/fzb-screen-config';
import { SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL } from '~/zod-types/screen-config/fzb-show-image-from-board-image-pool';
import { SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK } from '~/zod-types/screen-config/fzb-show-permanent-blank';
import { FzbScreenConfigType } from '~/zod-types/branded-strings';
import { createDefaultScreenSettingsData } from '~/data/create-screen-settings-data';
import { SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE } from '~/zod-types/screen-config/fzb-poster-placed-screen-image';


interface ScreenSettingsComponentProps {
  screenSettings: FzbScreenConfigData;
  onScreenSettingsUpdate: (screenSettings: FzbScreenConfigData) => void;
  isDisabled: boolean;
}

export const ScreenSettingsComponent = ({
  screenSettings,
  onScreenSettingsUpdate,
  isDisabled,
}: ScreenSettingsComponentProps) => {

  const allowedScreenTypes = [
    SCREEN_CONFIG_TYPE_SHOW_PERMANENT_BLANK,
    SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK,
    SCREEN_CONFIG_TYPE_SHOW_IMAGE_FROM_BOARD_IMAGE_POOL,
    SCREEN_CONFIG_TYPE_POSTER_INVITATION_ADD_IMAGE_TO_BOARD_IMAGE_POOL,
    SCREEN_CONFIG_TYPE_POSTER_PLACED_SCREEN_IMAGE,
  ]

  return (
    <>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Screen Type</InputLabel>
        <Select
          disabled={isDisabled}
          label="Screen Type"
          value={screenSettings.screenType}
          onChange={(e) => {
            const updatedScreenType = e.target.value as FzbScreenConfigType;
            const defaultUpdatedScreenSettings = createDefaultScreenSettingsData(updatedScreenType);
            onScreenSettingsUpdate(defaultUpdatedScreenSettings);
          }}
        >
          {
          allowedScreenTypes.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
              );
            })}
        </Select>
        {
          screenSettings.screenType === SCREEN_CONFIG_TYPE_SHOW_PERMANENT_IMAGE_LINK && (
            <div style={{ backgroundColor: screenSettings.backgroundColor }}>
              {screenSettings.imageUrl}
            </div>
          )
        }
      </FormControl>
    </>
  );
};
