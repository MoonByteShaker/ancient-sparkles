import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArenaPage } from './arena.page';
import { ExploreContainerComponentModule } from '../../../../../explore-container/explore-container.module';

import { ArenaPageRoutingModule } from './arena-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ArenaPageRoutingModule
  ],
  declarations: [ArenaPage]
})
export class ArenaPageModule {}
