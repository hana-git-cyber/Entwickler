import {Component, OnInit, ViewChild} from '@angular/core';
import {PersonService} from "../../service/person.service";
import {Table} from "primeng/table";
import {Person} from "../../model/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers: [PersonService]
})
export class PersonListComponent implements OnInit {

  person: Person;
  persons: Person[];
  first: number;
  rows: number;
  display: boolean;
  cols: any[];
  title: string;
  currentIndex: number;
  @ViewChild('dt')
  private table: Table;

  constructor(private router: Router, private personService: PersonService) {
    this.first = 0;
    this.rows = 3;
  }

  ngOnInit() {
    this.persons = [];
    this.cols = [
      {field: 'id', header: '#', width: '15%'},
      {field: 'firstName', header: 'First name', width: '26%'},
      {field: 'lastName', header: 'Last name', width: '26%'},
      {field: 'mail', header: 'E-mail', width: '26%'},
    ];
    this.loadPersons();
  }

  add() {
    this.title = 'Add ';
    this.display = true;
    this.person = new Person();
    this.currentIndex = -1;
  }

  edit(currentIndex: number) {
    this.title = 'Edit ';
    this.display = true;
    this.person = this.persons[currentIndex];
    this.currentIndex = currentIndex;
  }

  delete(id: number, index: number) {
    this.personService.delete(id).subscribe(() => {
      this.persons.splice(index, 1);
    }, error => {
      console.log('An error has occurs while deleting');
      console.log(error);
    });
  }

  save() {
    if (this.currentIndex == -1) {
      this.personService.save(this.person).subscribe(result => {
          this.persons.push(result);
        },
        error => {
          console.log('An error has occurs while adding');
          console.log(error);
        });
    } else {
      this.persons[this.currentIndex] = this.person;
      this.personService.edit(this.currentIndex, this.person).subscribe(() => {
      }, error => {
        console.log('An error has occurs while editing');
        console.log(error);
      });
    }
    this.display = false;
  }

  loadPersons() {
    this.personService.getAll().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      },
      error => {
        console.log(error);
      }
    );
  }
}
