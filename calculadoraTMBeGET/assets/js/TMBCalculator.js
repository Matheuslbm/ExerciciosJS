export class TMBCalculator {
    static calculate(age, weight, height, gender) {
        if (gender === 'male') {
            return 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        } else {
            return 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        }
    }
}