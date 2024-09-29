import { Component } from "@angular/core";
import { TooltipDirective } from "tooltip";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [TooltipDirective],
})
export class AppComponent {}
