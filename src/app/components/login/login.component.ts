import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private modalRef: MdbModalRef<ModalComponent>,
  ) { }

  ngOnInit(): void { }

  loginUser(): void {
    this.authService
      .login(this.loginUserForm.value.login, this.loginUserForm.value.password)
      .then(res => {
        console.log(res)
        this.modalRef.close();
      })
      .catch(err => console.log(err));
  }

  loginInUserGithub(): void {
    this.authService
      .signInWithGithub()
      .then(res => {
        console.log(res)
        this.modalRef.close();
      })
      .catch(err => console.log(err));
  }
}
