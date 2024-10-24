import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentModule } from './components/header.component.module';
import { HeroImageModule } from './components/heroImage.component.module';
import { HeroTextModule } from './components/heroText.component.module';
import { FormComponentModule } from './components/form.component.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponentModule,HeroImageModule,HeroTextModule,FormComponentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'base-apparel-coming-soon-master';
}
