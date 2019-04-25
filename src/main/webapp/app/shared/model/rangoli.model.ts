import { Moment } from 'moment';

export interface IRangoli {
    id?: number;
    email?: string;
    name?: string;
    age?: number;
    email2?: string;
    address?: string;
    phone?: string;
    interested?: boolean;
    volunteer?: string;
    subdate?: Moment;
}

export class Rangoli implements IRangoli {
    constructor(
        public id?: number,
        public email?: string,
        public name?: string,
        public age?: number,
        public email2?: string,
        public address?: string,
        public phone?: string,
        public interested?: boolean,
        public volunteer?: string,
        public subdate?: Moment
    ) {
        this.interested = this.interested || false;
    }
}
