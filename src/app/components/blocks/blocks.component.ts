import { Component, OnInit } from '@angular/core';
import { GithubService } from "../../services/github-core.service";

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  constructor(
    public githubService: GithubService,
  ) { }

  ngOnInit(): void { }
}
