import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';

@NgModule({
  declarations: [TooltipDirective, TooltipContainerComponent],
  imports: [CommonModule, OverlayModule],
  exports: [TooltipDirective],
})
export class TooltipModule {}
