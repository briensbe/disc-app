import { DiscService } from './disc.service';
import { Question } from '../models/question.model';

describe('DiscService', () => {
  let service: DiscService;

  beforeEach(() => {
    service = new DiscService();
  });

  it('should correctly sum points for RelationSum()', () => {
    const questions: Question[] = [
      {
        id: 1,
        textA: '',
        textB: '',
        optionA: 'Rouge',
        optionB: 'Jaune',
        pointsA: 2,
        pointsB: 1
      },
      {
        id: 3,
        textA: '',
        textB: '',
        optionA: 'Vert',
        optionB: 'Bleu',
        pointsA: 1,
        pointsB: 2
      },
      {
        id: 5,
        textA: '',
        textB: '',
        optionA: 'Rouge',
        optionB: 'Jaune',
        pointsA: 3,
        pointsB: 0
      },
      {
        id: 7,
        textA: '',
        textB: '',
        optionA: 'Vert',
        optionB: 'Bleu',
        pointsA: 0,
        pointsB: 3
      },
      {
        id: 9,
        textA: '',
        textB: '',
        optionA: 'Rouge',
        optionB: 'Jaune',
        pointsA: 1,
        pointsB: 2
      },
      {
        id: 11,
        textA: '',
        textB: '',
        optionA: 'Vert',
        optionB: 'Bleu',
        pointsA: 2,
        pointsB: 1
      },
      {
        id: 13,
        textA: '',
        textB: '',
        optionA: 'Rouge',
        optionB: 'Jaune',
        pointsA: 0,
        pointsB: 3
      },
      {
        id: 15,
        textA: '',
        textB: '',
        optionA: 'Vert',
        optionB: 'Bleu',
        pointsA: 3,
        pointsB: 0
      },
      {
        id: 17,
        textA: '',
        textB: '',
        optionA: 'Rouge',
        optionB: 'Jaune',
        pointsA: 2,
        pointsB: 1
      },
    ];
    service.setQuestions(questions);

    // RelationSum = pointsA for ids [1,5,9,13,17] + (3-pointsA) for ids [3,7,11,15]
    // [1,5,9,13,17] => 2+3+1+0+2 = 8
    // [3,7,11,15] => (3-1)+(3-0)+(3-2)+(3-3) = 2+3+1+0 = 6
    // Total = 8 + 6 = 14

    // @ts-ignore: access private method for test
    //const sum = service['RelationSum']();
    let idsForpointsA = [1, 5, 9, 13, 17];
    let idsForpointsB = [3, 7, 11, 15];
    const sum = service['categorySum'](idsForpointsA, idsForpointsB);
    expect(sum).toBe(14);
  });
});
