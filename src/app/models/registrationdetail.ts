export class RegistrationDetail{
    firstname : string;
    lastname : string;
    whatsno : number;
    slot : string;
    period : string;
    amount : number;
    otpnum : string;
    constructor(){
        this.firstname = '';
        this.lastname = '';
        this.whatsno = 0;
        this.slot = '';
        this.period = '';
        this.amount = 0;
        this.otpnum = '';
    }
}