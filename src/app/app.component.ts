import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-eslint';

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
}
