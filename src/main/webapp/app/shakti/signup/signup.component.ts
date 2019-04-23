import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import {Register} from "./register";
import { Payment } from "./payment";
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../_services/index';

declare let paypal: any;

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
	providers: [RegisterService]
})
export class SignupComponent implements OnInit {
	register:Register ={firstName:null,email:null,phone:null,lastName:null,younger:true,id:null,parentFName:null,parentLName:null,parentEmail:null,parentPhone:null,line1:null,line2:null,city:null,state:null,country:null,zipcode:null,school:null,grade:null};
	payment:Payment = {id:null,paymentToken:null,orderID:null,payerID:null,paymentID:null,signup:null};
	 
	message:String='';
	isSaving: boolean;
    test : Date = new Date();
	age : boolean = true;
    constructor(private _data:RegisterService, private alertService: AlertService) { }

    ngOnInit() {}
	
	isYounger(){
		return this.age;
	}
	insert(){
		console.log('insert'+this.register.firstName);
		//this._data.saveRegister(this.register).subscribe(b => this.result = b);
		this.subscribeToSaveResponse(
                this._data.saveRegister(this.register));		
	}
	
    private subscribeToSaveResponse(result: Observable<Register>) {
        result.subscribe((res: Register) =>
            this.onSaveSuccess(res), (res: Object) => this.onSaveError());
    }
	
	private subscribeToSavePayment(result: Observable<Payment>) {
        result.subscribe((pay: Payment) =>
            this.onPaymentSaveSuccess(pay), (pay: Object) => this.onSaveError());
    }
	
    private onPaymentSaveSuccess(result: Payment) {
        //this.eventManager.broadcast({ name: 'contactusListModification', content: 'OK'});
		this.message='Your Payment is Successfully # ('+result.paymentID+')';
		this.alertService.success(''+this.message);
		console.log('result id'+ result.id);
		console.log('result id'+ JSON.stringify(result));
		this.payment = result;
        this.isSaving = false;
        //this.activeModal.dismiss(result);
		
		this.register={firstName:null,email:null,phone:null,lastName:null,younger:true,id:null,parentFName:null,parentLName:null,parentEmail:null,parentPhone:null,line1:null,line2:null,city:null,state:null,country:null,zipcode:null,school:null,grade:null};
    }
	

    private onSaveSuccess(result: Register) {
        //this.eventManager.broadcast({ name: 'contactusListModification', content: 'OK'});
		this.message='Successfully registered ('+result.id+')';
		this.alertService.success(''+this.message);
		console.log('result id'+ result.id);
		console.log('result id'+ JSON.stringify(result));
		this.register = result;
        this.isSaving = false;
        //this.activeModal.dismiss(result);
		this.payment.signup=this.register;
		delete this.payment["intent"];
		delete this.payment["returnUrl"];
		console.log(this.payment);
		this.subscribeToSavePayment(
                this._data.savePayment(this.payment));		
    }

    private onSaveError() {
		this.alertService.error('Please try again');
        this.isSaving = false;
    }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 20;

  paypalConfig = {
    env: 'production',
    client: {
      sandbox: 'AVyA0UcLK7XcagDmryU_IX0QqMv2ze6cJkoycuYz8mAfqLUHmgEHo0_kYrDznNwAbxC58HK86XgRBk4L',
      production: 'AVWTAaiuFd9jz2Zc-6Eot9hQnyj1nwfi1b89nKx2c6P0yKkbbjhfk9VZI1eKmCQIUM1xJbKIJM05euUj'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
		  console.log(payment);
		  console.log(data);
		  console.log('OnAuthorize'+JSON.stringify(data));
		  this.payment = data;
		  this.insert();
        //Do something when payment is successful.
      }).catch(function(err) {
		  console.error('execute error:', err);
	  });
    },
	onCancel: (data, actions) => {
          console.log('OnCancel'+JSON.stringify(data));
        },
    onError: (err) => {
          console.log('OnError');
        },  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

	
}
