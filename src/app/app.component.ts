import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, MatGridListModule, MatSidenavModule, NavbarComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-eslint';
  readonly isOpen = signal(false);

  cardContent = [
    {
      title: 'Card #1',
      text: 'Test test test test test test',
    },
    {
      title: 'Card #2',
      text: 'Test test test test test test',
    },
    {
      title: 'Card #3',
      text: 'Test test test test test test',
    },
    {
      title: 'Card #4',
      text: 'Test test test test test test',
    },
    {
      title: 'Card #5',
      text: 'Test test test test test test',
    },
  ];

  openMenu() {
    this.isOpen.update(value => !value);
  }
}
