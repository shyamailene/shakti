export class Payment{
  "id": 0;
  constructor(
	  public  paymentToken:string,
	  public  orderID: string,
	  public  payerID: string,
	  public  paymentID: string,
	  public  signup: any
  ){}
}