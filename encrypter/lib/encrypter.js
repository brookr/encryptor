var encrypter = {
  setMessage: function() {
    this.message = document.getElementById('encrypter').value;
    return this.message;
  },

  getPassword: function() {
    console.log("getting password: ");
    this.password = prompt("Enter your password.", "password");
  },

  setUrl: function() {
    console.log("Setting URL");
    var URL = "http://localhost:4000/encryptor/decrypt.html?"
    URL += encrypter.encrypt().toString();
    return URL;
  },

  replaceMessageWithUrl: function () {
    console.log("Replacing message with new URL");
    document.getElementById("message").value = "Your encrypted message will be available to anyone with the pass phrase at:\n\n" + this.setUrl();
  },

  encrypt: function() {
    console.log("Encrypting");
    cypher = CryptoJS.AES.encrypt(this.message, this.password)
    console.log("Verified: " +
       CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
    return cypher
  },

  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('encrypter');

  button.addEventListener('click', function(e) {
      encrypter.protect(e)
    }, false);
},
  false
);
