import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GRID_DIMENSION_OPTIONS, GridDimensionId } from "~/zod-types/board-config/grid-dimensions";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { createFizzBoardId } from "~/utils";
import { z } from "zod";
import { FzbBoardConfigSchema } from "~/zod-types/board-config/board-config";
import { BOARD_LOCATION_SETTINGS, BoardLocationSettingId } from "~/zod-types/board-config/board-location-setting";
import { createBoardUrl } from "~/url-utils";
import { FzbBoardId } from "~/zod-types/branded-strings";


type FormData = z.input<typeof FzbBoardConfigSchema> & {
  gridDimensionsId: GridDimensionId;
  boardLocationSettingId: BoardLocationSettingId;
};

export const DemoBoardLauncher = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FzbBoardConfigSchema),
    defaultValues: {
      boardId: createFizzBoardId(),
      name: "My Demo FizzBoard",
      gridDimensionsId: "2x1" as GridDimensionId,
      boardLocationSettingId: "bls-library" as BoardLocationSettingId,
    },
  });

  const boardId = watch("boardId");
  const gridDimensionsId = watch("gridDimensionsId");
  const boardLocationSettingId = watch("boardLocationSettingId");

  const gridDimensionsOption = GRID_DIMENSION_OPTIONS.find(option => option.id === gridDimensionsId);
  const boardLocationSettingOption = BOARD_LOCATION_SETTINGS.find(option => option.id === boardLocationSettingId);

  if (!gridDimensionsOption || !boardLocationSettingOption) {
    return null;
  }

  const { rowCount, columnCount } = gridDimensionsOption;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const launchBoardUrl = createBoardUrl(
    boardId as FzbBoardId,
    rowCount,
    columnCount,
    boardLocationSettingId
  );

  const onLaunchClicked = () => {
    window.location.href = launchBoardUrl;
    console.log(launchBoardUrl);
  }

  console.log("locationSetting", boardLocationSettingOption);

  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo - Configuration</title>
      <Box sx={{ 
        maxWidth: 600, 
        minWidth: 400,
        mx: "auto", 
        p: 3 
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FizzBoard Launcher
        </Typography>
        <form 
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            
            <TextField
              label="Board ID"
              {...register("boardId")}
              error={!!errors.boardId}
              helperText={errors.boardId?.message}
              disabled
            />

            <TextField
              label="Board Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <FormControl fullWidth error={!!errors.gridDimensionsId}>
              <InputLabel>Board Setting</InputLabel>

              <Select
                label="Board Setting"
                value={boardLocationSettingId}
                onChange={(e) => {
                  const selectedOptionId = e.target.value as BoardLocationSettingId;
                  const selectedOption = BOARD_LOCATION_SETTINGS.find(option => option.id === selectedOptionId);
                  if (selectedOption) {
                    register("boardLocationSettingId").onChange({
                      target: {
                        value: selectedOptionId,
                        name: "boardLocationSettingId"
                      }
                    });
                  }
                }}
              >
                {BOARD_LOCATION_SETTINGS.map((option) => {
                  return (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  )
                })}
              </Select>

              {errors.gridDimensionsId && (
                <Typography color="error" variant="caption">
                  {errors.gridDimensionsId.message}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth error={!!errors.gridDimensionsId}>
              <InputLabel>Grid Dimensions</InputLabel>

              <Select
                label="Grid Dimensions"
                value={gridDimensionsId}
                onChange={(e) => {
                  const selectedOptionId = e.target.value as GridDimensionId;
                  const selectedOption = GRID_DIMENSION_OPTIONS.find(option => option.id === selectedOptionId);
                  if (selectedOption) {
                    register("gridDimensionsId").onChange({
                      target: {
                        value: selectedOption.id,
                        name: "gridDimensionsId"
                      }
                    });
                  }
                }}
              >
                {Object.values(GRID_DIMENSION_OPTIONS).map((option) => {
                  return (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  )
                })}
              </Select>

              {errors.gridDimensionsId && (
                <Typography color="error" variant="caption">
                  {errors.gridDimensionsId.message}
                </Typography>
              )}
            </FormControl>

            <Button 
              type="button" 
              variant="contained" 
              color="secondary" 
              fullWidth
              onClick={onLaunchClicked}
            >
              Launch
            </Button>
          </Box>
        </form>
      </Box>
    </FizzBoardAppFrame>
  );
};
