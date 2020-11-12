var NameArray = [];

async function ReadTextFile() {
  NameArray = await AsyncTextReader();
  GetAxieData();
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

function GetAxieData() {
  var url = "https://axieinfinity.com/graphql-server/graphql";

  //query for Origin, Mystic, Meo 1 & 2 > bei Origin ein extra if um via "numMystic" Mystics rauszufiltern
  //{"operationName":"GetAxieBriefList","variables":{"from":0,"size":100,"sort":"IdAsc","auctionType":"All","owner":null,"criteria":{"region":null,"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":[0,1,2,3,4],"pureness":null,"title":["Origin","MEO Corp","MEO Corp II"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},"query":"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n owner\n  id\n  class\n  title\n  numMystic\n  \n  __typename\n}\n"}

  
}