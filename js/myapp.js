
let textButton = document.querySelector ('#text-btn');
textButton.addEventListener ('click',  function () {
  //ajax request
 let xhr = new XMLHttpRequest ();
 //request
xhr.open('GET', './Data/Text-data.txt', true);
//send new_XMLHttpRequest
xhr.send();
//process
xhr.onload = () => {
  if (xhr.status ===200){
    let data = xhr.responseText;
     displayTextData(data);
 // console.log(data);
  }
}
});

//display text Data
let displayTextData = (data) => {
  let htmlTemplate = `<h5>${data}</h5>`;
  document.querySelector ( '#text-card').innerHTML = htmlTemplate;
};

//JSON data 
let jsonButton = document.querySelector ( '#json-btn');
jsonButton.addEventListner('click', function (){
  let xhr = new new XMLHttpRequest ();
  xhr.open ('GET', './Data/user-data.json', true);
  xhr.send ();
  xhr.onload = () => {
    if (xhr.status === 200){
      let data = xhr.responseText;
       let udata = JSON.parse (data);
     displayJsonData(udata);
     //console.log(udata);
      
    }
  };

});

let displayJSONData = (udata) => {
  let htmlTemplate = '';
  htmlTemplate = `<ul  class="list-group">
                    <li class="list-group-item">Name ${udata.name}</li>
                    <li class="list-group-item">Age ${udata.age}</li>
                    <li class="list-group-item">Adress ${udata.address}</li>
                    <li class="list-group-item">Accupation ${udata.accupation}</li>
                  </ul> `;

  document.querySelector ('#json-card').innerHTML = htmlTemplate;
};


let apiButton = document.querySelector ( '#api-btn');
apiButton.addEventListner( 'click', function (){
  let xhr = new new XMLHttpRequest ();
  xhr.open ('GET', 'https://jsonplaceholder.typicode.com/users',  true);
  xhr.send ();
  xhr.onload = () => {
    if (xhr.status === 200){
      let data = xhr.responseText;
      let users = JSON.parse();
     // displayUsers(users);
      console.log (users);
    }
  };

});

let displayUsers = (users) => {
  let htmlTemplate = '';
  for (let user of users){
    htmlTemplate = `<ul class="list-group mt-1">
                      <li class="list-group-item">NAME: ${users.name} </li>
                      <li class="list-group-item">Age: ${users.age}</li>
                      <li class="list-group-item">Adress: ${users.address}</li>
                      <li class="list-group-item">Occupation:  ${users.occupation}</li>
                      </ul>`;
  }
  document.querySelector ( '#api-card').innerHTML = htmlTemplate;
};