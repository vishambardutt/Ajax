let textButton = document.querySelector(selectors:'#text-btn');
textButton = addEventListener (type: 'click', listener: function () {
  
  //ajax request
 let ajt = new_XMLHttpRequest ();

 //request
ajt.open(metohd:'GET',url:'Data/Text-data.text' , async: true);

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
  document.querySelector (selectors '#normal-btn').innerHTML = htmlTemplate;
};


//JSON data College

let jsonButton = document.querySelector (selectors: '#json-btn');
jsonButton = addEventListner(type 'click', listener function (){
  let xhr = new new_XMLHttpRequest ();
  xhr.open (metohd: 'GET', url: 'Data/user-data.json', async: true);
  xhr.open ();
  xhr.onload = () => {
    if (xhr.status === 200){
      let data = xhr.responseText;
      console.log(data);
    }
  }

})
