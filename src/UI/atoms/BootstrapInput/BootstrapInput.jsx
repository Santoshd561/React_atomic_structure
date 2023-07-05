import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    color: "black",
    position: "relative",
    backgroundColor: "white",
    fontSize: 16,
    height: "30px",
    padding: "8px 13px",
    borderRadius: "6px",
    // Use the system font instead of the default Roboto font.
    fontFamily: "Libre Franklin, sans-serif",
    "&:focus": {
      borderColor: "white",
    },
  },
}));
