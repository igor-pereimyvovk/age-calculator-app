import { useState } from "react";
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import Wrapper from "./components/UI/Wrapper";
import BirthForm from "./components/BirthForm";
import UserAge from "./components/UserAge";
import { theme } from "./theme/theme";

function App() {
    const [userBirth, setUserBirth] = useState({
        day: 0,
        month: 0,
        year: 0,
    });
    const [showAge, setShowAge] = useState(false);

    const media = useMediaQuery("(max-width:650px)");

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Box
                    sx={{
                        width: "570px",
                        px: media ? 2.2 : 5,
                        py: 5,
                        backgroundColor: "hsl(0, 0%, 100%)",
                        borderRadius: "15px 15px 25% 15px",
                    }}
                >
                    <BirthForm
                        setUserBirth={setUserBirth}
                        setShowAge={setShowAge}
                    />
                    <UserAge userBirth={userBirth} showAge={showAge} />
                </Box>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
