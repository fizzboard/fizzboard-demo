import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FzbBoardConfigSchema, FzbBoardGridDimensionsSchema } from "~/zod-types/screen-config";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography, Link } from "@mui/material";
import { FizzBoardAppFrame } from "~/components/app-frame/app-frame";
import { createFizzBoardId, SERVER_URL } from "~/utils";
import { z } from "zod";

type FormData = z.input<typeof FzbBoardConfigSchema>;

export const DemoBoardLauncher = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FzbBoardConfigSchema),
    defaultValues: {
      id: createFizzBoardId(),
      name: "My FizzBoard Demo Board",
      gridDimensions: "1x2",
    },
  });

  const gridDimensions = watch("gridDimensions");
  

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const getPlural = (count: number, singular: string, plural: string) => {
    return count === 1 ? singular : plural;
  }

  const [rowCount, columnCount] = gridDimensions.split("x").map(Number);

  const launchBoardUrl = `${SERVER_URL}/boards/${watch("id")}?rows=${rowCount}&columns=${columnCount}`;

  return (
    <FizzBoardAppFrame>
      <title>FizzBoard Demo - Configuration</title>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FizzBoard Launcher
        </Typography>
        <form 
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            
            <TextField
              label="Board ID"
              {...register("id")}
              error={!!errors.id}
              helperText={errors.id?.message}
              disabled
            />

            <TextField
              label="Board Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <FormControl fullWidth error={!!errors.gridDimensions}>
              <InputLabel>Grid Dimensions</InputLabel>
              <Select
                label="Grid Dimensions"
                value={gridDimensions}
                {...register("gridDimensions")}
              >
                {FzbBoardGridDimensionsSchema.options.map((option) => {
                  const [rows, cols] = option.value.split("x").map(Number);
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value} [{rows * cols} {getPlural(rows * cols, "screen", "screens")}]
                    </MenuItem>
                  )
                })}
              </Select>
              {errors.gridDimensions && (
                <Typography color="error" variant="caption">
                  {errors.gridDimensions.message}
                </Typography>
              )}
            </FormControl>

            <Link href={launchBoardUrl}>
              <Button type="button" variant="contained" color="secondary" fullWidth>
                Launch FizzBoard
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </FizzBoardAppFrame>
  );
};
