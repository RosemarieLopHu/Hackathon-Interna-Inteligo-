const convertFileB64 = (file) => new Promise((resolve) => {
  fetch(file)
    .then(res => res.blob())
    .then(
      res => {
        var reader = new FileReader();
        reader.readAsDataURL(res);
        reader.onloadend = () => {
          resolve(reader.result)
        }
      }

}
)
})


const sendEmailProfile = (email, fileContent, profile) => new Promise((resolve) => {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
      'message': {
        'from_email': 'inteligo@laboratoria.la',
        'to': [{
          'email': email,
          'type': 'to'
        }],
        'autotext': 'true',
        'subject': '¡Perfil Inteligo',
        "attachments": [
          {
            "name": "profile.pdf",
            "type": "application/pdf",
            "content": fileContent.slice(28)
          }
        ],
        "attachments": [{
          "name": "profile.pdf",
          "type": "application/pdf",
          "content": fileContent.slice(28)
        }],

        'html': `<p>Estimad@,</p>
    
          <p>Gracias por contestar el formulario de preguntas, tu perfil es ${profile}.</p>
          
          <p>Te adjuntamos un archivo pdf con el detalle de tu perfil y el portafolio.</p>
          
          <p>Atentamente Inteligo.</p>`
      }
    }
  }).done(response => {
    resolve(response);
  })
})
