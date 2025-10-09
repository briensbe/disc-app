import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({ providedIn: 'root' })

/**
 *
 */
export class DiscService {
  private questions: Question[] = [];

  setQuestions(qs: Question[]) {
    this.questions = qs;
  }
  getQuestions() {
    return this.questions;
  }

  computeResults() {
    const totals = { Rouge: 0, Jaune: 0, Vert: 0, Bleu: 0 };

    let relationPoints = this.relationSum();
    console.log('relationPoints : ', relationPoints);
    console.log(typeof relationPoints); // Doit afficher "number"
    let fairePoints = this.faireSum();
    console.log('fairePoints : ', fairePoints);
    console.log(typeof fairePoints); // Doit afficher "number"
    let extravertiPoints = this.extravertiSum();
    console.log('extravertiPoints : ', extravertiPoints);
    console.log(typeof extravertiPoints); // Doit afficher "number"
    let introvertiPoints = this.introvertiSum();
    console.log('introvertiPoints : ', introvertiPoints);
    console.log(typeof introvertiPoints); // Doit afficher "number"

    // Rouge = F+E
    // Jaune = R+E
    // Vert = R+I
    // Bleu = F+I
    totals['Rouge'] = fairePoints + extravertiPoints;
    totals['Jaune'] = relationPoints + extravertiPoints;
    totals['Vert'] = relationPoints + introvertiPoints;
    totals['Bleu'] = fairePoints + introvertiPoints;

    return totals;
  }

  private relationSum(): number {
    let idsForpointsA = [1, 5, 9, 13, 17];
    let idsForpointsB = [3, 7, 11, 15];
    // Somme des pointsA pour les questions avec id 1 ou 2, version switch
    return this.categorySum(idsForpointsA, idsForpointsB);
  }

  private faireSum(): number {
    let idsForpointsA = [3, 7, 11, 15];
    let idsForpointsB = [1, 5, 9, 13, 17];
    // Somme des pointsA pour les questions avec id 1 ou 2, version switch
    return this.categorySum(idsForpointsA, idsForpointsB);
  }

  private extravertiSum(): number {
    let idsForpointsA = [4, 8, 12, 16];
    let idsForpointsB = [2, 6, 10, 14, 18];
    // Somme des pointsA pour les questions avec id 1 ou 2, version switch
    return this.categorySum(idsForpointsA, idsForpointsB);
  }

  private introvertiSum(): number {
    let idsForpointsA = [2, 6, 10, 14, 18];
    let idsForpointsB = [4, 8, 12, 16];
    // Somme des pointsA pour les questions avec id 1 ou 2, version switch
    return this.categorySum(idsForpointsA, idsForpointsB);
  }

  /**
   * Somme des questions qui sont à ajouter à une catégorie
   * idsForpointsA : liste des ids internes des questions pour lesquels il faut prendre le nb de points attribué au choix A
   * idsForpointsB : ... au choix B
   */
  private categorySum(
    idsForpointsA: number[],
    idsForpointsB: number[]
  ): number {
    let sumPoints = 0;
    //liste des ids internes des questions pour lesquels il faut prendre le nb de points attribué au choix A
    for (let q of this.questions) {
      if (idsForpointsA.includes(q.id)) {
        sumPoints += +q.pointsA;
      }
    }
    // liste des ids internes des questions pour lesquels il faut prendre le nb de points attribué au choix B
    for (let q of this.questions) {
      if (idsForpointsB.includes(q.id)) {
        sumPoints += 3 - +q.pointsA; // on prend 3 points - les point attribués à l'option A
      }
    }
    return sumPoints;
  }
}
