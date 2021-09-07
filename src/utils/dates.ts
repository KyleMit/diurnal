export const Weekdays = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];


export interface IMonth {
    month: number;
    year: number;
}

export interface IDay extends IMonth {
    day: number;
}

export const getMonthStartDate = (month: number, year: number): Date => new Date(year, month, 1);
export const getMonthStartDay = (month: number, year: number): number => getMonthStartDate(month, year).getDay();
export const getBlankStartDays = (month: number, year: number): Array<number> => Array.from({length: getMonthStartDay(month, year)}, (_, i) => i)
export const getNumDaysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate();
export const getAllDaysInMonth = (month: number, year: number): Array<Date> =>  Array.from({length: getNumDaysInMonth(month, year) - 1}, (_, i) => new Date(year, month, i + 1));
export const getMonthTitle = (month: number, year: number): string => getMonthStartDate(month, year).toLocaleDateString('en-us', {month: 'short', year: 'numeric'})

export const dateToYMD = (dt: Date) => ({year: dt.getFullYear(), month: dt.getMonth(), day: dt.getDate()})
export const dateToISO = (dt: Date) => dt.toISOString().split("T")[0]

