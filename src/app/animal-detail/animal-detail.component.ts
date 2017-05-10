import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {
  animalId: number = null;
  animalToDisplay: Animal;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private animalService: AnimalService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.animalId = parseInt(urlParameters['id']);
    });
    this.animalToDisplay = this.animalService.getAnimalById(this.animalId);
  }

}
