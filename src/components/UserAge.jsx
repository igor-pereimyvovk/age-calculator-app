import { Box } from "@mui/material";
import FullDateString from "./UI/FullDateString";
import SubstringDate from "./UI/SubstringDate";
import getAgeUnits from "../features/getAgeUnits";

const UserAge = ({ userBirth, showAge }) => {
    const [days, months, years] = getAgeUnits(userBirth);

    return (
        <Box>
            {/* Years */}
            <FullDateString>
                <SubstringDate variant="span">
                    {showAge ? years : "- -"}
                </SubstringDate>
                years
            </FullDateString>

            {/* Months */}
            <FullDateString>
                <SubstringDate variant="span">
                    {showAge ? months : "- -"}
                </SubstringDate>
                months
            </FullDateString>

            {/* Days */}
            <FullDateString>
                <SubstringDate variant="span">
                    {showAge ? days : "- -"}
                </SubstringDate>
                days
            </FullDateString>
        </Box>
    );
};

export default UserAge;
