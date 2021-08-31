import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { Subscription } from "rxjs";
import { GithubService } from "./services/github-core.service";
import { ModalComponent } from "./components/modal/modal.component";
import { MdbModalRef, MdbModalService } from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  subscribe?: Subscription;
  modalRef?: MdbModalRef<ModalComponent>;

  constructor(
    public authService: AuthService,
    public githubService: GithubService,
    private modalService: MdbModalService,
  ) {  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  searchGithubData(): void {
    if(this.githubService.search?.value) {
      this.subscribe = this.githubService
        .sendRequestToSearchUsers()
        .subscribe(res => {
          this.githubService.githubData = res;
        });
    } else {
      this.githubService.search?.markAsTouched();
    }
  }

  openModal(): void {
    this.modalRef = this.modalService.open(ModalComponent)
  }

  clearSearch():void {
    this.githubService.clearData();
  }
}
