export interface Driver {
    position: number;
    name: string;
    image: string;
    number: number;
    points: number;
}

export type DriverKeysType = keyof Driver;
export type DriverValuesType = Driver[keyof Driver];
