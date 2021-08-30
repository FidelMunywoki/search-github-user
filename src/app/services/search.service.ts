import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserUrl } from '../model/user-url';
import { RepoUrl } from '../model/repo-url';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

  users!: UserUrl[];
  repos!: RepoUrl;
  
  

  constructor(private http: HttpClient) { }

  searchUser (searchTearm: string) {
    let promise = new Promise<void>((resolve, reject) => {

      this.http.get<any>('https://api.github.com/users/' + searchTearm + '?access_token='+ environment.apiKey).toPromise().then(
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


  searchRepo(userName: string) {
    interface results {
      login: string;
      username: string;
      avatar_url: string;
      html_url: string;
      name: string;
      url: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<results>('https://api.github.com/users/' + userName+ '/repos?access_token='+environment.apiKey).toPromise().then(
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
