import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
Chart.register(...registerables);

// définition du composant, notamment sa balise <app-results>
@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements AfterViewInit {
  chartType: ChartType = 'bar';
  buttonText: string = 'pie';

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
    //console.log(this.buttonText);
    const ctx = this.canvas.nativeElement.getContext('2d');

    this.chart = new Chart(ctx!, {
      type: this.chartType,
      data: {
        labels: ['Rouge', 'Jaune', 'Vert', 'Bleu'],
        datasets: [
          {
            label: 'Votre profil',
            data: Object.values(this.totals),
            backgroundColor: ['#e53935', '#fdd835', '#43a047', '#1e88e5'],
          },
        ],
      },
      options: {
        responsive: false, // Désactive le responsive si tu veux des dimensions fixes
        //scales: { y: { beginAtZero: true } },
        scales: this.chartType === 'bar' ? { y: { beginAtZero: true } } : {},
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

  //change le type de graphique
  changeType() {
    //on conserve le précédent format pour le texte du bouton.
    this.buttonText = this.chartType;
    // Change le type de graphique
    this.chartType = this.chartType === 'bar' ? 'pie' : 'bar';

    // Détruit l'ancien graphique s'il existe
    if (this.chart) {
      this.chart.destroy();
    }

    // Re-crée le graphique avec le nouveau type
    this.ngAfterViewInit();
  }



}
