import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';

@NgModule({
  declarations: [TooltipDirective, TooltipContainerComponent],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class TooltipModule {}
