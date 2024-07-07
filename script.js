document.addEventListener('DOMContentLoaded', function () {
    const models = {
        "Ford": ["Fiesta", "Focus", "Mustang"],
        "BMW": ["320i", "X5", "Z4"],
        "Audi": ["A4", "Q7", "R8"],
        // Add more makes and their corresponding models here
    };

    const fuelTypes = {
        "Ford": ["Petrol", "Diesel"],
        "BMW": ["Petrol", "Diesel", "Electric"],
        "Audi": ["Petrol", "Diesel", "Hybrid"],
        // Add more makes and their corresponding fuel types here
    };

    const transmissions = {
        "Ford": ["Manual", "Automatic"],
        "BMW": ["Manual", "Automatic"],
        "Audi": ["Manual", "Automatic"],
        // Add more makes and their corresponding transmissions here
    };

    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const fuelTypeSelect = document.getElementById('fuel-type');
    const transmissionSelect = document.getElementById('transmission');

    makeSelect.addEventListener('change', function () {
        const selectedMake = makeSelect.value;
        updateOptions(modelSelect, models[selectedMake] || []);
        updateOptions(fuelTypeSelect, fuelTypes[selectedMake] || []);
        updateOptions(transmissionSelect, transmissions[selectedMake] || []);
        modelSelect.disabled = selectedMake === 'all';
    });

    function updateOptions(selectElement, options) {
        selectElement.innerHTML = '<option value="all">All</option>';
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            selectElement.appendChild(optionElement);
        });
    }

    document.getElementById('distance').addEventListener('input', function() {
        document.getElementById('distance-value').textContent = this.value + ' miles';
    });

    document.getElementById('filter-form').addEventListener('submit', function (event) {
        event.preventDefault();
        applyFilters();
    });

    function applyFilters() {
        const postcode = document.getElementById('postcode').value;
        const distance = document.getElementById('distance').value;
        const priceElements = document.querySelectorAll('input[name="price"]:checked');
        const price = Array.from(priceElements).map(el => el.value);
        const make = makeSelect.value;
        const model = modelSelect.value;
        const fuelType = fuelTypeSelect.value;
        const transmission = transmissionSelect.value;
        const year = document.getElementById('year').value;

        console.log(`Applying filters: Postcode - ${postcode}, Distance - ${distance}, Price - ${price}, Make - ${make}, Model - ${model}, Fuel Type - ${fuelType}, Transmission - ${transmission}, Year - ${year}`);

        // Add logic to filter and display the cars
    }

    // Populate make dropdown
    const makes = Object.keys(models);
    makes.forEach(make => {
        const optionElement = document.createElement('option');
        optionElement.value = make;
        optionElement.textContent = make;
        makeSelect.appendChild(optionElement);
    });
});
