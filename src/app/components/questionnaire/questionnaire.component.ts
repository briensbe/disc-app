import { Component, Input } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-questionnaire',
  imports: [QuestionComponent],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {
// Liste de toutes les questions 
  @Input() questionnaireQuestions!: Question[];

  // Index de la question actuelle
  currentQuestionIndex = 0;

  // Fonction pour passer à la question suivante
  nextQuestion() {
    if (this.currentQuestionIndex < this.questionnaireQuestions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

    // Fonction pour passer à la question suivante
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }


}
