import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { AllAnimalsComponent }   from './all-animals/all-animals.component';
import { AnimalDetailComponent }   from './animal-detail/animal-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'all-animals',
    component: AllAnimalsComponent
  },
  {
    path: 'all-animals/:id',
    component: AnimalDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
