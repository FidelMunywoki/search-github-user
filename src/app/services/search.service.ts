import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserUrl } from '../model/user-url';
import { RepoUrl } from '../model/repo-url';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
 

  users: UserUrl[];
  repos: RepoUrl ;
  apiUrl: 'https://api.github.com/users/';
  

  constructor(private http: HttpClient) { }

  searchUser (searchTearm: string) {
    let promise = new Promise<void>((resolve, reject) => {

      this.http.get<any>(this.apiUrl + searchTearm + '?access_token='+ atob(environment.apiKey)).toPromise().then(
        (results) => {
          this.users = [];
          this.users.push(results);
          resolve()
        },

        (error) => {
          console.log(error)
          reject ()
        }
      )
    })
    return promise;
  }


  searchRepo(searchTerm: string) {
    interface results {
      login: string;
      username: string;
      avatar_url: string;
      html_url: string;
      name: string;
      url: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<results>(this.apiUrl + searchTerm+ '/repos?access_token='+atob(environment.apiKey)).toPromise().then(
        (results) => {
          this.repos;
          this.repos = results;
          resolve()
        },
        (error) => {
          console.log(error)
          reject()
        }
      )
    })
    return promise;


  }


}
