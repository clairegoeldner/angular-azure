import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zoo-information',
  standalone: true,
  imports: [FormsModule],
  inputs: ['zooName', 'zooCapacity', 'zooGuests', 'animals'],
  templateUrl: './zoo-information.component.html'
})
export class ZooInformationComponent {
  animals: any;
  zooName: string;
  zooCapacity: number;
  zooGuests: number;

  constructor () {
    this.animals = [];
    this.zooName = "Como Zoo";
    this.zooCapacity = 300;
    this.zooGuests = 200;
  }
}
