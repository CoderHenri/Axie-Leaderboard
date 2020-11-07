var NameArray = [];

async function ReadTextFile() {
  NameArray = await AsyncTextReader();
}

function AsyncTextReader() {
  return new Promise(function (resolve, reject) {
      var objXMLhttp = new XMLHttpRequest()
      objXMLhttp.open("GET", './Textfiles/Profile_Loom_Eth_Addresses.txt', true);
      objXMLhttp.send();
      objXMLhttp.onreadystatechange = function(){
      if (objXMLhttp.readyState == 4){
        if(objXMLhttp.status == 200) {
          var TestParse = objXMLhttp.responseText;
          TestParse = JSON.parse(TestParse);
          return resolve(TestParse);
        } else {
          return resolve("error");
        }
      }
    }
  });

}

function ScrollDownTOP(Orientierung) {
    var ScrollBut = "ScrollButtonBOTTOM" + Orientierung;
    var elmnt = document.getElementById(ScrollBut);
    elmnt.scrollIntoView({behavior: "smooth"}); 
}

function ScrollDownBOTTOM(Orientierung) {
    var ScrollBut = "ScrollButtonTOP" + Orientierung;
    var elmnt = document.getElementById(ScrollBut);
    elmnt.scrollIntoView({behavior: "smooth"}); 
}

