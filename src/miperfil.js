const showPerfil = document.getElementById('container-data');

const getProjects = (callback) => {
    const perfilRequest = new XMLHttpRequest();
    perfilRequest.open('GET', `miperfil.json`);
    perfilRequest.onload = callback;
    perfilRequest.onerror = handleError;
    perfilRequest.send();
  }
  
  const showData = (data) => {
    showPerfil.innerHTML = '';
    Object.keys(data).forEach((id) => {
      const project = data[id];
      showProject.innerHTML += `
      <div class="col s12 project" id=${id}>
        <div class="col s12 title-project center">
          ${project.title}
        </div>
        <div class="col s12 img-project center-align">
          <img width="330px" src=${project.image} alt="imagen perfiles">
        </div>
        <div class="col s12 description">
          ${project.description}
        </div>
       
      </div> 
      `  
    })
  }
  console.log(showdata);
  