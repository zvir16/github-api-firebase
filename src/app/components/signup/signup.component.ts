import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { AuthService } from "../../services/auth.service";
import { ModalComponent } from "../modal/modal.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  message: string = '';
  signUserForm: FormGroup= this.fb.group({
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
    return this.signUserForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.signUserForm.controls['password'];
  }

  signInUserEmail(): void {
    this.authService
      .signIn(this.signUserForm.value.email, this.signUserForm.value.password)
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
}
