import { Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'results', component: ResultsComponent },
    { path: '', redirectTo: '/results', pathMatch: 'full' }, // Redirect empty path to home
    { path: '**', component: NotFoundComponent } // Wildcard route for 404
    ];
