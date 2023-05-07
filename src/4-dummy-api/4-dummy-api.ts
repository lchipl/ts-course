import { IUser, IResponse } from "./interfaces";

const BaseURL = "https://dummyjson.com/users"
//Promise<IUser[] | void> ??
async function fetchRequest(url:string):Promise<IUser[] | never | undefined>{
    try {
        const res =  await fetch(url);
        const body:IResponse = await res.json();
        const users: IUser[] = body.users;
        return users;
    } catch (error) {
        if(error instanceof Error) {
            throw new Error("Ошибка при получении")
        }
        return undefined;
    }
}

fetchRequest(BaseURL);
