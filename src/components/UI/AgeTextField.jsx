import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const AgeTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        // "& fieldset": {
        //     borderColor: "hsl(0, 0%, 86%)",
        // },
        "&:focused fieldset": {
            borderColor: "hsl(259, 100%, 65%)",
        },
        "&:hover fieldset": {
            borderColor: "hsl(0, 0%, 86%)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "hsl(259, 100%, 65%)",
        },
    },
});

export default AgeTextField;
