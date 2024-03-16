import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Animal } from '../assets/animal';
import { getAnimals, addAnimal, updateAnimal, deleteAnimal } from '../assets/apiHelper';
import { ZooInformationComponent } from './zoo-information/zoo-information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule, ZooInformationComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  animals: Array<Animal>;
  currentAnimal: any;
  zooName: string;
  zooCapacity: number;
  zooGuests: number;

  constructor (private changeDetectorRef: ChangeDetectorRef) {
    this.animals = [];
    this.currentAnimal = {};
    this.zooName = "Como Zoo";
    this.zooCapacity = 300;
    this.zooGuests = 200;
  }

  async ngOnInit(): Promise<void> {
    this.animals = await getAnimals();
  }

  async AddAnimal(): Promise<void> {
    this.animals = await addAnimal(new Animal());
    this.changeDetectorRef.detectChanges();
  }

  AdmitGuest(): void {
    this.zooGuests++;
  }

  EditAnimal(index: number) : void {
    this.currentAnimal = this.animals[index];
  }

  async SubmitEditAnimal(): Promise<void> {
    this.animals = await updateAnimal(this.currentAnimal);
    this.changeDetectorRef.detectChanges();
  }

  async GiveBirth(index: number): Promise<void> {
    this.animals[index].IsPregnant = false;
    await updateAnimal(this.animals[index]);
    this.animals = await addAnimal(new Animal(0, "", 0, false, "Baby " + this.animals[index].Type, this.animals[index].Type, this.animals[index].Weight * 0.1));
    this.changeDetectorRef.detectChanges();
  }

  async MakePregnant(index: number): Promise<void> {
    this.animals[index].IsPregnant = true;
    this.animals = await updateAnimal(this.animals[index]);
    this.changeDetectorRef.detectChanges();
  }

  async RemoveAnimal(index: number): Promise<void> {
    this.animals = await deleteAnimal(this.animals[index]);
    this.changeDetectorRef.detectChanges();
  }
}