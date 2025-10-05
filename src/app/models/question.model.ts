export interface Question {
  id: number;
  textA: string;
  textB: string;
  optionA: 'Rouge' | 'Jaune' | 'Vert' | 'Bleu';
  optionB: 'Rouge' | 'Jaune' | 'Vert' | 'Bleu';
  pointsA: number;
}
