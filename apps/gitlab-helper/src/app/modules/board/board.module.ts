import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { SetupWindowComponent } from './board-list/setup-window/setup-window.component';
import { SettingsComponent } from './board-list/settings/settings.component';
import { SelectWindowComponent } from './board-list/select-window/select-window.component';
import { SingleBoardComponent } from './board-list/single-board/single-board.component';
import { ShowDetailsComponent } from './board-list/single-board/show-details/show-details.component';

@NgModule({
  imports: [CommonModule, BoardRoutingModule, SharedModule],
  declarations: [
    BoardComponent,
    BoardListComponent,
    SetupWindowComponent,
    SettingsComponent,
    SelectWindowComponent,
    SingleBoardComponent,
    ShowDetailsComponent,
  ],
})
export class BoardModule {}
