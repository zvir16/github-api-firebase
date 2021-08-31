import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github-core.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    public githubService: GithubService,
  ) { }

  ngOnInit(): void {
  }

  goToDetailedPage() {

  }

}
