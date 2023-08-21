const defaultYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function isValidDay(birth) {
    const currentYear = birth.year % 4 === 0 ? leapYear : defaultYear;
    if (birth.day <= currentYear[birth.month - 1]) {
        return true;
    } else if (birth.month < 1 || birth.month > 12) {
        return true;
    } else {
        return false;
    }
}
