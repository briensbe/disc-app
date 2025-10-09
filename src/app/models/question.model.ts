export interface Question {
  id: number;
  display_num?: number;
  textA: string;
  textB: string;
  optionA: 'Rouge' | 'Jaune' | 'Vert' | 'Bleu';
  optionB: 'Rouge' | 'Jaune' | 'Vert' | 'Bleu';
  pointsA: number;
}
