import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationPage } from '../registration/registration.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }
  
  loginForm = new FormGroup({
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      Validators.minLength(10)
    ]),
    otpverify: new FormControl('')
  });
  get phone(){
    return this.loginForm.get('phone');
  }
  get otpverify(){
    return this.loginForm.get('otpverify');
  }

  isDisplayed = true;
  show(){
    this.isDisplayed = !this.isDisplayed;
  }

  ngOnInit() {
  }

  public async onSignUp() {
    const model = await this.modalController.create({
      component: RegistrationPage,
      cssClass: 'my-custom-class',
    });
    await model.present();
  }
}
