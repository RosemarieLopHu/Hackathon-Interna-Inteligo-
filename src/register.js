const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const birthDate = document.getElementById('birth-date');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const registerButton = document.getElementById('btn-register');

registerButton.addEventListener('click', () => {
  let gender = document.querySelector('input[name="gender"]:checked').value;
  const newKey = firebase.database().ref().child('investors/').push().key;
  saveData(newKey, name.value, lastname.value, birthDate.value, mobile.value, email.value, gender)
    .then(() => {
      console.log('Se enviará correo de confirmación de registro');
      name.value = '';
      lastname.value = '';
      birthDate.value = '';
      mobile.value = '';
      email.value = '';
      gender.value = false;
    })
})
