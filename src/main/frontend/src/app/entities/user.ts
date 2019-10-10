
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    birthDate: Date;
    address: Address;
    status: Status;
    password: string;
    logInTime: Date;
    logOutTime: Date;
}