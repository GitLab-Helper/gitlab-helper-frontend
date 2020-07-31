import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, BoardRoutingModule, SharedModule],
  declarations: [BoardComponent, BoardListComponent],
})
export class BoardModule {}
