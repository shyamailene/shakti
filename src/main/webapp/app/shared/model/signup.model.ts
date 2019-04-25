export interface ISignup {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    country?: string;
    zipcode?: string;
    parentFName?: string;
    parentLName?: string;
    parentEmail?: string;
    parentPhone?: string;
    school?: string;
    grade?: string;
}

export class Signup implements ISignup {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phone?: string,
        public line1?: string,
        public line2?: string,
        public city?: string,
        public state?: string,
        public country?: string,
        public zipcode?: string,
        public parentFName?: string,
        public parentLName?: string,
        public parentEmail?: string,
        public parentPhone?: string,
        public school?: string,
        public grade?: string
    ) {}
}
