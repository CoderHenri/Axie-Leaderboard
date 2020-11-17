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

async function GetAxieData() {
  var url = "https://axieinfinity.com/graphql-server/graphql";

  //query for Origin, Mystic, Meo 1 & 2 > bei Origin ein extra if um via "numMystic" Mystics rauszufiltern
  //{"operationName":"GetAxieBriefList","variables":{"from":0,"size":100,"sort":"IdAsc","auctionType":"All","owner":null,"criteria":{"region":null,"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":[0,1,2,3,4],"pureness":null,"title":["Origin","MEO Corp","MEO Corp II"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
  //"query":"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n owner\n  id\n  class\n  title\n  numMystic\n  \n  __typename\n}\n"}

  var NumberStart = 0;
  var NumberEnd = 100;

  var TempArray = [];
  var TaggedArray = [];

  var url = "https://axieinfinity.com/graphql-server/graphql"

  while(NumberStart < 6390){
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      
      body: JSON.stringify({
        operationName:"GetAxieBriefList",
        "variables":{
          "from":NumberStart,
          "size":NumberEnd,
          "sort":"IdAsc",
          "auctionType":"All",
          "owner":null,"criteria":{
            "region":null,
            "parts":null,
            "bodyShapes":null,
            "classes":null,
            "stages":null,
            "numMystic":[0,1,2,3,4],
            "pureness":null,
            "title":["Origin","MEO Corp","MEO Corp II"],
            "breedable":null,
            "breedCount":null,
            "hp":[],"skill":[],"speed":[],"morale":[]}
          },
          query:"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n owner\n  id\n  class\n  title\n  numMystic\n  \n  __typename\n}\n"})
    })
      
    .then(function(response) { 
      return response.json(); 
    })

    .then(function(data) {
      TempArray = data.data.axies.results;
      TaggedArray = TaggedArray.concat(TempArray);
      NumberStart = NumberEnd;
      NumberEnd = NumberEnd + 100;
    });
  }
  if(NumberEnd > 6390) {
    Categoriser(TaggedArray);
  }
}

function Categoriser(Array) {

  Array.sort((a,b) => b.owner - a.owner);

  var OwnerList = [];
  var UniqueOwnerArray = [];

  var RareClass = 0;

  var RareClassOrigin = 0;
  var Origin = 0;
  var RareClassMystic = 0;
  var Mystic = 0;
  var RareClassMeo = 0;
  var Meo = 0;
  var RareClassMeoII = 0;
  var MeoII = 0;



  for(i = 0; i < Array.length; i++) {
      Origin = 0;
      Mystic = 0;
      Meo = 0;
      MeoII = 0;
      RareClassOrigin = 0;
      RareClassMystic = 0;
      RareClassMeo = 0;
      RareClassMeoII = 0;
      if(Array[i].title == "Origin" && Array[i].numMystic == 0) {
          Origin = 1;
      } else if(Array[i].title == "Origin" && Array[i].numMystic > 0) {
          Mystic = 1;
      } else if (Array[i].title == "MEO Corp") {
          Meo = 1;
      } else if (Array[i].title == "MEO Corp II") {
          MeoII = 1;
      }

      if(Array[i].class == "Reptile" || Array[i].class == "Bug" || Array[i].class == "Bird") {
      RareClass = 1;
      } else {
      RareClass = 0;
      }

      if(RareClass == 1 && Origin == 1) {
          RareClassOrigin = 1;
          Origin = 0;
      } else if(RareClass == 1 && Mystic == 1) {
          RareClassMystic = 1;
          Mystic = 0;
      } else if(RareClass == 1 && Meo == 1) {
          RareClassMeo = 1;
          Meo = 0;
      } else if(RareClass == 1 && MeoII == 1) {
          RareClassMeoII = 1;
          MeoII = 0;
      }
      OwnerList.push({EthOwner : Array[i].owner, Origins : Origin, RareOrigins : RareClassOrigin, Mystics : Mystic, RareMystics : RareClassMystic, MEOs : Meo, RareMEOs : RareClassMeo, MEOIIs : MeoII, RareMEOIIs : RareClassMeoII});
  }
  
  for(i = 0; i < OwnerList.length; i++) {
    if(i > 0) {
    if(OwnerList[i].EthOwner == UniqueOwnerArray[UniqueOwnerArray.length-1].EthOwner) {
        UniqueOwnerArray[UniqueOwnerArray.length-1].Origins = UniqueOwnerArray[UniqueOwnerArray.length-1].Origins + OwnerList[i].Origins;
        UniqueOwnerArray[UniqueOwnerArray.length-1].RareOrigins = UniqueOwnerArray[UniqueOwnerArray.length-1].RareOrigins + OwnerList[i].RareOrigins;
        UniqueOwnerArray[UniqueOwnerArray.length-1].Mystics = UniqueOwnerArray[UniqueOwnerArray.length-1].Mystics + OwnerList[i].Mystics;
        UniqueOwnerArray[UniqueOwnerArray.length-1].RareMystics = UniqueOwnerArray[UniqueOwnerArray.length-1].RareMystics + OwnerList[i].RareMystics;
        UniqueOwnerArray[UniqueOwnerArray.length-1].MEOs = UniqueOwnerArray[UniqueOwnerArray.length-1].MEOs + OwnerList[i].MEOs;
        UniqueOwnerArray[UniqueOwnerArray.length-1].RareMEOs = UniqueOwnerArray[UniqueOwnerArray.length-1].RareMEOs + OwnerList[i].RareMEOs;
        UniqueOwnerArray[UniqueOwnerArray.length-1].MEOIIs = UniqueOwnerArray[UniqueOwnerArray.length-1].MEOIIs + OwnerList[i].MEOIIs;
        UniqueOwnerArray[UniqueOwnerArray.length-1].RareMEOIIs = UniqueOwnerArray[UniqueOwnerArray.length-1].RareMEOIIs + OwnerList[i].RareMEOIIs;
    } else {
        UniqueOwnerArray.push({EthOwner : OwnerList[i].EthOwner, Origins : OwnerList[i].Origins, RareOrigins : OwnerList[i].RareOrigins, Mystics : OwnerList[i].Mystics, RareMystics : OwnerList[i].RareMystics,  MEOs : OwnerList[i].MEOs, RareMEOs : OwnerList[i].RareMEOs, MEOIIs : OwnerList[i].MEOIIs, RareMEOIIs : OwnerList[i].RareMEOIIs});
    }
    } else {
    UniqueOwnerArray.push({EthOwner : OwnerList[i].EthOwner, Origins : OwnerList[i].Origins, RareOrigins : OwnerList[i].RareOrigins, Mystics : OwnerList[i].Mystics, RareMystics : OwnerList[i].RareMystics,  MEOs : OwnerList[i].MEOs, RareMEOs : OwnerList[i].RareMEOs, MEOIIs : OwnerList[i].MEOIIs, RareMEOIIs : OwnerList[i].RareMEOIIs});
    }
  }
  ProfileNamer(UniqueOwnerArray);
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ProfileNamer(Array) {
  
  var url = "https://axieinfinity.com/graphql-server/graphql"
      
      for(z=0; Array.length > z; z++) {
      var ethAddy = Array[z].EthOwner;
      var FetchChecker = "NEIN";
      FetchChecker = "NEIN";
      
      for(n=0; NameArray.length > n; n++) {
          if(NameArray[n].Eth == Array[z].EthOwner) {
          Array[z].EthOwner = NameArray[n].Besitzer;
          FetchChecker = "JA";
          break;
          }
      }
      
      if(FetchChecker == "NEIN") {

        await timeout(250);

          await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          
          body: JSON.stringify({
              operationName:"GetProfileNameByEthAddress",
              variables:{
              ethereumAddress:ethAddy
              },
              query:"query GetProfileNameByEthAddress($ethereumAddress: String!) {\n  publicProfileWithEthereumAddress(ethereumAddress: $ethereumAddress) {\n    name\n    __typename\n  }\n}\n"})
          })
          
          .then(function(response) { 
          return response.json(); 
          })
      
          .then(function(data) {
          var realName = "";
          try {
              realName = data.data.publicProfileWithEthereumAddress.name;
          }
          catch {
              realName = "No User Name";
          }
          Array[z].EthOwner = realName;
          });
      }
      
      }
  console.log(Array);
  //ListMaker(Array);
}