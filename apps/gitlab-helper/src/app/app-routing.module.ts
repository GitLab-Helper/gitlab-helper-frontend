import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '@app/core/layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/board/board.module').then((m) => m.BoardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
