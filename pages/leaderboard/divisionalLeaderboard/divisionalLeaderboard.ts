import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leaderboard } from '../leaderboard';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'divisionalLeaderboard',
  templateUrl: 'divisionalLeaderboard.html',
})
export class DivisionalLeaderboard {
  leaderboard: Leaderboard;
  users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.leaderboard = new Leaderboard(this.navCtrl);
    this.users = this.leaderboard.locallyRankedUsers;
    console.log('ionViewDidLoad DivisionalLeaderboard');
  }

  getLeaderboardDisplay(rank){
    if(rank <= 3)
      return ` ${this.users[rank-1].username}`;
    else
      return `${this.users[rank-1].leaderboardRank}. ${this.users[rank-1].username}`;
  }

  getColor(rank){
    if(rank === 1) return "gold";
    else if(rank === 2) return "silver";
    else if(rank === 3) return "bronze";
    else return "others";
  }

  getIcon(rank){
    if(rank <= 3)
      return "ribbon";
    else return null;
  }

  formatNumber(n){
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  viewGlobal(){
    this.navCtrl.setRoot('GlobalLeaderboard');
  }

}