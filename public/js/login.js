const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function goToStep2() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('userPassword').value.trim();
    const confirm = document.getElementById('confirmPassword').value.trim();
  
    if (!name || !email || !password || !confirm) {
      alert("Preencha todos os campos da primeira etapa!");
      return;
    }
  
    if (password !== confirm) {
      alert("As senhas não coincidem.");
      return;
    }
  

    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userPassword').value = '';
    document.getElementById('confirmPassword').value = '';
  
    document.querySelector('.step-1').style.display = 'none';
    document.querySelector('.step-2').style.display = 'block';
  }
  

