

let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', './Data/Text-data.txt', true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      displayTextData(data);
    }
  };
});

//display text Data
let displayTextData = (data) => {
  let htmlTemplate = `<p>${data}</p>`;
  document.querySelector('#text-card').innerHTML = htmlTemplate;
};

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function () {
  //ajax request
  let xhr = new XMLHttpRequest();
  //request
  xhr.open('GET', './Data/userdata.json', true);
  //send new_XMLHttpRequest
  xhr.send();
  //process
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let jsonData = JSON.parse(data);
      displayJSONData(jsonData);

    }
  };
});


let displayJSONData = (jsonData) => {
  let htmlTemplate = '';
  htmlTemplate = `<ul  class="list-group">
                    <li class="list-group-item">Name ${jsonData.name}</li>
                    <li class="list-group-item">Age ${jsonData.age}</li>
                    <li class="list-group-item">Adress ${jsonData.address}</li>
                    <li class="list-group-item">Accupation ${jsonData.accupation}</li>
                  </ul> `;

  document.querySelector('#json-card').innerHTML = htmlTemplate;
};

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function () {
  //ajax request
  let xhr = new XMLHttpRequest();
  //request
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  //send new_XMLHttpRequest
  xhr.send();
  //process
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let users = JSON.parse(data);
      displayJuserData(users);
      //console.log(users);

    }
  };
});
let displayJuserData = (users) => {
  let htmlTemplate = '';
  for (let user of users) {
    htmlTemplate = `<ul class="list-group mt-1">
                      <li class="list-group-item">ID: ${user.id} </li>
                      <li class="list-group-item">Name: ${user.name}</li>
                      <li class="list-group-item">User Name: ${user.username}</li>
                      <li class="list-group-item">Email: ${user.email}</li>
                      <li class="list-group-item">Street: ${user.address.street}</li>
                    </ul>`;

  }
  document.querySelector('#api-card').innerHTML = htmlTemplate;
};

