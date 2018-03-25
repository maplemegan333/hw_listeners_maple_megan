var myForm = document.getElementById('myform');

myForm.addEventListener('submit', function () {
    event.preventDefault();

    var firstNameField = document.getElementById('firstname');
    console.log('The firstName is: ' + firstNameField.value);

    var lastNameField = document.getElementById('lastname');
    console.log('The lastName is: ' + lastNameField.value);

    var emailField = document.getElementById('email');
    console.log('The email is: ' + emailField.value);

    var messageField = document.getElementById('message');
    console.log('The message is: ' + messageField.value);
});
