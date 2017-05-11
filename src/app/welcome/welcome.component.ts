import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
// import { Animal } from '../animal.model';
// import { AnimalService } from '../animal.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
  // providers: [AnimalService]
})
export class WelcomeComponent implements OnInit {
  // animalId: number = 3;
  // animalToDisplay: Animal;

  constructor() { }

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    //   this.animalId = parseInt(urlParameters['id']);
    // });
    // this.animalToDisplay = this.animalService.getAnimalById(this.animalId);
  }

}
