import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input() card: { title: string; text: string } | null = null;
}
