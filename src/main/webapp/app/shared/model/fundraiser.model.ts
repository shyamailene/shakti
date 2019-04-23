export interface IFundraiser {
    id?: number;
    name?: string;
    email?: string;
    email2?: string;
    phone?: string;
    address?: string;
    age?: string;
    interested?: string;
    volunteer?: string;
}

export class Fundraiser implements IFundraiser {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public email2?: string,
        public phone?: string,
        public address?: string,
        public age?: string,
        public interested?: string,
        public volunteer?: string
    ) {}
}
