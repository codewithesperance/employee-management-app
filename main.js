// Function for Delete confirmation
function confirmDelete() {
    let confirmAction = confirm("Are you sure you want to delete?");
    if (confirmAction) {
        alert("Contact deleted successfully.");
    } else {
        alert("Delete cancelled.");
    }
}

// Add event listeners after page loads
document.addEventListener("DOMContentLoaded", function () {

    // DETAILS BUTTON
    let detailsButtons = document.querySelectorAll(".details-btn");
    detailsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            let name = row.children[1].innerText;
            let email = row.children[2].innerText;
            let phone = row.children[3].innerText;
            let department = row.children[4].innerText;

            alert(
                "Employee Details:\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phone + "\n" +
                "Department: " + department
            );
        });
    });

    // EDIT BUTTON
    let editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            let row = this.closest("tr");
            let name = row.children[1].innerText;

            alert("Edit details for " + name);
        });
    });

});