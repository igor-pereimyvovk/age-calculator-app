import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const FullDateString = styled(Typography)({
    fontSize: "85px",
    fontStyle: "italic",
    fontWeight: "bold",
    lineHeight: "1.1",
    letterSpacing: "-1px",
    ["@media (max-width:650px)"]: {
        fontSize: "78px",
    },
    ["@media (max-width:550px)"]: {
        fontSize: "68px",
    },
    ["@media (max-width:450px)"]: {
        fontSize: "60px",
    },
    ["@media (max-width:410px)"]: {
        fontSize: "58px",
    },
});

export default FullDateString;
