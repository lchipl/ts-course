export interface IUser {
    address: {address:string, city: string},
    age:number,
    bank: {cardExpire: string, cardNumber: string, cardType: string, currency:string, iban: string, birthDate: string, bloodGroup: string},
    birthDate:string,
    bloodGroup: bloodGroup,
    company: {address: {address: string, city: string, coordinates: { lat: number, lng: number }, postalCode: string, state: string}, department: string, name: string, title: string},
    domain: string,
    ein: string,
    email: string,
    eyeColor: EyeColor,
    firstName: string,
    gender: Gender
    hair: {color: HairColor, type: HairType}
    height: number
    id: number,
    image: string,
    ip: string,
    lastName: string
    macAddress:string,
    maidenName:string
    password:string
    phone:string
    ssn:string
    university:string,
    userAgent:string,
    username:string
    weight:number
}

export interface IResponse {
    limit:number,
    skip: number,
    total:number,
    users: IUser[]
}

export enum CardType  {
    MAESTRO = "maestro",
    MASTERCARD = "mastercard",
    JCB = "jcb"
}

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

export enum EyeColor {
   AMBER = "Amber",
   BLUE = "Blue",
   BROWN = "Brown",
   GREEN = "Green",
   GRAY = "Gray",
}

export enum bloodGroup {
    BMINUS = "B−",
    BPLUS = "B+",
    APLUS = "A+",
    AMINUS = "A−",
    ZEROPLUS = "O+",
    ZEROMINUS = "O−"
}

export enum HairType {
  WAVY = "Wavy",
  STRAIGHT = "Straight",
  CURLY = "Curly",
  STRANDS = "Strands"
}

export enum HairColor {
    BROWN = "Brown",
    BLOND = "Blond",
    BLACK = "Black",
    VERY_CURLY = "Very curly"
}
