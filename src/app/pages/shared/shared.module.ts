
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMatIconsModule } from 'ng-mat-icons';

@NgModule({
  imports: [CommonModule, NgMatIconsModule],
  exports: [NgMatIconsModule],
})
export class SharedModule {}