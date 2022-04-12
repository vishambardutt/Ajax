let textButton = document.querySelector (selectors: '#text-btn');
textButton = addEventListener (type: 'click', listener: function () {
  //ajax request
 let ajt = new_XMLHttpRequest ();
 //request
ajt.open(metohd:'GET',url:'Data/Text-data.txt' , async: true);
//send new_XMLHttpRequest
ajt.send();
//process
ajt.onload = () => {
  if (ajt.status ===200){
    let data = ajt.responseText;
    displayNormalData(data);
  }
}
});

//display text Data
let displayNormalData = (data) => {
  let htmlTemplate = '<h3>$ (data)</h3>';
  document.querySelector (selectors: '#text-card').innerHTML = htmlTemplate;
};


//JSON data College

let jsonButton = document.querySelector (selectors: '#json-btn');
jsonButton.addEventListner(type: 'click', listener: function (){
  let xhr = new new_XMLHttpRequest ();
  xhr.open (metohd: 'GET', url: 'Data/user-data.json', async: true);
  xhr.open ();
  xhr.onload = () => {
    if (xhr.status === 200){
      let data = xhr.responseText;
        let ud = JSON.parse (data);
      displayJsonData(ud);
    }
  }

});

let displayJsonData = (ud) => {
  let htmlTemplate = '';
  htmlTemplate = '<ul class="list-group">
                    <li>${ud:name}</li>
                    <li>${ud:age}</li>
                    <li>${ud:address}</li>
                    <li>${ud:accupation}</li>
                  </ul>';
  document.querySelector (selectors: '#json-card').innerHTML = htmlTemplate;
};


let apiButton = document.querySelector (selectors: '#api-btn');
jsonButton.addEventListner(type: 'click', listener: function (){
  let xhr = new new_XMLHttpRequest ();
  xhr.open (metohd: 'GET', url: 'https://jsonplaceholder.typicode.com/users', async: true);
  xhr.open ();
  xhr.onload = () => {
    if (xhr.status === 200){
      let data = xhr.responseText;
      let users = JSON.parse();
      displayUsers(users);
    }
  }

});

let displayUsers = (users) => {
  let htmlTemplate = '';
  for (let user of users){
    htmlTemplate += '<ul class="list-group mt-1">
                      <li class="list-group-item">ID:${user.id}</li>
                      <li class="list-group-item">NAME:${user.name}</li>
                      <li class="list-group-item">EMAIL:${user.email}</li>
                      <li class="list-group-item">STREET:${user.street}</li>
                      <li class="list-group-item">City:${user.address.city}</li>
                      </ul>';
  }
  document.querySelector (selectors: '#api-card').innerHTML = htmlTemplate;
};
