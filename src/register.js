const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const birthDate = document.getElementById('birth-date');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const registerButton = document.getElementById('btn-register');

registerButton.addEventListener('click', () => {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  console.log(gender);
  
  const newKey = firebase.database().ref().child('investors/').push().key;
  saveData(newKey, name.value, lastname.value, birthDate.value, mobile.value, email.value, gender)
    .then(() => {
      convertFileB64('../assets/doc/CONTRATO 1.pdf')
        .then(result => {
          const presentation = gender === 'M'
            ? `<p>Estimado ${lastname.value.split(" ")[0]}</p>`
            : `<p>Estimada ${lastname.value.split(" ")[0]}</p>`

          const content = `<p>Gracias por completar el formulario de registro.</p>
            <p>Te adjuntamos un archivo pdf con el contrato.</p>`
          sendEmailProfile(email.value, result, presentation + content)
            .then(reponse => {
              name.value = '';
              lastname.value = '';
              birthDate.value = '';
              mobile.value = '';
              email.value = '';
              gender.value = false;
            })
        })

    })


})
