import { FC } from "react";
import { Snackbar, Alert, Button } from "@pankod/refine-mui";

interface IActionSnackBar {
  open: boolean;
  onClose: () => void;
  message: string;
  onUndoAction: any;
}

const ActionSnackBar: FC<IActionSnackBar> = ({
  open,
  message,
  onClose,
  onUndoAction,
}): JSX.Element => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ "& > *": { alignItems: "center" } }}
      autoHideDuration={5000}
      open={open}
    >
      <Alert onClose={onClose} severity="info" sx={{ width: "100%" }}>
        {message}
        <Button
          size="small"
          variant="outlined"
          color="success"
          sx={{
            textTransform: "uppercase",
            fontSize: "xs",
            fontWeight: "xl",
            ml: 2,
          }}
          onClick={onUndoAction}
        >
          Undo
        </Button>
      </Alert>
    </Snackbar>
  );
};

export default ActionSnackBar;
