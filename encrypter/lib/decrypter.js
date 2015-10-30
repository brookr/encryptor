var decrypter = {
  getPassword: function() {
    console.log("getting password:  ");
    this.password = window.prompt("Password?");
  },
  decryptMessage: function() {
    console.log("decrypting your message: " + location.search.substring(1));
    var cypher = location.search.substring(1).replace(/\s/g, "") ;
    this.message = CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8);
  },
  showMessage: function() {
    console.log("attempting to show message: ");
    console.log("before decrpyt:  " + this.message);
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
