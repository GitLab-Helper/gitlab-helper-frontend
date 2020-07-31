import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, AngularSvgIconModule],
  declarations: [],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, AngularSvgIconModule],
})
export class SharedModule {}
