//your JS code here. If required.
  function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const checkbox = document.getElementById("terms");
      const submitBtn = document.getElementById("submitBtn");

      // Enable submit only when all fields are filled and checkbox checked
      if (name !== "" && email !== "" && checkbox.checked) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }