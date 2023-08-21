import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import ArrowButton from "./ArrowButton";
import DateInput from "./DateInput";
import isValidDay from "../features/isValidDay";

const BirthForm = ({ setUserBirth, setShowAge }) => {
    const [dateOfBirth, setDateOfBirth] = useState({
        day: "",
        month: "",
        year: "",
    });
    const [errors, setErrors] = useState({
        day: { status: false, text: "" },
        month: { status: false, text: "" },
        year: { status: false, text: "" },
    });

    const media = useMediaQuery("(max-width:650px)");

    const handleSubmit = () => {
        let errorCount = 0;
        setShowAge(false);
        if (!isValidDay(dateOfBirth)) {
            setErrors((prev) => ({
                ...prev,
                day: { status: true, text: "Must be a valid date" },
            }));
            errorCount++;
        }
        if (!dateOfBirth.day) {
            setErrors((prev) => ({
                ...prev,
                day: { status: true, text: "This field is required" },
            }));
            errorCount++;
        }
        if (!dateOfBirth.month) {
            setErrors((prev) => ({
                ...prev,
                month: { status: true, text: "This field is required" },
            }));
            errorCount++;
        }
        if (!dateOfBirth.year) {
            setErrors((prev) => ({
                ...prev,
                year: { status: true, text: "This field is required" },
            }));
            errorCount++;
        }
        if (
            errorCount === 0 &&
            !errors.day.status &&
            !errors.month.status &&
            !errors.year.status
        ) {
            setUserBirth({
                day: Number(dateOfBirth.day),
                month: Number(dateOfBirth.month),
                year: Number(dateOfBirth.year),
            });
            setShowAge(true);
        }
    };

    const handleChange = ({ target: { name, value } }) => {
        if (!isNaN(value)) {
            switch (name) {
                case "DAY":
                    setDateOfBirth({
                        ...dateOfBirth,
                        day: value.slice(0, 2),
                    });
                    break;
                case "MONTH":
                    setDateOfBirth({
                        ...dateOfBirth,
                        month: value.slice(0, 2),
                    });
                    break;
                case "YEAR":
                    setDateOfBirth({
                        ...dateOfBirth,
                        year: value.slice(0, 4),
                    });
                    break;

                default:
                    break;
            }
        }
    };

    const handleBlur = ({ target: { name, value } }) => {
        switch (name) {
            case "DAY":
                if ((value && value < 1) || value > 31) {
                    setErrors({
                        ...errors,
                        day: { status: true, text: "Must be a valid day" },
                    });
                }
                break;
            case "MONTH":
                if ((value && value < 1) || value > 12) {
                    setErrors({
                        ...errors,
                        month: { status: true, text: "Must be a valid month" },
                    });
                }
                break;
            case "YEAR":
                if (value > new Date().getFullYear()) {
                    setErrors({
                        ...errors,
                        year: { status: true, text: "Must be in the past" },
                    });
                }
                break;

            default:
                break;
        }
    };

    const handleFocus = ({ target: { name } }) => {
        switch (name) {
            case "DAY":
                setErrors({
                    ...errors,
                    day: { status: false, text: "" },
                });
                break;

            case "MONTH":
                setErrors({
                    ...errors,
                    month: { status: false, text: "" },
                });
                break;

            case "YEAR":
                setErrors({
                    ...errors,
                    year: { status: false, text: "" },
                });
                break;

            default:
                break;
        }
    };

    return (
        <>
            <Box
                display="flex"
                gap={media ? 1.5 : 3}
                mb={media ? "30px" : "-13px"}
                justifyContent={media && "space-around"}
            >
                {/* Day */}
                <DateInput
                    unitOfTime={"DAY"}
                    value={dateOfBirth.day}
                    handleChange={handleChange}
                    placeholder="DD"
                    error={errors.day}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                />
                {/* Month */}
                <DateInput
                    unitOfTime={"MONTH"}
                    value={dateOfBirth.month}
                    handleChange={handleChange}
                    placeholder="MM"
                    error={errors.month}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                />
                {/* Year */}
                <DateInput
                    unitOfTime={"YEAR"}
                    value={dateOfBirth.year}
                    handleChange={handleChange}
                    placeholder="YYYY"
                    error={errors.year}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                />
            </Box>

            {/* Line & Button */}
            <Box
                display="flex"
                position="relative"
                justifyContent="space-between"
                alignItems="center"
                m={media && "49px 0 69px"}
            >
                <Box
                    height="1.4px"
                    bgcolor="hsl(0, 0%, 92%)"
                    flex={1}
                    borderRadius="1px"
                />
                <ArrowButton handleSubmit={handleSubmit} />
            </Box>
        </>
    );
};

export default BirthForm;
