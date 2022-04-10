let normaldataButton = document.querySelector (selectors '#normal-data');
normaldataButton = addEventListner (type 'click', listener function () {
  //ajax request
 let ajt = new_XMLHttpRequest ();

 //request
ajt.open(metohd:'GET',ulr'Data/Text-data.text' , async true);

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
  document.querySelector (selectors '#normal-data').innerHTML = htmlTemplate;
};
