import { SvgIcon, useMediaQuery } from "@mui/material";

const ArrowButton = ({ handleSubmit }) => {
    const media = useMediaQuery("(max-width:650px)");

    return (
        <SvgIcon
            onClick={handleSubmit}
            sx={{
                position: media && "absolute",
                left: 0,
                right: 0,
                m: "auto",
                bgcolor: "hsl(259, 100%, 65%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                padding: "20px",
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                    bgcolor: "hsl(0, 0%, 8%)",
                },
                cursor: "pointer",
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 44">
                {" "}
                <g fill="none" stroke="#FFF" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
            </svg>
        </SvgIcon>
    );
};

export default ArrowButton;
