const data = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" }
];

function renderData() {
    const tableContainer = document.querySelector('#tableContainer');

    let tableHTML = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Starting Price</th>
            </tr>
        </thead>
        <tbody>`;
        
    data.forEach(person => {
        tableHTML += `<tr>
            <td>${person.name}</td>
            <td>${person.occupation}</td>
            <td>$${person.price}</td>
        </tr>`;
    });
    tableHTML += `</tbody></table>`;
    tableContainer.innerHTML = tableHTML;
}

document.addEventListener('DOMContentLoaded', renderData);
