document.addEventListener("DOMContentLoaded", function () {
    const cars = [
        {
            image: "car1.jpg",
            marca: "Ford",
            modelo: "Mustang",
            ano: 2022,
            cor: "Red",
            hp: 450,
            tipo_motor: "V8",
            transmissao: "Manual",
            combustivel: "Petrol",
            preco_min: 50,
            preco_max: 80
        },
        {
            image: "car2.jpg",
            marca: "Tesla",
            modelo: "Model S",
            ano: 2021,
            cor: "White",
            hp: 670,
            tipo_motor: "Electric",
            transmissao: "Automatic",
            combustivel: "Electric",
            preco_min: 80,
            preco_max: 120
        }
        // Add more car objects as needed
    ];

    const stockSection = document.getElementById("stock-section");
    const stockTableBody = stockSection.querySelector("tbody");

    cars.forEach(car => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${car.image}" alt="Car Image"></td>
            <td>${car.marca}</td>
            <td>${car.modelo}</td>
            <td>${car.ano}</td>
            <td>${car.cor}</td>
            <td>${car.hp} HP</td>
            <td>${car.tipo_motor}</td>
            <td>${car.transmissao}</td>
            <td>${car.combustivel}</td>
            <td>${car.preco_min}k - ${car.preco_max}k €</td>
            <td>
                <i class='bx bx-edit edit-product' title="Edit"></i>
                <i class='bx bx-trash delete-product' title="Delete"></i>
            </td>
        `;
        stockTableBody.appendChild(row);
    });

    // Event listeners for the icons
    document.querySelector('.bx-show').addEventListener('click', function() {
        console.log('See all clicked');
    });

    document.querySelector('.bx-car').addEventListener('click', function() {
        console.log('Add Product clicked');
    });

    stockTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-product')) {
            console.log('Edit clicked for', event.target.closest('tr').querySelector('td:nth-child(2)').innerText);
        } else if (event.target.classList.contains('delete-product')) {
            console.log('Delete clicked for', event.target.closest('tr').querySelector('td:nth-child(2)').innerText);
        }
    });
});
