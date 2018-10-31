redirectToForm.addEventListener('click', () => location.href = './index.html');


const getPerfil = (callback) => {
    const perfilRequest = new XMLHttpRequest();
    perfilRequest.open('GET', `miperfil.json`);
    perfilRequest.onload = callback;
    perfilRequest.onerror = handleError;
    perfilRequest.send();
  }

  const showPerfil=()=>{
    const showPerfil = document.getElementById('container-data');


  }
  

