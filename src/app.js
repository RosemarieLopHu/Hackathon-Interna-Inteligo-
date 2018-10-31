const redirectToForm = document.getElementById('redirect-to-form');
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const question5 = document.getElementById('question-5');
const question6 = document.getElementById('question-6');
const question7 = document.getElementById('question-7');
const question8 = document.getElementById('question-8');
const emailImput = document.getElementById('emailImput');
const viewProfile = document.getElementById('view-profile');
const alertEmail = document.getElementById('alertEmail');
const closeAlert = document.getElementsByClassName('close')[0];
const btnNext = document.getElementsByClassName('btnNext')

let total1 = 0;
let total2 = 0;

redirectToForm.addEventListener('click', () => location.href = './formprofile.html');

question1.addEventListener('change', (e) => {
  total1 += parseInt(e.target.value);
  btnNext[0].removeAttribute('disabled');
})

question2.addEventListener('change', (e) => {
  total1 += parseInt(e.target.value);
  btnNext[1].removeAttribute('disabled');
})

question3.addEventListener('change', (e) => {
  total1 += parseInt(e.target.value);
  btnNext[2].removeAttribute('disabled');
})

question4.addEventListener('change', (e) => {
  total1 += parseInt(e.target.value);
  btnNext[3].removeAttribute('disabled');
})

question5.addEventListener('change', (e) => {
  total2 += parseInt(e.target.value);
  btnNext[4].removeAttribute('disabled');
})

question6.addEventListener('change', (e) => {
  total2 += parseInt(e.target.value);
  btnNext[5].removeAttribute('disabled');
});

question7.addEventListener('change', (e) => {
  total2 += parseInt(e.target.value);
  btnNext[6].removeAttribute('disabled');
});

question8.addEventListener('change', (e) => {
  total2 += parseInt(e.target.value);
  btnNext[7].removeAttribute('disabled');
});


viewProfile.addEventListener('click', () => {
  const profile = profileSelected(total1, total2);
  if (!validationEmail(emailImput.value)) {
    alertEmail.innerHTML = 'Ingrese un email válido'
  }
  else {
    convertFileB64('../assets/doc/perfilInteligo.pdf')
      .then(result => {
        sendEmailProfile(emailImput.value, result, profile)
          .then(result => {
            localStorage.setItem('typeProfile', profile)
            location.href = './myprofile.html'
          })
      })
  }
});

closeAlert.addEventListener('click', (e) => {
  const profile = profileSelected(total1, total2);
  localStorage.setItem('typeProfile', profile)
  location.href = './myprofile.html'

})