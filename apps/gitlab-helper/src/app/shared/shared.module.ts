import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, AngularSvgIconModule, TranslateModule],
  declarations: [],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, AngularSvgIconModule, TranslateModule],
})
export class SharedModule {}
