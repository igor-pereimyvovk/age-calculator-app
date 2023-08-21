const defaultYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function getAgeUnits(userBirth) {
    const currentDate = new Date();

    // let dayNow = 16,
    //     monthNow = 2,
    //     yearNow = 2023;
    let dayNow = currentDate.getDate(),
        monthNow = currentDate.getMonth() + 1,
        yearNow = currentDate.getFullYear();
    const dayUser = userBirth.day,
        monthUser = userBirth.month,
        yearUser = userBirth.year;
    const currentYear = yearNow % 4 === 0 ? leapYear : defaultYear;
    let days = 0,
        months = 0,
        years = 0;

    // Days
    days = currentYear[monthUser - 1] - dayUser + dayNow;
    if (days >= currentYear[monthNow - 1]) {
        days -= currentYear[monthNow - 1];
    } else {
        monthNow--;
    }

    // Months
    if (monthNow < monthUser) {
        months = monthNow - monthUser + 12;
        yearNow -= 1;
    } else {
        months = monthNow - monthUser;
    }

    // Years
    years = yearNow - yearUser;

    return [days, months, years];
}
