import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, BoardRoutingModule, SharedModule, MatSelectModule],
  declarations: [BoardComponent, BoardListComponent],
})
export class BoardModule {}
