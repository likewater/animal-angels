import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { ANIMALS } from './mock-animals';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.animals = database.list('animals');
  }

  getAnimals() {
    // return ANIMALS;
    return this.animals;
  }

  getAnimalById(animalId: number){
    for (var i = 0; i <= ANIMALS.length - 1; i++) {
      if (ANIMALS[i].id === animalId) {
        return ANIMALS[i];
      }
    }
  }

}
