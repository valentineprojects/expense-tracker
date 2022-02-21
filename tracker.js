function addExpense(){

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('amount').value;
    
    let table = document.getElementById('table');

    let newRow = table.insertRow(-1);
    let newNameCell = newRow.insertCell(0);
    let newDateCell = newRow.insertCell(1);
    let newAmountCell = newRow.insertCell(2);
    let newDeleteCell = newRow.insertCell(3);

    let newNameText = document.createTextNode(name);
    let newDateText = document.createTextNode(date);
    let newAmountText = document.createTextNode(amount);

    newNameCell.append(newNameText);
    newDateCell.append(newDateText);
    newAmountCell.append(newAmountText);

    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.addEventListener('click', function(){
        newRow.remove()
        // newNameCell.remove();
        // newDateCell.remove();
        // newAmountCell.remove();
        // newDeleteCell.remove();
    })
    newDeleteCell.append(btn);

}