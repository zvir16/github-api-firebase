import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GithubService} from "../../services/github-core.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  account: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
  ) { }

  ngOnInit(): void {
    this._getGithubUserById();
  }

  private _getGithubUserById(): void {
    const id = this.route.snapshot.params['id'];
    this.account = this.githubService.githubData.items.find((e: { id: any; }) => e.id === +id);
  }
}
