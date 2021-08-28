import { Component, EventEmitter, Input,OnInit } from '@angular/core';
import { RepoUrl } from 'src/app/model/repo-url';
import { UserUrl } from 'src/app/model/user-url';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  repos!: RepoUrl;
  users!: UserUrl[];



  constructor(private search: SearchService) { }

  ngOnInit(): void {

    this.searchUsers('FidelMunywoki');
    this.searchRepos('FidelMunywoki');
  }

  //search user

  searchUsers(searchTerm: string) {
    this.search.searchUser(searchTerm).then(
      () => {
        this.users = this.search.users;
      },
      (error) => {
        console.log(error)
      }
    )
  }


  //search Repos
  searchRepos(searchTerm: string) {
    this.search.searchRepo(searchTerm).then(
      () => {
        this.repos = this.search.repos;
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
