import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class DiscService {
  private questions: Question[] = [];

  setQuestions(qs: Question[]) { this.questions = qs; }
  getQuestions() { return this.questions; }

  computeResults() {
    const totals = { Rouge: 0, Jaune: 0, Vert: 0, Bleu: 0 };
    for (const q of this.questions) {
      const b = 3 - q.pointsA;
      totals[q.optionA] += q.pointsA;
      totals[q.optionB] += b;
    }
    return totals;
  }
}
