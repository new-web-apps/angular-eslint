import { Component, input, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  readonly isOpen = input(true);
  readonly isOpenChange = output<boolean>();

  closeMenu() {
    this.isOpenChange.emit(false);
  }
}
