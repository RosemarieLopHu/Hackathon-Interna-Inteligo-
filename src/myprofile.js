redirect.addEventListener('click', () => location.href = './register.html');

const handleError = () => {
  alert('Se ha presentado un error en la conexión con la data');
}

const getPerfil = (callback) => {
  const perfilRequest = new XMLHttpRequest();
  perfilRequest.open('GET', `myprofile.json`);
  perfilRequest.onload = callback;
  perfilRequest.onerror = handleError;
  perfilRequest.send();
}


const showData = (data) => {
  const showPerfil = document.getElementById('container-data');
  showPerfil.innerHTML = '';
  Object.keys(data).forEach((id) => {
    console.log(showData);
    
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

const selectProfile = () => {
  getPerfil(() => {
    const profileView = JSON.parse(event.currentTarget.responseText);    
    const agresivo = document.getElementById('agresivo');
    const moderado = document.getElementById('moderado');
    const defensivo= document.getElementById('defensivo');
    const conservador= document.getElementById('conservador');
    const altaconservador = document.getElementById('altaconservador');
  
    agresivo.addEventListener('click', (e) => {
      e.preventDefault();        
      const filterProfile = profileView.filter((profile) => {
        return profile.key === 'agresivo';
      })
      showData(filterProfile);
    });

    moderado.addEventListener('click', (e) => {
      e.preventDefault();        
      const filterProfile = profileView.filter((profile) => {
        return profile.key === 'moderado';
      })
      showData(filterProfile);
    });

    defensivo.addEventListener('click', (e) => {
      e.preventDefault();        
      const filterProfile = profileView.filter((profile) => {
        return profile.key === 'defensivo';
      })
      showData(filterProfile);
    });

    conservador.addEventListener('click', (e) => {
      e.preventDefault();        
      const filterProfile = profileView.filter((profile) => {
        return profile.key === 'conservador';
      })
      showData(filterProfile);
    });

    altaconservador.addEventListener('click', (e) => {
      e.preventDefault();        
      const filterProfile = profileView.filter((profile) => {
        return profile.key === 'altaconservador';
      })
      showData(filterProfile);
    });
  })
}

selectProfile();