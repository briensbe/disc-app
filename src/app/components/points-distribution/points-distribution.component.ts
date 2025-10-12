import { Component } from '@angular/core';

@Component({
  selector: 'app-points-distribution',
  templateUrl: './points-distribution.component.html',
  styleUrls: ['./points-distribution.component.css']
})
export class PointsDistributionComponent {
  pointsA: number = 2; // Valeur initiale pour A
  pointsB: number = 1; // Valeur initiale pour B

  incrementA(): void {
    if (this.pointsA < 3) {
      this.pointsA++;
      this.pointsB--;
    }
  }

  decrementA(): void {
    if (this.pointsA > 0) {
      this.pointsA--;
      this.pointsB++;
    }
  }

  incrementB(): void {
    if (this.pointsB < 3) {
      this.pointsB++;
      this.pointsA--;
    }
  }

  decrementB(): void {
    if (this.pointsB > 0) {
      this.pointsB--;
      this.pointsA++;
    }
  }
}
