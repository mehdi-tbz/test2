function showContact() {
    var contact = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        expertise: document.getElementById("expertise").value,
        workExperience: document.getElementById("workExperience").value
    };

    var table = document.getElementById("contacts-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = contact.firstName + " " + contact.lastName;
    cell2.innerHTML = contact.phoneNumber;
    cell3.innerHTML = contact.expertise;
    cell4.innerHTML = contact.workExperience;
}
