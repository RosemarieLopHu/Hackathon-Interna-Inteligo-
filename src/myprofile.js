redirect.addEventListener('click', () => location.href = './register.html');

const typeProfile = localStorage.getItem('typeProfile')

const showData = (data, result) => {
  const showPerfil = document.getElementById('container-data');
  const arrProfiles = Object.keys(data);
  arrProfiles.forEach(profile => {
    const showProfile = data[profile]
    if (showProfile.key === result) {
      showPerfil.innerHTML =
        `
        <h5 class=" text-center">${showProfile.title}</h5>
          <div class="row" id=${showProfile.key}>
            <div class="col-md-6">
              <div class="image-container">
              <img src=${showProfile.stats} alt="image" class="img-fluid" alt="Responsive image">
              </div>
            </div>
            <div class="col-md-6">
              <div class="image-container">
              <img alt="description" src=${showProfile.image} class="img-fluid" alt="Responsive image">
              </div>
            </div> 
            <div class="col-md-6" >
              <div class="text-container">
              <p><sup>1</sup>&nbspSobre la base de rentabilidades de largo plazo esperadas para las categorías de activo que componen los portafolios de cada perfil.</p>                
              <p><sup>2</sup>&nbspSobre la base de un back test aplicado a los perfiles para los últimos 10 años.</p>    
              </div>            
           </div>
          </div>
        `
    };
  })
}

fetch('./myprofile.json')
  .then(res => res.json())
  .then(data => showData(data, typeProfile))
  .catch(err => console.error(err))
