import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, MatCardModule],
  exports: [MatFormFieldModule, MatSelectModule, MatCardModule],
})
export class MaterialModule {}
