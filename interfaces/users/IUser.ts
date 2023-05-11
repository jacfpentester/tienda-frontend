export interface IUser {
    ID?: string;
    FullName: string;
    Email: string;
    Password: string;
    Web: string;
    IsActive?: boolean;
    token?: string;
    Roles?: string[]
}