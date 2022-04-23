import { ChangeDetectionStrategy, Component, Inject, InjectionToken, TemplateRef } from '@angular/core';

export const TOOLTIP_DATA = new InjectionToken<string | TemplateRef<void>>('Data to display in tooltip');

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipContainerComponent {
  get asString(): string | false {
    return typeof this.tooltipData === 'string' ? this.tooltipData : false;
  }

  get asTemplate(): TemplateRef<void> | false {
    return this.tooltipData instanceof TemplateRef ? this.tooltipData : false;
  }

  constructor(@Inject(TOOLTIP_DATA) public tooltipData: string | TemplateRef<void>) {}
}
