import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  title = 'ng2-charts-demo';
  // Doughnut
  public doughnutChartLabels: string[]  = [ 'En ligne', 'Hors ligne' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450 ],
         label: 'Tabiblib',
         backgroundColor: [
          '#50D6B6',
          '#F7931E',
        ],
    },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };


  constructor() { }

  ngOnInit(): void {
  }


}
