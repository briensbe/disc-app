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
      display_num : 11, // à faire aléatoire
      textA: 'Je suis assez ouvert(e) aux gens et je vais facilement établir de nouvelles relations',
      textB: 'Je ne suis pas très ouvert(e) aux gens et je mets du temps pour établir de nouvelles relations.',
      optionA: 'Jaune',
      optionB: 'Vert',
      pointsA: 3
    },
    {
      id: 2,
      display_num : 22, // à faire aléatoire
      textA: 'Je réagis habituellement lentement et de façon réfléchie.',
      textB: 'Je réagis rapidement et spontanément.',
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
