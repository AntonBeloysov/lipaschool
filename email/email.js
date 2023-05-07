

function send() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "robingud765@gmail.com",
        Password : "BA85E04FE3E74B6A07947AAA46EF204887E7",
        To : 'robingud765@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('number').value,
        Body : document.getElementById('message').value + ' ' + document.getElementById('select').value
    }).then(
        message => alert(message)
      );
}