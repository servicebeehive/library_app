import { HttpClient } from '@angular/common/http';
import { LoginDetail } from 'src/app/models/login.model';
import { Injectable } from '@angular/core';
import { RegistrationDetail } from 'src/app/models/registrationdetail';
import { ReturnResult } from 'src/app/models/return-result';
import { BaseService } from '../base/base.service';
import { VerifyForgotPasswordOtpModel } from 'src/app/models/verify_forgotpassword.model';
import { IConfig } from 'src/app/models/iconfig';
import { Controllers } from 'src/app/models/controllers';
import { ConfigService } from '../config/config.service';
import { OtpDetail } from 'src/app/models/otp.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  constructor(
    public httpClient: HttpClient,
    public controllers: Controllers,
    public config: ConfigService<IConfig>
  ) { 
    super(httpClient, config.getSettingsObject().APIUrl);
  }

  // public async postRegistrationDetail(
  //   registrationDetailData: RegistrationDetail
  // ): Promise<ReturnResult<OtpDetail>> {
  //   return this.PostReturn<RegistrationDetail, ReturnResult<OtpDetail>>(
  //     this.controllers.signUpUser,
  //     registrationDetailData
  //   );
  // }
}
