export interface IPayment {
    id?: number;
    paymentToken?: string;
    orderID?: string;
    payerID?: string;
    paymentID?: string;
    relId?: number;
}

export class Payment implements IPayment {
    constructor(
        public id?: number,
        public paymentToken?: string,
        public orderID?: string,
        public payerID?: string,
        public paymentID?: string,
        public relId?: number
    ) {}
}
