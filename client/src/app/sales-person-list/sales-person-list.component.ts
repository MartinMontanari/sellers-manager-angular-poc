import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //Create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Martin","Montanari","martin@mail.com",50000),
    new SalesPerson("Pepito","Pompin","pepito@mail.com",4500),
    new SalesPerson("Sarlanga","Lopez","sarlanga@mail.com",25000),
    new SalesPerson("Jesus","Maria","jesus@mail.com",6000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
