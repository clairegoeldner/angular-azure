import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { ZooInformationComponent } from './zoo-information/zoo-information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule, ZooInformationComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  animals: any;
  currentAnimal: any;
  zooName: string;
  zooCapacity: number;
  zooGuests: number;

  constructor (private http: HttpClient) {
    this.animals = [];
    this.currentAnimal = {};
    this.zooName = "Como Zoo";
    this.zooCapacity = 300;
    this.zooGuests = 200;
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/animals.json').subscribe(
      animals => {
        this.animals = animals;
      }
    );
  }

  AddAnimal(): void {
    this.animals.push({Name: "", Type: "", Age: 0, Gender: "", Weight: 0, IsPregnant: false});
  }

  AdmitGuest(): void {
    this.zooGuests++;
  }

  EditAnimal(index: number): void {
    this.currentAnimal = this.animals[index];
  }

  GiveBirth(index: number): void {
    this.animals[index].IsPregnant = false;
    this.animals.push({Name: "Baby", Type: this.animals[index].Type, Age: 0, Gender: "", Weight: this.animals[index].Weight * 0.1, IsPregnant: false});
  }

  MakePregnant(index: number): void {
    this.animals[index].IsPregnant = true;
  }

  RemoveAnimal(index: number): void {
    this.animals.splice(index, 1);
  }
}