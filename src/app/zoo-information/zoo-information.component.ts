import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@Component({
  selector: "app-zoo-information",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatProgressBarModule],
  inputs: ["zooName", "zooCapacity", "zooGuests", "animals", "capacityColor"],
  templateUrl: "./zoo-information.component.html"
})
export class ZooInformationComponent {
  animals: any;
  capacityColor: string;
  zooName: string;
  zooCapacity: number;
  zooGuests: number;

  constructor () {
    this.animals = [];
    this.capacityColor = "accent";
    this.zooName = "Como Zoo";
    this.zooCapacity = 300;
    this.zooGuests = 200;
  }
}
