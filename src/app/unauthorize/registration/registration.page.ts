import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrationForm = new FormGroup({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl(''),
    whatsno : new FormControl('',[
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      Validators.minLength(10)
    ]),
    slot : new FormControl(''),
    period : new FormControl(''),
    amount : new FormControl(''),
    otpverify : new FormControl('')
  });

  isDisplayed = true;
  show(){
    this.isDisplayed = !this.isDisplayed;
  }

}
