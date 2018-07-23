import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, map, distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-hub-users',
  templateUrl: './git-hub-users.component.html',
  styleUrls: ['./git-hub-users.component.css']
})
export class GitHubUsersComponent implements OnInit {
  public searchName = '';
  private _subject: Subject<string> = new Subject();
  public items$: Observable<GitUser[]>;
  public isSearch = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.items$ = this._subject.pipe(
      distinctUntilChanged(), tap(() => this.isSearch = true), debounceTime(300), switchMap(
        term => this.http.get(`https://api.github.com/search/users?q=${term}`).pipe(map(item => item['items'] as GitUser[]/*.map(i => i['avatar_url'])*/))
      ), tap(() => this.isSearch = false));
  }

  onSearch(value) {
    if (value === '') return;
    this._subject.next(value);
  }

}
