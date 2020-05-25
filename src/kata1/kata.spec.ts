import { KataOne } from './kata';

describe('kata 1 should work', () => {
    let subject: KataOne;

    beforeEach(() => {
        subject = new KataOne();
    })
    test('should reverse string', () => {
        expect(subject.reverse('dojo')).toBe('ojod');
    })
});
