import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUserForm: FormGroup= this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  message: string = '';

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

  signInUserGithub(): void {
    this.authService
      .signInWithGithub()
      .then(res => {
        this.modalRef.close();
      })
      .catch(err => console.log(err));
  }

  setInputDynamicError(message: string) {
    console.log(message)
  }
}
