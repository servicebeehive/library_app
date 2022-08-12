import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

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
  onClick(){
    this.isDisplayed = !this.isDisplayed;
  }

  onClickLogout(){
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }

