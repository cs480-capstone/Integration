import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the GlobalLeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let allusers = [
    {
        leaderboardRank: null,
        username: 'ab',
        points: 9800
    },
    {
        leaderboardRank: null,
        username: 'cd',
        points: 9700
    },
    {
        leaderboardRank: null,
        username: 'ef',
        points: 9600
    },
    {
        leaderboardRank: null,
        username: 'gh',
        points: 9500
    },
    {
        leaderboardRank: null,
        username: 'ij',
        points: 9400
    },
    {
        leaderboardRank: null,
        username: 'kl',
        points: 9300
    },
    {
        leaderboardRank: null,
        username: 'mn',
        points: 9200
    },
    {
        leaderboardRank: null,
        username: 'ab',
        points: 9100
    },
    {
        leaderboardRank: null,
        username: 'cd',
        points: 9000
    },
    {
        leaderboardRank: null,
        username: 'ef',
        points: 8900
    },
    {
        leaderboardRank: null,
        username: 'gh',
        points: 8800
    },
    {
        leaderboardRank: null,
        username: 'ij',
        points: 8700
    },
    {
        leaderboardRank: null,
        username: 'kl',
        points: 9000
    },
    {
        leaderboardRank: null,
        username: 'mn',
        points: 8600
    },
    {
        leaderboardRank: null,
        username: 'op',
        points: 8500
    },
    {
        leaderboardRank: null,
        username: 'FigTree7',
        points: 8400
    },
    {
        leaderboardRank: null,
        username: 'st',
        points: 8300
    },
    {
        leaderboardRank: null,
        username: 'uv',
        points: 8200
    },
    {
        leaderboardRank: null,
        username: 'wx',
        points: 8100
    },
    {
        leaderboardRank: null,
        username: 'yz',
        points: 8000
    },
    {
        leaderboardRank: null,
        username: 'ac',
        points: 7900
    },
    {
        leaderboardRank: null,
        username: 'ad',
        points: 7800
    },
    {
        leaderboardRank: null,
        username: 'ae',
        points: 7700
    },
    {
        leaderboardRank: null,
        username: 'af',
        points: 7600
    },
    {
        leaderboardRank: null,
        username: 'ag',
        points: 7500
    },
    {
        leaderboardRank: null,
        username: 'ah',
        points: 7400
    },
    {
        leaderboardRank: null,
        username: 'ai',
        points: 7300
    },
    {
        leaderboardRank: null,
        username: 'aj',
        points: 7200
    },
    {
        leaderboardRank: null,
        username: 'ak',
        points: 7100
    },
    {
        leaderboardRank: null,
        username: 'al',
        points: 7000
    },
    {
        leaderboardRank: null,
        username: 'am',
        points: 6900
    },
    {
        leaderboardRank: null,
        username: 'an',
        points: 6800
    },
    {
        leaderboardRank: null,
        username: 'ao',
        points: 6700
    },
    {
        leaderboardRank: null,
        username: 'ap',
        points: 6600
    },
    {
        leaderboardRank: null,
        username: 'aq',
        points: 6500
    },
    {
        leaderboardRank: null,
        username: 'ar',
        points: 6400
    },
    {
        leaderboardRank: null,
        username: 'as',
        points: 6300
    },
    {
        leaderboardRank: null,
        username: 'at',
        points: 6200
    },
    {
        leaderboardRank: null,
        username: 'au',
        points: 6100
    },
    {
        leaderboardRank: null,
        username: 'av',
        points: 6000
    },
    {
        leaderboardRank: null,
        username: 'aw',
        points: 5900
    },
    {
        leaderboardRank: null,
        username: 'ax',
        points: 5800
    }
]

@Component({})
export class Leaderboard {

    globallyRankedUsers: any [] = [null]
    locallyRankedUsers: any [] = [null]

  constructor(public navCtrl: NavController) {
    this.loadUsers();
  }

  loadUsers(){
    if(allusers.length < 15){
        for(let x = 0; x < allusers.length; x++){
            this.globallyRankedUsers[x] = allusers[x];
            this.locallyRankedUsers[x] = allusers[x];
            this.globallyRankedUsers[x].leaderboardRank = x+1;
            this.locallyRankedUsers[x].leaderboardRank = x+1;
        }
    }
    else{
        for(let x = 0; x < 15; x++){
            this.globallyRankedUsers[x] = allusers[x];
            this.globallyRankedUsers[x].leaderboardRank = x+1;
        }
        for(let x = 15; x < allusers.length; x++){
            this.locallyRankedUsers[x-15] = allusers[x];
            this.locallyRankedUsers[x-15].leaderboardRank = x-14;
        }
    }
  }
}