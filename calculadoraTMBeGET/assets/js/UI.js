import { GETCalculator  } from "./GETCalculator.js";

export class UI {
    constructor() {
        this.form = document.getElementById('tmb-get-form');
        this.resultsElement = document.getElementById('results')

        this.calorieSuggestionElement = document.getElementById('calorie-suggestion');
        this.goalElement = document.getElementById('goal');
        this.weightAdjustmentElement = document.getElementById('weight-adjustment');

        this.goalElement.addEventListener('change', () => this.handleGoalChange());

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleGoalChange() {
        const goal = this.goalElement.value;
        if(goal === 'manter') {
            this.weightAdjustmentElement.disabled = true;
        } else {
            this.weightAdjustmentElement.disabled = false;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const gender = document.getElementById('gender').value;
        const activityLevel = parseFloat(document.getElementById('activity-level').value);
        const goal = this.goalElement.value;
        const weightAdjustment = parseFloat(this.weightAdjustmentElement.value);

        const get = GETCalculator.calculate(age, weight, height, gender, activityLevel);
        this.showResults(get, goal, weightAdjustment);
    }

    showResults(get, goal, weightAdjustment) {
        this.resultsElement.innerHTML = `Seu GET é de <strong>${get.toFixed(2)}</strong> calorias por dia.`

        let calorieIntake;

        if(goal === 'manter') {
            calorieIntake = get;
        } else if (goal === 'emagrecer'){
            const calorieDeficit = weightAdjustment * 7700 / 7;
            calorieIntake = get - calorieDeficit;
        } else if ( goal === 'ganhar') {
            const calorieSurplus = weightAdjustment * 7700 / 7;
            calorieIntake = get + calorieSurplus;
        }

        this.calorieSuggestionElement.innerHTML = `Para ${goal}, você deve consumir ${calorieIntake.toFixed(2)} calorias por dia. `
    }
}