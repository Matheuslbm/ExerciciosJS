import { TMBCalculator } from './TMBCalculator.js';

export class GETCalculator {
    static calculate(age, weight, height, gender, activityLevel) {
        const tmb = TMBCalculator.calculate(age, weight, height, gender);
        return tmb * activityLevel;
    }
}