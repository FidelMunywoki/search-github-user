import { Component,OnInit } from '@angular/core';
import { UserUrl } from 'src/app/model/user-url';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  repos : any;
  users!: UserUrl[];
 
 



  constructor(private search: SearchService) {}

  ngOnInit(): void {

    this.searchUsers('FidelMunywoki');
    this.searchRepos('FidelMunywoki');
  }

  //search user

  searchUsers(userName: string) {
    this.search.searchUser(userName).then(
      () => {
        this.users = this.search.users;
        
      },
      (error) => {
        console.log(error)
      }
    )
  }


  //search Repos
  searchRepos(userName: string) {
    
    this.search.searchRepo(userName).then(
      () => {
        this.repos = this.search.repos;
      },
      (error) => {
        console.log(error)
      }
    )
  }


  searchGitHubUser(emitSearch: any) {
    console.log(emitSearch)
    this.searchUsers(emitSearch);
    this.searchRepos(emitSearch);

  }

  
 

}

