export type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    username: string;
    image: string;
    eyeColor: string;
    height: number;
    weight: number;
    bloodGroup: string;
    university: string;
};

export type IsFavoriteType = {
    [key: number]: boolean;
};
