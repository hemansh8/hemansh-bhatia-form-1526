document.querySelector('form button').addEventListener('click', function (e) {
    let outputObj = {};
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    if (!name.value || !email.value || !email.checkValidity() || !message.value) {
        e.preventDefault();
        if (!name.value) {
            outputObj['fn'] = "Full name is missing";
        }
        if (!email.value) {
            outputObj['em'] = "Email is missing";
        } else if (!email.checkValidity()) {
            outputObj['em'] = "Email is invalid";
        }
        if (!message.value) {
            outputObj['msg'] = "Message is missing";
        }
        console.log('Errors ');
        console.log(outputObj);
    }
});

document.querySelector('form').addEventListener('submit', function () {
    let outputObj = {};
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    outputObj['fullname'] = name.value;
    outputObj['email'] = email.value;
    outputObj['message'] = message.value;
    console.log('Collected Data');
    console.log(outputObj);
    name.value = "";
    email.value = "";
    message.value = "";
});
