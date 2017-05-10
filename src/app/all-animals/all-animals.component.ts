import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css'],
  providers: [AnimalService]
})
export class AllAnimalsComponent implements OnInit {
  animals: Animal[];

constructor(private router: Router, private animalService: AnimalService) { }


  ngOnInit() {
    this.animals = this.animalService.getAnimals();
  }

 //  animals: Animal[] = [
 //  new Animal("Bowsy", "Layla Martin",
 //      "Boxer", "Bowsy loves to run and jump but broke his leg. He needs reconstructive surgery to get his groove back, please help him", "url for image", "Dog", "Los Angeles", 1200, 1),
 //  new Animal("Kitten", "Ronny Boondocker",
 //      "American Shorthair", "Kitten lost her tail in an errant door slam. I've found a doctor that can surgically attach a faux tail to Kitten's tail stub. She was so proud of her tail. I want her to purr again.", "url for image", "Cat", "Phoenix", 5000, 2),
 //  new Animal("Tweeter", "Gin Havlicek",
 //      "Parakeet", "Tweeter has a strained wing and can't fly anymore. I just can't afford a visit to the vet. Please help", "url for image", "Bird", "Boston", 300, 3),
 //  new Animal("Seeker", "Bob Smith",
 //      "Springer Spaniel", "Seeker has terminal cancer. I just want to take him on one last hunting trip. Just one more time to see the birds in Canada", "url for image", "Dog", "Minneapolis", 1400, 4),
 //  new Animal("Tripod", "Miriam Winglett",
 //      "Goat", "Tripod is my loveable three legged goat. No I don't want another leg for him. It's his birthday and I want to party. Send me some FUN funds.", "url for image", "Goat", "Akron", 1200, 5)
 // ];

   goToDetailPage(clickedAnimal: Animal) {
       this.router.navigate(['all-animals', clickedAnimal.id]);
     };


}
