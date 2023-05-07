

function send() {
    Email.send({
        Host : "",
        Username : "",
        Password : "",
        To : '',
        From : document.getElementById('email').value,
        Subject : document.getElementById('number').value,
        Body : document.getElementById('message').value + ' ' + document.getElementById('select').value
    }).then(
        message => alert(message)
      );
}
