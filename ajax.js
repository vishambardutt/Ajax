let textButton = document.querySelector('#text-btn').innerHTML = htmlTemplate;
textButton.addEventListener('click',  function () {
  //ajax request
  let xhr = new_XMLHttpRequest();
  //request
  xhr.open( 'GET', 'Data/Text-data.txt',  true);
  //send new_XMLHttpRequest
  xhr.send();
  //process
  xhr.onload = () => {
    if (ajt.status === 200) {
      let data = ajt.responseText;
      displayNormalData(data);
    }
  }
});

//display text Data
let displayNormalData = (data) => {
  let htmlTemplate = '<h3>$ (data)</h3>';
  document.querySelector('#text-card').innerHTML = htmlTemplate;
};


//JSON data College

let jsonButton = document.querySelector( '#json-btn');
jsonButton.addEventListner('click', function () {
  let xhr = new new_XMLHttpRequest();
  xhr.open('GET', 'Data/user-data.json',  true);
  xhr.open();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let udata = JSON.parse(data);
      displayJsonData(udata);
    }
  }

});

let displayJsonData = (udata) => {
  let htmlTemplate = '';
  htmlTemplate = '<ul class="list-group">
  <li class="list-group-item">NAME: ${udata.name} </li>
  <li class="list-group-item">Age: ${udata.age}</li>
  <li class="list-group-item">Adress: ${udata.address}</li>
  <li class="list-group-item">Occupation:  ${udata.occupation}</li>
</ul > ';
document.querySelector('#json-card').innerHTML = htmlTemplate;
};


let apiButton = document.querySelector('#api-btn');
jsonButton.addEventListner( 'click', listener: function () {
  let xhr = new new_XMLHttpRequest();
  xhr.open(metohd: 'GET', url: 'https://jsonplaceholder.typicode.com/users', async: true);
  xhr.open();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let users = JSON.parse();
      displayUsers(users);
    }
  }

});

let displayUsers = (users) => {
  let htmlTemplate = '';
  for (let user of users) {htmlTemplate ='<ul class="list-group mt-1">
      <li class="list-group-item"> ID:${ user.id }</li>
      <li class="list-group-item">NAME:${user.name}</li>
      <li class="list-group-item">EMAIL:${user.email}</li>
      <li class="list-group-item">STREET:${user.street}</li>
      <li class="list-group-item">City:${user.address.city}</li>
      </ul >';
  }
document.querySelector('#api-card').innerHTML = htmlTemplate;
};
