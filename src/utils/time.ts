interface TimeValues {
    [key: string]: number;
}

// Get the total of days in the month
export function getTotalDaysOfTime(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
}

// Get current day, month and time at now
export function getTimeValues(): TimeValues {
    const CURRENT_TIME: Date = new Date();
    const CURRENT_YEAR: number = CURRENT_TIME.getFullYear();
    const CURRENT_MONTH: number = CURRENT_TIME.getMonth() + 1;
    const CURRENT_DAY: number = CURRENT_TIME.getDate();

    return { CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY };
}
