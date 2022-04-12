let textButton = document.querySelector(selectors:'#text-btn');
textButton.addEventListener (type: 'click', listener: function () {

  //ajax request
 let xhr = new XMLHttpRequest ();

 //request
xhr.open('GET', url:'Data/Text-data.txt' , true);

//send  request
xhr.send();

//process
xhr.onload = () => {
  if (xhr.status === 200){
    let data = xhr.responseText;
    displayTextData(data);
  }
}
});

//display text Data
let displayTextData = (data) => {
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

});
