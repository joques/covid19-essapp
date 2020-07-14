import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup; // Login form Model
  loading: boolean = false;

  constructor(
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
  }



  public createLoginForm = (data?: any): void => {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public login = (model: any): void => {
    console.log("Model: ", model);
    // this.api.login('/auth', model).subscribe(
    //   user => {
    //     setTimeout(() => {
    //       $('.login').dimmer('hide');
    //       this.store.setSessionUser(user.body);
    //       this.store.setAppToken(user.header);
    //       this.router.navigate(['/application']);
    //       $('.fixed.menu').transition('horizontal flip');
    //     }, 3000);
    //   },
    //   error => {
    //     setTimeout(() => {
    //       $('.login').dimmer('hide');
    //       $('.auth').transition('shake');
    //       this.errorHandler.resolve(error);
    //     }, 3000);
    //   }
    // );
  }

}
