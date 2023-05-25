// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission handling
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const successMessage = document.querySelector('.success-message');
  
    if (validateForm(nameInput, emailInput, messageInput)) {
      showSuccessMessage(successMessage);
      resetForm(nameInput, emailInput, messageInput);
    }
  });
  
  // Form validation
  function validateForm(nameInput, emailInput, messageInput) {
    let isValid = true;
  
    if (!nameInput.value.trim()) {
      isValid = false;
      showError(nameInput, 'Please enter your name.');
    } else {
      removeError(nameInput);
    }
  
    if (!emailInput.value.trim()) {
      isValid = false;
      showError(emailInput, 'Please enter your email.');
    } else if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      showError(emailInput, 'Please enter a valid email address.');
    } else {
      removeError(emailInput);
    }
  
    if (!messageInput.value.trim()) {
      isValid = false;
      showError(messageInput, 'Please enter your message.');
    } else {
      removeError(messageInput);
    }
  
    return isValid;
  }
  
  // Show error message for input field
  function showError(inputElement, errorMessage) {
    const formControl = inputElement.parentElement;
    const errorElement = formControl.querySelector('.error-message');
    errorElement.innerText = errorMessage;
    formControl.classList.add('error');
  }
  
  // Remove error message for input field
  function removeError(inputElement) {
    const formControl = inputElement.parentElement;
    formControl.classList.remove('error');
  }
  
  // Check if email is valid using regular expression
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Show success message after form submission
  function showSuccessMessage(successMessage) {
    successMessage.style.display = 'block';
  }
  
  // Reset form after successful submission
  function resetForm(nameInput, emailInput, messageInput) {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
  