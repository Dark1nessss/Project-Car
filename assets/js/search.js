const carData = {
    'Ford': ['Mustang', 'F-150', 'Escape'],
    'Chevrolet': ['Camaro', 'Silverado', 'Malibu'],
    'Toyota': ['Corolla', 'Camry', 'RAV4']
};
let currentDropdown = '';

function toggleDropdown(type) {
    const dropdown = document.getElementById('dropdown');
    const dropdownSearch = document.getElementById('dropdownSearch');
    const dropdownItems = document.getElementById('dropdownItems');

    currentDropdown = type;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    if (type === 'brand') {
        dropdownSearch.placeholder = 'Search Brand';
        dropdownItems.innerHTML = '';
        for (let brand in carData) {
            const brandDiv = document.createElement('div');
            brandDiv.textContent = brand;
            brandDiv.onclick = () => selectBrand(brand);
            dropdownItems.appendChild(brandDiv);
        }
    } else if (type === 'model') {
        dropdownSearch.placeholder = 'Search Model';
        const selectedBrand = document.getElementById('brandText').innerText;
        dropdownItems.innerHTML = '';
        carData[selectedBrand].forEach(model => {
            const modelDiv = document.createElement('div');
            modelDiv.textContent = model;
            modelDiv.onclick = () => selectModel(model);
            dropdownItems.appendChild(modelDiv);
        });
    }
}

function filterDropdown() {
    const input = document.getElementById('dropdownSearch');
    const filter = input.value.toLowerCase();
    const items = document.getElementById('dropdownItems').getElementsByTagName('div');
    for (let i = 0; i < items.length; i++) {
        const txtValue = items[i].textContent || items[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function selectBrand(brand) {
    document.getElementById('brandText').innerText = brand;
    document.getElementById('modelButton').disabled = false;
    document.getElementById('dropdown').style.display = 'none';
}

function selectModel(model) {
    document.getElementById('modelText').innerText = model;
    document.getElementById('dropdown').style.display = 'none';
}

function search() {
    const brand = document.getElementById('brandText').innerText;
    const model = document.getElementById('modelText').innerText;
    const postalCode = document.getElementById('postalCodeInput').value;
    alert(`Searching for ${brand} ${model} in ${postalCode}`);
    // Implement the search functionality as needed
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdown = document.getElementById('dropdown');
        dropdown.style.display = 'none';
    }
};