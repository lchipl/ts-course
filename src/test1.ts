
type infoType =  {
    officeId:number;
    isOpened:boolean;
    contacts: {
        phone:string;
        email:string;
        address: {
            city:string;
        }
    }
}

export const info: infoType = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
    "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
        "city": "Москва"
    }
}
}
