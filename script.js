// code for section-2 for scroll button
const rightBtn = document.querySelector('#right-button');
const leftBtn = document.querySelector('#left-button');
rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft += 300;
  event.preventDefault();
});
leftBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft -= 300;
  event.preventDefault();
});
///////////////////////////////////////////////////////
//Email sender 
function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("comment").value;

   Email.send({
    Host: "smtp.elasticemail.com",
    Username: "add your mail",
    Password: "use password",
    To:'add your mail',
    From: 'add your mail',
    Subject: "Query From user " +name,
    Body: "Hi,"+name + "&nbsp;"+" Thanks for joining ahkamboh 😊"+"<br>"+" Message:&nbsp;"+message+"<br>"+"Message from:&nbsp;"+email
  }).then(
     alert("Thanks "+name+" For joining ah_Kamboh 😊. We will send you responsive email Soon "));
}
/////////////////////////////////////