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

  get isString(): string | false {
    return typeof this.tooltipData === "string" ? this.tooltipData : false;
  }

  get isTemplate(): TemplateRef<void> | false {
    return this.tooltipData instanceof TemplateRef ? this.tooltipData : false;
  }
}
