redirect.addEventListener('click', () => location.href = './register.html');

const getPerfil = (callback) => {
  const perfilRequest = new XMLHttpRequest();
  perfilRequest.open('GET', `miperfil.json`);
  perfilRequest.onload = callback;
  perfilRequest.onerror = handleError;
  perfilRequest.send();
}


const showData = (data) => {
  const showPerfil = document.getElementById('container-data');
  showPerfil.innerHTML = '';
  Object.keys(data).forEach((id) => {
    const profile = data[id];
    showPerfil.innerHTML +=
      `
      <div class= "col 12" id=${id}>
        <div class="col 12">${profile.title}</div>
        <div class="col 12"><img with="400px" src=${profile.image} alt="image">>/div>
        <div class="col 12">${profile.description}</div>    
      `
  })
}
const selectProject = () => {
  getPerfil(()=> {
    console.log('hola');
    

  })
}
