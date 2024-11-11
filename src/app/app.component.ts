import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header/>
    <main>
    <router-outlet/>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-angular-app';
}
