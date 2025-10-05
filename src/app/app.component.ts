import { Component } from '@angular/core';
import { DiscService } from './services/disc.service';
import { Question } from './models/question.model';
import { QuestionComponent } from './components/question/question.component';
import { ResultsComponent } from './components/results/results.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, QuestionComponent, ResultsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  questions: Question[] = [
    {
      id: 1,
      textA: 'Je suis assez ouvert(e) aux gens...',
      textB: 'Je mets du temps pour établir des relations.',
      optionA: 'Jaune',
      optionB: 'Vert',
      pointsA: 3
    },
    {
      id: 2,
      textA: 'Je suis assez ouvert(e) aux gens...',
      textB: 'Je mets du temps pour établir des relations.',
      optionA: 'Jaune',
      optionB: 'Vert',
      pointsA: 3
    }
  ];
  totals: any = {};
  showResults = false;

  constructor(private disc: DiscService) {}

  finish() {
    this.disc.setQuestions(this.questions);
    this.totals = this.disc.computeResults();
    this.showResults = true;
  }
}
