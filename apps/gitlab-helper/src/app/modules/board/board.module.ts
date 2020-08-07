import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { SetupWindowComponent } from './board-list/setup-window/setup-window.component';

@NgModule({
  imports: [CommonModule, BoardRoutingModule, SharedModule],
  declarations: [BoardComponent, BoardListComponent, SetupWindowComponent],
})
export class BoardModule {}
