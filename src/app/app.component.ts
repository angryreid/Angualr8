import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {
  startWith,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  map,
} from 'rxjs/operators';
import { searchData } from './mock/search_data';
import { Observable, of } from 'rxjs';

export interface User {
  name: string;
  age: number;
  hobby: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  initialSearch: string = 'hello';
  search$: Observable<User[]>;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      search: [this.initialSearch, this.validateSearch],
    });

    const search = this.form.get('search');
    this.search$ = search.valueChanges.pipe(
      startWith(this.initialSearch),
      debounceTime(300),
      filter((val) => /^[a-zA-Z0-9_-]{4,16}$/.test(val)),
      map((val) => val.toLowerCase()),
      distinctUntilChanged(),
      switchMap((val) => this.getUserByName(val))
    );
  }

  validateSearch(c: FormControl): { [key: string]: any } {
    const val = c.value;
    return /^[a-zA-Z0-9_-]{4,16}$/.test(val)
      ? null
      : {
          searchInvalid: true,
        };
  }

  getUserByName(name: string): Observable<User[]> {
    const result = searchData.filter((user) =>
      user.name.toLocaleLowerCase().includes(name)
    );
    return of(result);
  }
}
