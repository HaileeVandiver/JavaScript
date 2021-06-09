function validateForm() {
    var x = document.forms["ContactForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }