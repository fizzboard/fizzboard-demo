import { Box, Button } from "@mui/material"
import { getColumnLetter } from "~/utils"

interface ActiveGridSelectorProps {
  rowCount: number
  columnCount: number
  activeGridCell: string
  onActiveGridCellChange: (row: number, col: number) => void
}

export const ActiveGridSelector = ({ rowCount, columnCount, activeGridCell, onActiveGridCellChange }: ActiveGridSelectorProps) => {

  const handleCellClick = (row: number, col: number) => {
    onActiveGridCellChange(row, col)
  }

  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        border: "1px solid #808",
        width: 400,
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        Array.from({ length: columnCount }).map((_, colIndex) => {
          const cellId = `${getColumnLetter(colIndex)}${rowIndex + 1}`
          const isActive = cellId === activeGridCell
          return (
            <Button
              key={cellId}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              sx={{
                // width: '100%',
                height: '100%',
                minWidth: 100,
                padding: 0,
                fontSize: '0.75rem',
                backgroundColor: isActive ? 'primary.main' : 'background.paper',
                color: isActive ? 'primary.contrastText' : 'text.primary',
                '&:hover': {
                  backgroundColor: isActive ? 'primary.dark' : 'action.hover',
                },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={`Select cell ${cellId}`}
            >
              {cellId}
            </Button>
          )
        })
      ))}
    </Box>
  )
}
