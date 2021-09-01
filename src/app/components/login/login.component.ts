import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "../modal/modal.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string = '';
  loginUserForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private modalRef: MdbModalRef<ModalComponent>,
  ) { }

  ngOnInit(): void { }

  get email(): AbstractControl {
    return this.loginUserForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.loginUserForm.controls['password'];
  }

  loginUser(): void {
    this.authService
      .login(this.loginUserForm.value.login, this.loginUserForm.value.password)
      .then(res => {
        console.log(res)
        this.modalRef.close();
      })
      .catch(err => {
        let { message } = err;
        this.setInputDynamicError(message);
      });
  }

  setInputDynamicError(dynamicMessage: string) {
    this.message = dynamicMessage;
  }

  loginInUserGithub(): void {
    this.authService
      .signInWithGithub()
      .then(res => {
        console.log(res)
        this.modalRef.close();
      })
      .catch(err => {
        let { message } = err;
        this.setInputDynamicError(message);
      });
  }
}
