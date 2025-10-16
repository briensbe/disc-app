import { Component } from '@angular/core';
import { DiscService } from './services/disc.service';
import { Question } from './models/question.model';
import { QuestionComponent } from './components/question/question.component';
import { ResultsComponent } from './components/results/results.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    QuestionComponent,
    ResultsComponent,
    QuestionnaireComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  questions: Question[] = [
    {
      id: 1,
      display_num: 11, // à faire aléatoire
      textA:
        'Je suis assez ouvert(e) aux gens et je vais facilement établir de nouvelles relations',
      textB:
        'Je ne suis pas très ouvert(e) aux gens et je mets du temps pour établir de nouvelles relations.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 2,
      display_num: 22,
      textA: 'Je réagis habituellement lentement et de façon réfléchie.',
      textB: 'Je réagis rapidement et spontanément.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 3,
      display_num: 33,
      textA:
        'Je suis assez regardant(e) sur la façon dont les autres accaparent mon temps.',
      textB: 'Je ne fais pas attention au temps quand je suis avec les autres.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 4,
      display_num: 44,
      textA: "Je m'introduis facilement dans des rassemblements de personnes.",
      textB:
        "J'attends généralement que quelqu'un m'introduise dans un groupe.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 5,
      display_num: 0,
      textA:
        "J'oriente souvent ma conversation sur les centres d'intérêts des autres même si ça s'égare du sujet en cours ou du travail.",
      textB:
        "J'oriente souvent ma conversation sur le travail, les actions ou les sujets d'actualité.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 6,
      display_num: 60,
      textA: 'Je ne suis généralement pas assertif(ve), je peux être patient.',
      textB:
        "Je suis généralement assertif(ve), je suis assez impatient quand ça n'avance pas.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 7,
      display_num: 70,
      textA: 'Je prends généralement des décisions basées sur les faits.',
      textB:
        'Je prends généralement des décisions basées sur les expériences, les ressentis ou les relations.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 8,
      display_num: 80,
      textA: 'Je participe régulièrement aux conversations du groupe.',
      textB:
        "Je ne participe pas facilement aux conversations du groupe mais j'écoute.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 9,
      display_num: 90,
      textA:
        "Je préfère généralement travailler avec les autres, leur donner du support quand cela m'est possible.",
      textB:
        'Je préfère travailler indépendamment ou donner mes directives pour que les autres travaillent efficacement.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 10,
      display_num: 100,
      textA:
        'Je pose régulièrement des questions ou je parle de façon indirecte',
      textB:
        "Je fais des déclarations spontanées et j'exprime mon opinion avec fermeté.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 11,
      display_num: 110,
      textA:
        'Je me concentre principalement sur les idées, les concepts et les résultats.',
      textB:
        'Je me concentre principalement sur la personne, les relations et le ressenti.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 12,
      display_num: 120,
      textA:
        "Je m'exprime avec des gestes, des expression faciales, une voix claire et met l'intonation dans mes phrases.",
      textB:
        "Je m'exprime calmement et posément, je dois parfois répéter parce que je ne parle pas assez fort.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 13,
      display_num: 130,
      textA:
        "J'accepte généralement les points de vue des autres (idées, impressions, émotions)",
      textB: "Je n'accepte pas facilement un avis différent du mien.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 14,
      display_num: 144,
      textA:
        'Je réagis au changement ou à la prise de risque de façon prédictible et prudente.',
      textB:
        'Je réagis au changement ou à la prise de risque de façon dynamique et imprévisible.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 15,
      display_num: 150,
      textA:
        "En général, je préfère réserver mes ressentis personnels et mes émotions à un cercle très restreint de personnes que j'ai choisies.",
      textB:
        "Je trouve naturel de partager et de discuter de mes émotions avec d'autres.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 16,
      display_num: 160,
      textA: 'Je cherche régulièrement des nouvelles expériences.',
      textB:
        "J'aime des situations connues et des relations stables sur lesquelles m'appuyer.",
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 17,
      display_num: 170,
      textA:
        "Je suis concerné(e) par l'agenda des autres, leurs intérêts et leurs obligations.",
      textB:
        'Je dirige les évènements en fonction de mon agenda, mes intérêts et mes projets.',
      pointsA: 0,
      pointsB: 0,
    },
    {
      id: 18,
      display_num: 180,
      textA: 'Je réagis aux conflits de façon calme et indirecte.',
      textB: 'Je réagis aux conflits de façon directe et rapide.',
      pointsA: 0,
      pointsB: 0,
    },
  ];
  totals: any = {};
  showResults = false;

  constructor(private disc: DiscService) {}

  errorMessage: string | null = null;

  finish() {
    this.disc.setQuestions(this.questions);
    this.totals = this.disc.computeResults();

    this.showResults = true;
    this.checkQuestionsAreFilled();
    //désactivation de l'affichage des résultats si on eu une erreur... 
    if (this.errorMessage !== null) {
      this.showResults = false;
    }
  }

  private checkQuestionsAreFilled() {
    this.errorMessage = null;
    for (const question of this.questions) {
      if (Number(question.pointsA) + Number(question.pointsB) != 3) {
        // console.log(question.id + " points A : " + question.pointsA + " points B : " + question.pointsB + " type : " + typeof question.pointsA);
        if (!this.errorMessage) {
          this.errorMessage =
            'Veuillez répondre à toutes les questions avant de continuer. Il manque : ' +
            question.id;
        } else {
          this.errorMessage += ', ' + question.id;
        }
      }
    }

  }
}
