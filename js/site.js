function displayMessage() {
    // let message = document.getElementById("message").value;
    let inputBox = document.getElementById("message");

    let message = inputBox.value;

    Swal.fire(
        {
            backdrop: false,
            title: 'App Name',
            text: message
        }
    );
}