
export interface Team {
    position: number;
    name: string;
    /** image url */
    logo: string;
    points: number;
}

export type TeamKeysType = keyof Team;
export type TeamValuesType = Team[keyof Team];