import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { DataParams } from '../map/map';
import { Chart } from 'chart.js';
//import { Tree } from '../map/map'
import { EntryPasserProvider } from '../../providers/entry-passer/entry-passer'

let barGraphIndex = 0;
let lineGraphSegment = 3;
let numBarGraphs = 6;

//the colors for each of the left and right graphs
let barGraphColors = [
    ['rgba(0, 193, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
    ['rgba(213, 255, 0, 0.5)','rgba(0, 0, 255, 0.5)'],
    ['rgba(54, 162, 235, 0.5)','rgba(255, 137, 0, 0.5)'],
    ['rgba(0, 255, 0, 0.5)','rgba(0, 0, 0, 0.5)'],
    ['rgba(255, 0, 222, 0.5)','rgba(0, 255, 213, 0.5)'],
    ['rgba(255, 0, 0, 0.5)','rgba(0, 0, 255, 0.5)']
]

//the data in each of the graphs
let barGraphData = [[50,50],[50,50],[50,50],[50,50],[50,50],[50,50]];

let lineGraphData = [0,180,710,2200,5200,10000];

//labels for each graph
let barGraphLabels = [
  ['Opened','Not Opened'],
  ['Used','Not Used'],
  ['Full','Not Full'],
  ['Green','Not Green'],
  ['Opened','Not Opened'],
  ['Ripe','Not Ripe']
];

//the IDs by which to reference each graph
/*let IDs = [
  'pollenCones',
  'unfoldingLeaves',
  'fullSizedLeaves',
  'coloredLeaves',
  'openedFlowers',
  'ripeFruits'
];*/

//the titles for each graph
let titles = [
  'Open Pollen Cones',
  'Canopy Space Used',
  'Full-Sized Leaves',
  'Colored Leaves',
  'Open Flowers',
  'Ripe Fruit'
];

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'dataCollection.html'
})
 export class Graphs {
  //each of the view children for bar graphs in the html file
  @ViewChild('pollenCones') pollenCones;
  @ViewChild('unfoldingLeaves') unfoldingLeaves;
  @ViewChild('fullSizedLeaves') fullSizedLeaves;
  @ViewChild('coloredLeaves') coloredLeaves;
  @ViewChild('openedFlowers') openedFlowers;
  @ViewChild('ripeFruits') ripeFruits;

  //each of the view children for line graphs
  @ViewChild('breakingNeedleBuds') breakingNeedleBuds;

  //testing purposes, will be pulled from entry passer when integrated
  showPollenCones: boolean = false;
  showUnfoldingLeaves: boolean = false;
  showFullSizedLeaves: boolean = false;
  showColoredLeaves: boolean = false;
  showOpenedFlowers: boolean = false;
  showRipeFruits: boolean = false;
  showNumberOfBreakingPollenCones: boolean = false;

  //starting values for the sliders
  pollenConesValue: number = 50;
  unfoldingLeavesValue: number = 50;
  fullSizedLeavesValue: number = 50;
  coloredLeavesValue: number = 50;
  openedFlowersValue: number = 50;
  ripeFruitsValue: number = 50;

  breakingNeedleBudsValue: number = 3;

  barChart: any; //array of barcharts
  lineChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private passer : EntryPasserProvider, private alert : AlertController) {
      this.barChart = [null,null,null,null,null,null]; //initialize an array of bar charts
      //this.lineChart = new Linegraphs();
     this.initGraphBools(navParams.get("params"));
  }

  collectData()
  {
    console.log(this.openedFlowersValue);
    let entry = {data : "data" + this.pollenConesValue + " " +this.unfoldingLeavesValue + " " + this.fullSizedLeaves};
    this.passer.getEntry(entry)  
    this.presentPoints();
    this.navCtrl.pop();
  }

  presentPoints()
  {
    let alert = this.alert.create(
      {
        title : "Data sent!",
        subTitle : "You earned 1000 drops",
        buttons : ["Continue"]
      }
    );
    alert.present();
  }

  initGraphBools(params : DataParams)
  {
    if(params.falling)  // faling tree
    {
        this.showColoredLeaves = true;
        this.showFullSizedLeaves = true;
        this.showUnfoldingLeaves = true; 
    }
    else                // non falling tree
    {
        this.showPollenCones = true;
        this.showNumberOfBreakingPollenCones = true;
    }
    this.showOpenedFlowers = params.flowering;
    this.showRipeFruits = params.fruiting;
    
  }

  ionViewDidLoad(){
    for(barGraphIndex = 0; barGraphIndex < numBarGraphs; barGraphIndex++){
      this.barChart[barGraphIndex] = this.getBarChart(); //load each graph into the view
    }
    if(this.showNumberOfBreakingPollenCones)
      this.lineChart = this.getLineChart();
  }

/*
draws the graph
*/
getChart(context, type, data, options?){
  return new Chart(context, {
      type: type,
      data: data,
      options: options
  });
}

/*
sets the fields and options for each bar graph
*/
getBarChart(){
  let data = 
  {
      scaleStartValue : 0,
      labels: barGraphLabels[barGraphIndex],
      datasets: [{
          label: 'Percentage of ' + titles[barGraphIndex],
          data: barGraphData[barGraphIndex],
          backgroundColor: barGraphColors[barGraphIndex]
      }]
  }

  let options = 
  {
      title:{
          display: true,
          text: 'Percentage of ' + titles[barGraphIndex],
          fontSize:20
      },
      legend:{
          display: false
      },
      tooltips: {
          enabled: false
      },
      scales: {
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              },
              ticks: {
                  beginAtZero: true,
                  min:0,
                  max:100,
                  stepSize:20,
                  tickThickness: 0
              }
          }],
          xAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }
          }]
      }
  }

  //return the correct view child
  if((barGraphIndex === 0) && this.showPollenCones)
      return this.getChart(this.pollenCones.nativeElement, "bar", data, options);
  else if((barGraphIndex === 1) && this.showUnfoldingLeaves)
      return this.getChart(this.unfoldingLeaves.nativeElement, "bar", data, options);
  else if((barGraphIndex === 2) && this.showFullSizedLeaves)
      return this.getChart(this.fullSizedLeaves.nativeElement, "bar", data, options);
  else if((barGraphIndex === 3) && this.showColoredLeaves)
      return this.getChart(this.coloredLeaves.nativeElement, "bar", data, options);
  else if((barGraphIndex === 4) && this.showOpenedFlowers)
      return this.getChart(this.openedFlowers.nativeElement, "bar", data, options);
  else if((barGraphIndex === 5) && this.showRipeFruits)
      return this.getChart(this.ripeFruits.nativeElement, "bar", data, options);

}

getLineChart(){
  let data = {
      labels: [' ', ' ', ' ', ' ', ' ', ' '],
      datasets: [{
          label: 'Number of Breaking Needle Buds',
          backgroundColor: '#87E6BF',
          data: this.getExponentialData(lineGraphSegment)//[0,100,200,1600,10000]//[0,180,710,2200,5200,10000]//[0,300,900,2100,4600,10000]
      }]
  }

  let options = {
      title:{
          display: true,
          text: 'Number of Breaking Needle Buds',
          fontSize:20
      },
      scales:{
          yAxes: [{
              type: 'linear',
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              },
              ticks:{
                  display: true,
                  min: 0,
                  max: 10000,
                  stepSize: 2000,
                  /*callback: function(tick,index,ticks){ //used for logarithmic scale
                      return tick.toLocaleString()
                  }*/ 
              }
          }],
          xAxes: [{
              gridLines:{
                  color: "rgba(0, 0, 0, 0)"
              }
          }]
      },
      elements:{
          point:{
              radius: 0
          }
      },
      legend:{
          display: false
      },
      tooltips: {
          enabled: false
      }
  }
  return this.getChart(this.breakingNeedleBuds.nativeElement,"line",data,options)
}

  //get called when the state of a graph changes, and updates that graph
  redrawBarGraph(i,value){
      barGraphIndex = i;
      barGraphData[barGraphIndex] = [value,100-value];
      this.barChart[barGraphIndex].destroy();
      this.barChart[barGraphIndex] = this.getBarChart();
  }

  redrawLineGraph(i,inputSegment){
      lineGraphSegment = inputSegment;
      this.lineChart.destroy();
      this.lineChart = this.getLineChart()
  }

  getExponentialData(size){
      let result: number [] = [];
      for(let i = 0; i <= size; i++)
          result[i] = lineGraphData[i];
      
      return result;
  }
}


// this will be changed to fit the needs of the database
export interface Entry
{
  data : string
}

@Component({
  selector: 'dataCollection',
  templateUrl: 'dataCollection.html',
})
export class DataCollection {
  params : DataParams;
 
   constructor(public navCtrl: NavController, public navParams: NavParams, private passer : EntryPasserProvider, private alert : AlertController) {
     // gets the data points 
     this.params = navParams.get('params');//(new Tree(0,0,null,["none"],true)).collectData()
     //this.document.querySelector('button').onClick(() => this.collectData()).
   }
 //TODO implment the diffrent data collection methods and read the data into entry
 
   collectData()
   {
     let entry = {data : "passed"};
     this.passer.getEntry(entry)
     this.presentPoints();
     this.navCtrl.pop();
   }
 
   presentPoints()
   {
     let alert = this.alert.create(
       {
         title : "Data sent!",
         subTitle : "You earned 1000 drops",
         buttons : ["Continue"]
       }
     );
     alert.present();
   }
 }