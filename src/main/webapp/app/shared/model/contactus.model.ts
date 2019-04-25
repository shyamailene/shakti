export interface IContactus {
    id?: number;
    email?: string;
    mobile?: string;
    relatedto?: string;
    content?: string;
    name?: string;
}

export class Contactus implements IContactus {
    constructor(
        public id?: number,
        public email?: string,
        public mobile?: string,
        public relatedto?: string,
        public content?: string,
        public name?: string
    ) {}
}
