import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { AverageRatings } from '../../../core/models';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="radar-wrap" [style.width]="size" [style.height]="size">
      <canvas baseChart
        [data]="chartData"
        [options]="chartOptions"
        type="radar">
      </canvas>
    </div>
  `,
  styles: [`.radar-wrap { position:relative; }`],
})
export class RadarChartComponent implements OnChanges {
  @Input() ratings!: AverageRatings;
  @Input() size = '300px';
  @Input() compareRatings?: AverageRatings;
  @Input() compareLabel = 'Compared';
  @Input() primaryLabel = 'This teacher';

  chartData: ChartData<'radar'> = { labels: [], datasets: [] };

  chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: { stepSize: 2, font: { size: 10 } },
        pointLabels: { font: { size: 12, weight: 'bold' } },
        grid: { color: 'rgba(128,128,128,0.2)' },
      },
    },
    plugins: {
      legend: { position: 'bottom', labels: { font: { size: 11 } } },
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ratings'] || changes['compareRatings']) {
      this.buildChart();
    }
  }

  private buildChart(): void {
    if (!this.ratings) return;
    const labels = ['Clarity', 'Objectivity', 'Accessibility', 'Workload'];
    const primary = [
      this.ratings.clarity,
      this.ratings.objectivity,
      this.ratings.accessibility,
      this.ratings.workload,
    ];

    const datasets: ChartData<'radar'>['datasets'] = [
      {
        label: this.primaryLabel,
        data: primary,
        backgroundColor: 'rgba(57,73,171,0.15)',
        borderColor: 'rgba(57,73,171,0.9)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(57,73,171,1)',
        pointRadius: 4,
      },
    ];

    if (this.compareRatings) {
      datasets.push({
        label: this.compareLabel,
        data: [
          this.compareRatings.clarity,
          this.compareRatings.objectivity,
          this.compareRatings.accessibility,
          this.compareRatings.workload,
        ],
        backgroundColor: 'rgba(245,124,0,0.15)',
        borderColor: 'rgba(245,124,0,0.9)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(245,124,0,1)',
        pointRadius: 4,
      });
    }

    this.chartData = { labels, datasets };
  }
}
