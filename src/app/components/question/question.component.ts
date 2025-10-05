import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- ajouter CommonModule

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
  imports: [FormsModule, CommonModule]  // <-- ajouter ici pour ngModel
})
export class QuestionComponent {
  @Input() question!: Question;
}
