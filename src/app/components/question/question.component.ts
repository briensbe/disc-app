import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- ajouter CommonModule
import { PointsDistributionComponent } from '../points-distribution/points-distribution.component';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
  imports: [FormsModule, CommonModule, PointsDistributionComponent]  // <-- ajouter ici pour ngModel
})
export class QuestionComponent {
  @Input() question!: Question;

// Méthode pour mettre à jour les points
  updatePointsA() {
      this.question.pointsB = 3 - this.question.pointsA;
  }

  updatePointsB() {
      this.question.pointsA = 3 - this.question.pointsB;
  }

}


