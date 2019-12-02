import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatButtonModule],
  exports: [MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatButtonModule]
})
export class MaterialModule {}
