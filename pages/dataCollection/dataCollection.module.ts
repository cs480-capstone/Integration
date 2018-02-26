import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { DataCollection } from './dataCollection';
import { Graphs } from './dataCollection';

@NgModule({
  declarations: [DataCollection,Graphs],
  imports: [
    IonicPageModule.forChild(Graphs),
  ],
  
})
export class DataCollectionModule {}
