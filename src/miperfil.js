

const getProjects = (callback) => {
    const perfilRequest = new XMLHttpRequest();
    perfilRequest.open('GET', `miperfil.json`);
    perfilRequest.onload = callback;
    perfilRequest.onerror = handleError;
    perfilRequest.send();
  }
  