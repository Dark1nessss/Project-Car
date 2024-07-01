document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownContent = document.getElementById('dropdown-content');
    const searchMake = document.getElementById('search-make');
    const resetLink = document.querySelector('.reset-link');
    const brandItems = document.querySelectorAll('.brand-item');

    dropdownToggle.addEventListener('click', function () {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    searchMake.addEventListener('input', function () {
        const searchText = searchMake.value.toLowerCase();
        brandItems.forEach(function (item) {
            const label = item.querySelector('label').textContent.toLowerCase();
            if (label.includes(searchText)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    resetLink.addEventListener('click', function (event) {
        event.preventDefault();
        searchMake.value = '';
        brandItems.forEach(function (item) {
            item.style.display = 'flex';
        });
    });

    document.getElementById('filter-form').addEventListener('submit', function (event) {
        event.preventDefault();
        applyFilters();
    });

    function applyFilters() {
        const postcode = document.getElementById('postcode').value;
        const distance = document.getElementById('distance').value;
        const price = document.getElementById('price').value;
        const makeElement = document.querySelector('.brand-item input[type="radio"]:checked');
        const make = makeElement ? makeElement.value : 'all';
        const model = document.getElementById('model').value;
        const fuelType = document.getElementById('fuel-type').value;
        const transmission = document.getElementById('transmission').value;
        const year = document.getElementById('year').value;

        console.log(`Applying filters: Postcode - ${postcode}, Distance - ${distance}, Price - ${price}, Make - ${make}, Model - ${model}, Fuel Type - ${fuelType}, Transmission - ${transmission}, Year - ${year}`);

        const filteredCars = cars.filter(car => {
            return (price === 'all' || car.price <= parseInt(price)) &&
                (make === 'all' || car.make === make) &&
                (model === 'all' || car.model === model) &&
                (fuelType === 'all' || car.fuel === fuelType) &&
                (transmission === 'all' || car.transmission === transmission) &&
                (year === 'all' || car.year == year) &&
                car.distance <= distance;
        });

        displayCars(filteredCars);
    }

    const cars = [
        {
            id: 1,
            image: 'car1.jpg',
            name: 'Abarth 124 Spider',
            model: '1.4 T MultiAir 2dr Auto',
            year: 2018,
            miles: 23521,
            fuel: 'Petrol',
            price: 19790,
            distance: 30,
            make: 'Abarth',
            transmission: 'Automatic'
        },
        {
            id: 2,
            image: 'car2.jpg',
            name: 'Abarth 124 Spider',
            model: '1.4 T MultiAir 2dr',
            year: 2016,
            miles: 22757,
            fuel: 'Petrol',
            price: 17480,
            distance: 20,
            make: 'Abarth',
            transmission: 'Manual'
        },
        {
            id: 3,
            image: 'car3.jpg',
            name: 'Abarth 124 Spider',
            model: '1.4 T MultiAir 2dr',
            year: 2017,
            miles: 14284,
            fuel: 'Petrol',
            price: 19250,
            distance: 25,
            make: 'Abarth',
            transmission: 'Automatic'
        },
        // Add more car objects as needed
    ];

    function displayCars(cars) {
        const carListing = document.getElementById('car-listing');
        carListing.innerHTML = '';

        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>${car.model}</p>
                <p>${car.year} | ${car.miles} miles | ${car.fuel}</p>
                <p>£${car.price.toLocaleString()}</p>
                <button onclick="viewDetails(${car.id})">View details</button>
            `;
            carListing.appendChild(carCard);
        });
    }

    function viewDetails(carId) {
        alert('View details for car ID: ' + carId);
    }

    displayCars(cars);
});