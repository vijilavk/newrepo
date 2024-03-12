function toggleForms() {
      const candidateForm = document.getElementById('candidateForm');
      const interviewerForm = document.getElementById('interviewerForm');

      candidateForm.classList.toggle('active-form');
      interviewerForm.classList.toggle('active-form');
    }

    function validatePassword() {
      const password = document.getElementById('candidatePassword').value;
      const confirmPassword = document.getElementById('confirmCandidatePassword').value;
      const passwordError = document.getElementById('passwordError');

      // Check if passwords match
      if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match';
        return false;
      } else {
        passwordError.textContent = '';

        // Check if the password has a minimum of 4 digits
        const hasMinimumDigits = /^\d{4,}$/.test(password);
        if (!hasMinimumDigits) {
          passwordError.textContent = 'Please enter a password with at least 4 digits';
          return false;
        }

        return true;
      }
    }

    function updateFileName() {
      const fileInput = document.getElementById('image');
      const fileLabel = document.getElementById('fileLabel');
      
      if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name;
      } else {
        fileLabel.textContent = 'Choose Image';
      }
    }

    function goBack() {
      window.history.back();
    }