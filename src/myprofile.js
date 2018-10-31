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
    
    


   
    
   
   
/* 
    var day;
    switch (new Date().getProfile()) {
      case 0:
        viewprofile = "";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    document.getElementById("demo").innerHTML = "Today is " + day;

 */
  })
}

selectProfile();