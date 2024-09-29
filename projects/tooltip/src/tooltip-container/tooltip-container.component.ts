import { ChangeDetectionStrategy, Component, InjectionToken, TemplateRef, inject } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

export type TooltipData = string | TemplateRef<void>;
export const TOOLTIP_DATA = new InjectionToken<TooltipData>("Data to display in tooltip");

@Component({
  selector: "app-tooltip-container",
  templateUrl: "./tooltip-container.component.html",
  styleUrls: ["./tooltip-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class TooltipContainerComponent {
  tooltipData = inject<TooltipData>(TOOLTIP_DATA);

  isString(value: TooltipData): value is string {
    return typeof value === "string";
  }

  isTemplate(value: TooltipData): value is TemplateRef<void> {
    return this.tooltipData instanceof TemplateRef;
  }
}
