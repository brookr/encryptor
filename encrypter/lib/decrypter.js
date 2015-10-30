var decrypter = {
  getPassword: function() {
    console.log("getting password:  ");
    this.password = prompt("Enter the password.", "password");
  },
  decryptMessage: function() {
    this.cypher = location.search.substring(1);
    console.log("decrypting your message: " + this.cypher + "with password: " + this.password);
    this.message = CryptoJS.AES.decrypt(this.cypher, this.password).toString();
    console.log("got message: " + this.message);
  },
  showMessage: function() {
    console.log("attempting to show message: " + this.message);
    if (this.message)
      alert(this.message);
    else
      alert("Error: password failed");
  },
  reveal: function(e) {
    decrypter.getPassword();
    decrypter.decryptMessage();
    decrypter.showMessage();
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('decrypt');

  button.addEventListener('click', function(e) {
    decrypter.reveal(e);
  }, false);
},
  false
);
