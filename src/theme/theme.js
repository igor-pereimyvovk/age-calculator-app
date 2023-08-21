import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "6px",
                        fontSize: "1.4rem",
                        fontWeight: "bold",

                        "& fieldset": {
                            borderWidth: "1.4px",
                            borderColor: "hsl(0, 0%, 80%)",
                        },

                        "&:hover fieldset": {
                            borderWidth: "1.4px",
                            opacity: "0.6",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "hsl(259, 100%, 65%)",
                            borderWidth: "1.4px",
                        },
                    },
                    "& .MuiFormHelperText-root": {
                        margin: "5px 0 0",
                        fontStyle: "italic",
                        letterSpacing: "-0.3px",
                    },

                    "& .MuiOutlinedInput-input": {
                        caretColor: "hsl(259, 100%, 65%)",
                        "&::placeholder": {
                            opacity: "100%",
                            color: "hsl(0, 1%, 44%)",
                        },
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    palette: {
        error: {
            main: "hsl(0, 100%, 67%)",
        },
    },
});
