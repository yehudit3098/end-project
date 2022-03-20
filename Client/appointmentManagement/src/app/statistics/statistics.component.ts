import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { Dictionary } from '../interfaces/Dictionary';
import { statisticsService } from '../services/statistics.service';
//import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
    dic:Dictionary[];

  constructor(public ser:statisticsService) {
    var numb=[] 
    this.ser.getStaticPro().subscribe((a)=>
    {this.dic=a
    this.dic.forEach(element => {
       this.data.labels[this.data.labels.length]=element.Name
      numb.push(element.Num)
    });
    this.data.datasets[0].data=numb;
  })
  }

  ngOnInit(): void {
  }
  data= {
    labels: [],
    datasets: [{
        label: 'profession',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};
  type = 'bar';
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  
}
