const config = {
  apiKey: "AIzaSyAYma8aw0jrwNSy09sA0ccXiT_9aMy5Wzc",
  authDomain: "hackathon-inteligo.firebaseapp.com",
  databaseURL: "https://hackathon-inteligo.firebaseio.com",
  projectId: "hackathon-inteligo",
  storageBucket: "hackathon-inteligo.appspot.com",
  messagingSenderId: "252528642732"
};

firebase.initializeApp(config);

const saveData = (id, name, lastname, birthDate, mobile, email) => {
  return firebase.database().ref('investors/' + id)
    .set({
      username: name,
      userlastname: lastname,
      date: birthDate,
      phone: mobile,
      email: email,
      id: id
    });
}