function addExpense(){
    const table = document.getElementById('table');
    const row = document.createElement("tr");
    const data = document.createElement("td");

    const name = data.textContent = document.getElementById("name").value;
    const date = data.textContent = document.getElementById("date").value;
    const amount = data.textContent = document.getElementById("amount").value;

    document.getElementById('table').append(data);
    document.getElementById('name-td').append(name);
    document.getElementById('date-td').append(date);
    document.getElementById('amount-td').append(amount);
    

    const btn = document.createElement('button');
    btn.textContent = "Deconste";
    btn.addEventListener('click', () => row.remove());
    row.appendChild(btn);

    document.getElementById('delete-td').appendChild(row);
    
}