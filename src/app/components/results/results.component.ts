import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements AfterViewInit {
  @Input() totals!: {
    Rouge: number;
    Jaune: number;
    Vert: number;
    Bleu: number;
  };
  @ViewChild('chartCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  chart?: Chart;

  //ngOnInit() {
  ngAfterViewInit() {
    const ctx = this.canvas.nativeElement.getContext('2d');

    this.chart = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: ['Rouge', 'Jaune', 'Vert', 'Bleu'],
        datasets: [
          {
            data: Object.values(this.totals),
            backgroundColor: ['#e53935', '#fdd835', '#43a047', '#1e88e5'],
          },
        ],
      },
      options: {
        //responsive: false, // Désactive le responsive si tu veux des dimensions fixes
        scales: { y: { beginAtZero: true } },
      },
    });

    this.chart.resize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totals'] && this.chart) {
      this.chart.data.datasets[0].data = Object.values(this.totals);
      this.chart.update();
    }
  }
}
