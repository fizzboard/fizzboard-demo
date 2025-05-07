import { Button } from "@mui/material"
import { UserBoard } from "~/zod-types/demo-users/user-board";
import { useNavigate } from "react-router-dom";


interface MyBoardItemProps {
  board: UserBoard;
}

export const MyBoardItem = ({ board }: MyBoardItemProps) => {
  const navigate = useNavigate();
  
  const boardItemConfigLink = `/demo-board-configs/${board.id}`;
  
  const navigateToBoardItemConfig = () => {
    navigate(boardItemConfigLink);
  }


  return (
    <Button onClick={navigateToBoardItemConfig}>
      { board.name }
    </Button>
  )
}
