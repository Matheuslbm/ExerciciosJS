import { GETCalculator  } from "./GETCalculator.js";

export class UI {
    constructor() {
        this.form = document.getElementById('tmb-get-form');
        this.resultsElement = document.getElementById('results')
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const gender = document.getElementById('gender').value;
        const activityLevel = parseFloat(document.getElementById('activity-level').value);

        const get = GETCalculator.calculate(age, weight, height, gender, activityLevel);
        this.showResults(get)
    }

    showResults(get) {
        this.resultsElement.innerHTML = `Seu GET é de <strong>${get.toFixed(2)}</strong> calorias por dia.`
    }
}