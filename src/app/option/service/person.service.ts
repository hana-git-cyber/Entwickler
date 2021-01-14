import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Person} from "../model/person";
import {Observable} from "rxjs/index";

@Injectable()
export class PersonService {

  private persons: Person[] = [];

  constructor() {
    var items = [
      {id: 1, firstName: 'person1FN', lastName: 'person1LN', mail: 'person1FN.person1LN@gmail.com'},
      {id: 2, firstName: 'person2FN', lastName: 'person2LN', mail: 'person2FN.person2LN@gmail.com'},
    ];
    this.persons.push(...items);
  }

  getAll(): Observable<Person[]> {
    return of(this.persons);
  }

  edit(index, value: Person): Observable<void> {
    this.persons[index] = value;
    return of(void 0);
  }

  delete(id: number): Observable<boolean> {
    this.persons.filter(item => item.id !== id);
    return of(true);
  }

  save(value: Person): Observable<Person> {
    var maxId = this.persons.map(item => item.id).reduce((item1, item2) => {
      return Math.max(item1, item2);
    });
    value.id = maxId + 1;
    return of(value);
  }
}
