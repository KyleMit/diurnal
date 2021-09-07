export enum OverallStatus {
    Bad = 1,
    Sad = 2,
    Meh = 3,
    Good = 4,
    Great = 5
}

export interface IFeeling {
    name: string;
}

export interface IDiaryEntry {
    date: Date;
    overall: OverallStatus;
    feelings: Array<IFeeling>;
    journal: string;
}

export interface IDiaryMonth {
    [key: number]: IDiaryEntry
}

export interface IDiaryYear {
    [key: number]: IDiaryMonth
}

export interface IDiaryData {
 [key: number]: IDiaryYear
}
