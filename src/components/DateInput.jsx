import { Box, TextField, Typography, useMediaQuery } from "@mui/material";

const DateInput = ({
    unitOfTime,
    value,
    handleChange,
    handleBlur,
    handleFocus,
    placeholder,
    error,
}) => {
    const media = useMediaQuery("(max-width:520px)");

    return (
        <Box>
            <Typography
                variant="body2"
                sx={{
                    color: error.status
                        ? "hsl(0, 100%, 67%)"
                        : "hsl(0, 1%, 44%)",
                    fontSize: media ? "12.5px" : "11.5px",
                    letterSpacing: "2px",
                    mb: "5px",
                }}
            >
                {unitOfTime}
            </Typography>
            <TextField
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={error.status ? error.text : " "}
                error={error.status}
                name={unitOfTime}
                placeholder={placeholder}
                sx={{
                    width: media ? "97px" : "130px",
                    "& .MuiOutlinedInput-input": {
                        padding: media ? "15px 16px" : "12.5px 16px",
                    },
                }}
            />
        </Box>
    );
};

export default DateInput;
