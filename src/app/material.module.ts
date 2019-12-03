import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatButtonModule, MatFormFieldModule],
  exports: [MatCardModule, MatIconModule, MatListModule, MatGridListModule, MatButtonModule, MatFormFieldModule]
})
export class MaterialModule {}
