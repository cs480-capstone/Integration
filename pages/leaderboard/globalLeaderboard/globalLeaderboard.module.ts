import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalLeaderboard } from './globalLeaderboard';

@NgModule({
  declarations: [
    GlobalLeaderboard,
  ],
  imports: [
    IonicPageModule.forChild(GlobalLeaderboard),
  ],
})
export class GlobalLeaderboardPageModule {}
