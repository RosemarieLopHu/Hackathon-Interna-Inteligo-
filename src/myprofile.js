redirect.addEventListener('click', () => location.href = './register.html');

const handleError = () => {
  alert('Se ha presentado un error en la conexión con la data');
}

const typeProfile = localStorage.getItem('typeProfile')

// const getPerfil = (callback) => {
//   const perfilRequest = new XMLHttpRequest();
//   perfilRequest.open('GET', `myprofile.json`);
//   perfilRequest.onload = callback;
//   perfilRequest.onerror = handleError;
//   perfilRequest.send();
// }

const showData = (data, result) => {
  const showPerfil = document.getElementById('container-data');
  // showPerfil.innerHTML = '';
  const arrProfiles = Object.keys(data);
  arrProfiles.forEach(profile => {
    // console.log(showData);
    const showProfile = data[profile]
    // const profile = ;
    if (showProfile.key === result) {
      showPerfil.innerHTML =
        `
        <h5 class=" text-center">${showProfile.title}</h5>
          <div class="row" id=${showProfile.key}>
            <div class="col-md-6">
              <img src=${showProfile.stats} alt="image">
              <img src=${showProfile.description} alt="image">
            </div>
            <div class="col-md-6"><img alt="description" src=${showProfile.image}></div> 
          </div>
      `
    }
  })
}

fetch('./myprofile.json')
  .then(res => res.json())
  .then(data => showData(data, typeProfile))
  .catch(err => console.error(err))

// const selectProfile = () => {
//   getPerfil(() => {
//     const profileView = JSON.parse(event.currentTarget.responseText);    
//     const agresivo = document.getElementById('agresivo');
//     const moderado = document.getElementById('moderado');
//     const defensivo= document.getElementById('defensivo');
//     const conservador= document.getElementById('conservador');
//     const altaconservador = document.getElementById('altaconservador')

//     agresivo.addEventListener('click', (e) => {
//       e.preventDefault();        
//       const filterProfile = profileView.filter((profile) => {
//         return profile.key === 'agresivo';
//       })
//       showData(filterProfile);
//     });

//     moderado.addEventListener('click', (e) => {
//       e.preventDefault();        
//       const filterProfile = profileView.filter((profile) => {
//         return profile.key === 'moderado';
//       })
//       showData(filterProfile);
//     });

//     defensivo.addEventListener('click', (e) => {
//       e.preventDefault();        
//       const filterProfile = profileView.filter((profile) => {
//         return profile.key === 'defensivo';
//       })
//       showData(filterProfile);
//     });

//     conservador.addEventListener('click', (e) => {
//       e.preventDefault();        
//       const filterProfile = profileView.filter((profile) => {
//         return profile.key === 'conservador';
//       })
//       showData(filterProfile);
//     });

//     altaconservador.addEventListener('click', (e) => {
//       e.preventDefault();        
//       const filterProfile = profileView.filter((profile) => {
//         return profile.key === 'altaconservador';
//       })
//       showData(filterProfile);
//     });
//   })
// }

// selectProfile();
