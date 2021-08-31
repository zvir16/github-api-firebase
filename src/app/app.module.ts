import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";
import { BrowserModule } from '@angular/platform-browser';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { LoggedInGuard } from "./guards/logged-in.guard";
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from "./components/modal/modal.component";
import { TableComponent } from './components/table/table.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { SignupComponent } from './components/signup/signup.component';
import { GoBackDirective } from './directives/go-back.directive';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/blocks', pathMatch: 'full' },
  { path: 'blocks', canActivate: [LoggedInGuard], component: BlocksComponent },
  { path: 'table', canActivate: [LoggedInGuard], component: TableComponent},
  { path: ':id', canActivate: [LoggedInGuard], component: DetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginComponent,
    TableComponent,
    BlocksComponent,
    DetailComponent,
    GoBackDirective,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    MdbModalModule,
    MdbFormsModule,
    HttpClientModule,
    MdbDropdownModule,
    ReactiveFormsModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
