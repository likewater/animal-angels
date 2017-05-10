import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { ANIMALS } from './mock-animals';

@Injectable()
export class AnimalService {

  constructor() { }

  getAnimals() {
    return ANIMALS;
  }

  getAnimalById(animalId: number){
    for (var i = 0; i <= ANIMALS.length - 1; i++) {
      if (ANIMALS[i].id === animalId) {
        return ANIMALS[i];
      }
    }
  }

}
