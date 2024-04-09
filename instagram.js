function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sandrokupatadze2009@gmail.com",
        Password : "F4E557281A88868695565BB0E73D0B072E7F",
        To : 'sandrokupatadze2009@gmail.com',
        From : "sandrokupatadze2009@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}