"use-strict";

var listOfYears = [];


document.addEventListener("DOMContentLoaded", ()=>{

  let url = "https://www.fueleconomy.gov/ws/rest/vehicle/menu/year";
  fetch(url)
  .then(response=>response.text())
  .then(data=>{
      // console.log(data);
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "application/xml");




      var printout = "<b>List</b><br>";
      var howManyYears = xml.getElementsByTagName("value").length;

      for (i = 0; i < howManyYears; i++) {
          printout += xml.getElementsByTagName("value")[i].childNodes[0].nodeValue + "<br>";
          listOfYears.push(xml.getElementsByTagName("value")[i].childNodes[0].nodeValue);
      }


      console.log(listOfYears);
      document.getElementById('output').innerHTML = printout;



      console.log("Hello!");
  })

})

