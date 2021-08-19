import {Component} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
  public chartOptions: ChartOptions = {
    series: [
      {
        name: "My-series",
        data: this.data
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: "My First Angular Chart"
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    }
  };

  public updateSeries() {
    const newValue = Math.floor(Math.random() * 100);
    this.data = [...this.data, newValue];
    this.chartOptions.series = [{
      data: this.data
    }];
  }
}
