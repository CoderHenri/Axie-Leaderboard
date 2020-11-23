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

  var TaggedArray = [];
  var ConCatArray = [];

  var url = "https://axieinfinity.com/graphql-server/graphql"

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      
      body: JSON.stringify({
        operationName:"GetAxieBriefList",
        query:"query GetAxieBriefList{ "+
		  "\n part1:axies(from:0,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part2:axies(from:100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part3:axies(from:200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part4:axies(from:300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part5:axies(from:400,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part6:axies(from:500,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part7:axies(from:600,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part8:axies(from:700,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part9:axies(from:800,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part10:axies(from:900,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part11:axies(from:1000,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part12:axies(from:1100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part13:axies(from:1200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part14:axies(from:1300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part15:axies(from:1400,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part16:axies(from:1500,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part17:axies(from:1600,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part18:axies(from:1700,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part19:axies(from:1800,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part20:axies(from:1900,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part21:axies(from:2000,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part22:axies(from:2100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part23:axies(from:2200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part24:axies(from:2300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part25:axies(from:2400,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part26:axies(from:2500,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part27:axies(from:2600,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part28:axies(from:2700,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part29:axies(from:2800,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part30:axies(from:2900,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part31:axies(from:3000,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part32:axies(from:3100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part33:axies(from:3200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part34:axies(from:3300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part35:axies(from:3400,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part36:axies(from:3500,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part37:axies(from:3600,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part38:axies(from:3700,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part39:axies(from:3800,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part40:axies(from:3900,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part41:axies(from:4000,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part42:axies(from:4100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part43:axies(from:4200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part44:axies(from:4300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part45:axies(from:4400,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part46:axies(from:4500,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part47:axies(from:4600,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part48:axies(from:4700,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part49:axies(from:4800,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part50:axies(from:4900,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part51:axies(from:5000,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part52:axies(from:5100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part53:axies(from:5200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part54:axies(from:5300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part55:axies(from:5400,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part56:axies(from:5500,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part57:axies(from:5600,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part58:axies(from:5700,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part59:axies(from:5800,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n part60:axies(from:5900,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part61:axies(from:6000,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part62:axies(from:6100,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part63:axies(from:6200,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
      "\n part64:axies(from:6300,size:100,sort:IdAsc,criteria:{numMystic:[0,1,2,3,4],title:[\"Origin\",\"MEO Corp\",\"MEO Corp II\"]}) {\n total\n results {\n ...AxieBrief\n __typename\n }\n __typename\n }"+
		  "\n}\n\n fragment AxieBrief on Axie {\n owner\n  id\n  class\n  title\n  numMystic\n  \n  __typename\n}\n"})
    })
      
    .then(function(response) { 
      return response.json(); 
    })

    .then(function(data) {
      console.log(data);
      console.log(data.data.part1);
      TaggedArray = data;
    });

  ConCatArray = ConCatArray.concat(TaggedArray.data.part1.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part2.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part3.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part4.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part5.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part6.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part7.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part8.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part9.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part10.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part11.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part12.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part13.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part14.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part15.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part16.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part17.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part18.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part19.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part20.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part21.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part22.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part23.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part24.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part25.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part26.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part27.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part28.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part29.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part30.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part31.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part32.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part33.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part34.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part35.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part36.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part37.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part38.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part39.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part40.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part41.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part42.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part43.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part44.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part45.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part46.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part47.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part48.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part49.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part50.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part51.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part52.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part53.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part54.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part55.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part56.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part57.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part58.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part59.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part60.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part61.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part62.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part63.results);
  ConCatArray = ConCatArray.concat(TaggedArray.data.part64.results);
  
  console.log(ConCatArray);
  Categoriser(ConCatArray);
  
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
        UniqueOwnerArray.push({EthOwner : OwnerList[i].EthOwner, Origins : OwnerList[i].Origins, RareOrigins : OwnerList[i].RareOrigins, Mystics : OwnerList[i].Mystics, RareMystics : OwnerList[i].RareMystics, MEOs : OwnerList[i].MEOs, RareMEOs : OwnerList[i].RareMEOs, MEOIIs : OwnerList[i].MEOIIs, RareMEOIIs : OwnerList[i].RareMEOIIs});
    }
    } else {
    UniqueOwnerArray.push({EthOwner : OwnerList[i].EthOwner, Origins : OwnerList[i].Origins, RareOrigins : OwnerList[i].RareOrigins, Mystics : OwnerList[i].Mystics, RareMystics : OwnerList[i].RareMystics, MEOs : OwnerList[i].MEOs, RareMEOs : OwnerList[i].RareMEOs, MEOIIs : OwnerList[i].MEOIIs, RareMEOIIs : OwnerList[i].RareMEOIIs});
    }
  }

  console.log(UniqueOwnerArray);
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
  ListMaker(Array);
}

function ListMaker(Array) {
  console.log(Array);

      var TotalList = Array;
      var OriginList = [];
      var RareOriginList = [];
      var OriginTotalList = [];

      var MysticList = [];
      var RareMysticList = [];
      var MysticTotalList = [];

      var MEOList = [];
      var RareMEOList = [];
      var MEOTotalList = [];

      var MEOIIList = [];
      var RareMEOIIList = [];
      var MEOIITotalList = [];
  
      //Array Key is called Origins every time because of the chartmaker function !!!
      for(i = 0; i < Array.length; i++) {
          if(Array[i].Origins != 0) {
              OriginList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].Origins});
          }
          if(Array[i].RareOrigins != 0) {
              RareOriginList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].RareOrigins});
          }
          if(Array[i].Origins != 0 || Array[i].RareOrigins != 0) {
            var TotalO = Array[i].Origins + Array[i].RareOrigins;
            OriginTotalList.push({EthOwner : Array[i].EthOwner, Origins : TotalO});
          }
          if(Array[i].Mystics != 0) {
            MysticList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].Mystics});
          }
          if(Array[i].RareMystics != 0) {
            RareMysticList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].RareMystics});
          }
          if(Array[i].Mystics != 0 || Array[i].RareMystics != 0) {
            var TotalM = Array[i].Mystics + Array[i].RareMystics;
            MysticTotalList.push({EthOwner : Array[i].EthOwner, Origins : TotalM});
          }
          if(Array[i].MEOs != 0) {
              MEOList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].MEOs});
          }
          if(Array[i].RareMEOs != 0) {
              RareMEOList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].RareMEOs});
          }
          if(Array[i].MEOs != 0 || Array[i].RareMEOs != 0) {
            var TotalMEO = Array[i].MEOs + Array[i].RareMEOs;
            MEOTotalList.push({EthOwner : Array[i].EthOwner, Origins : TotalMEO});
          }
          if(Array[i].MEOIIs != 0) {
              MEOIIList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].MEOIIs});
          }
          if(Array[i].RareMEOIIs != 0) {
              RareMEOIIList.push({EthOwner : Array[i].EthOwner, Origins : Array[i].RareMEOIIs});
          }
          if(Array[i].MEOIIs != 0 || Array[i].RareMEOIIs != 0) {
            var TotalMEOII = Array[i].MEOIIs + Array[i].RareMEOIIs;
            MEOIITotalList.push({EthOwner : Array[i].EthOwner, Origins : TotalMEOII});
          }
      }
  
      console.log(RareOriginList);
      console.log(MEOList);
      console.log("total");
      console.log(MEOIITotalList);
      console.log(MysticTotalList);
  
      OriginList.sort((a,b) => b.Origins - a.Origins);
      RareOriginList.sort((a,b) => b.Origins - a.Origins);
      OriginTotalList.sort((a,b) => b.Origins - a.Origins);
      MysticList.sort((a,b) => b.Origins - a.Origins);
      RareMysticList.sort((a,b) => b.Origins - a.Origins);
      MysticTotalList.sort((a,b) => b.Origins - a.Origins);
      MEOList.sort((a,b) => b.Origins - a.Origins);
      RareMEOList.sort((a,b) => b.Origins - a.Origins);
      MEOTotalList.sort((a,b) => b.Origins - a.Origins);
      MEOIIList.sort((a,b) => b.Origins - a.Origins);
      RareMEOIIList.sort((a,b) => b.Origins - a.Origins);
      MEOIITotalList.sort((a,b) => b.Origins - a.Origins);
  
      document.getElementById("OriginNormalList").innerHTML = '<ol class="LL">' + OriginList.map(function (genesis) {
          return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("OriginRareList").innerHTML = '<ol class="LL">' + RareOriginList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("OriginAllList").innerHTML = '<ol class="LL">' + OriginTotalList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';
  
      document.getElementById("MysticNormalList").innerHTML = '<ol class="LL">' + MysticList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("MysticRareList").innerHTML = '<ol class="LL">' + RareMysticList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("MysticAllList").innerHTML = '<ol class="LL">' + MysticTotalList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("Meo1NormalList").innerHTML = '<ol class="LL">' + MEOList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("Meo1RareList").innerHTML = '<ol class="LL">' + RareMEOList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("Meo1AllList").innerHTML = '<ol class="LL">' + MEOTotalList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("Meo2NormalList").innerHTML = '<ol class="LL">' + MEOIIList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("Meo2RareList").innerHTML = '<ol class="LL">' + RareMEOIIList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';

      document.getElementById("Meo2AllList").innerHTML = '<ol class="LL">' + MEOIITotalList.map(function (genesis) {
        return '<li>' + String(genesis["Origins"]) + " owned by " + String(genesis["EthOwner"]) + '</li>';
      }).join('') + '</ol>';
  
      ChartMaker(OriginList, "OriginNormalChart");
      ChartMaker(RareOriginList, "OriginRareChart");
      ChartMaker(OriginTotalList, "OriginAllChart");

      ChartMaker(MysticList, "MysticNormalChart");
      ChartMaker(RareMysticList, "MysticRareChart");
      ChartMaker(MysticTotalList, "MysticAllChart");

      ChartMaker(MEOList, "Meo1NormalChart");
      ChartMaker(RareMEOList, "Meo1RareChart");
      ChartMaker(MEOTotalList, "Meo1AllChart");

      ChartMaker(MEOIIList, "Meo2NormalChart");
      ChartMaker(RareMEOIIList, "Meo2RareChart");
      ChartMaker(MEOIITotalList, "Meo2AllChart");
      
  }
  
  function ChartMaker(Array, WhichChart) {
  
    var RestMenge = 0;
    for(i=9; Array.length > i; i++) {
      RestMenge = RestMenge + Array[i].Origins;
    }
  
    var GesamtMenge = 0;
    for(i=0; Array.length > i; i++) {
      GesamtMenge = GesamtMenge + Array[i].Origins;
    }
  
    var ctx = document.getElementById(WhichChart);
  
    var TotalLand = 0;
  
    for(m=0; Array.length > m; m++){
      TotalLand = TotalLand + Array[m].Origins;
    }
  
    console.log(Array);
  
    var LandMenge = [Array[0].Origins, Array[1].Origins, Array[2].Origins, Array[3].Origins, Array[4].Origins, Array[5].Origins, Array[6].Origins, Array[7].Origins, Array[8].Origins, RestMenge];
    var LandBesitzer = [Array[0].EthOwner, Array[1].EthOwner, Array[2].EthOwner, Array[3].EthOwner, Array[4].EthOwner, Array[5].EthOwner, Array[6].EthOwner, Array[7].EthOwner, Array[8].EthOwner, "All other Players"];
  
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: LandBesitzer,
        datasets: [{
            label: 'Axie Land',
            data: LandMenge,
            backgroundColor: [
              'rgba(0,104,55, 0.25)',
              'rgba(165,0,38, 0.25)',
              'rgba(26,152,80, 0.25)',
              'rgba(215,48,39, 0.25)',
              'rgba(102,189,99, 0.25)',
              'rgba(244,109,67, 0.25)',
              'rgba(166,217,106, 0.25)',
              'rgba(253,174,97, 0.25)',
              'rgba(217,239,139, 0.25)',
              'rgba(254,224,139, 0.25)'
            ],
            borderColor: [
              'rgba(0,104,55, 1)',
              'rgba(165,0,38, 1)',
              'rgba(26,152,80, 1)',
              'rgba(215,48,39, 1)',
              'rgba(102,189,99, 1)',
              'rgba(244,109,67, 1)',
              'rgba(166,217,106, 1)',
              'rgba(253,174,97, 1)',
              'rgba(217,239,139, 1)',
              'rgba(254,224,139, 1)'
            ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          position: 'top',
          fontSize: 15,
          fontFamily: 'Arial',
          text: "Total Amount: " + TotalLand
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            afterLabel: function(tooltipItem, data) {
              var dataset = data['datasets'][0];
              var percent = Math.round((dataset['data'][tooltipItem['index']] / GesamtMenge) * 100)
              return '(' + percent + '%)';
            }
          },
        },
        responsive: false,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: '#FFFFFF',
            boxWidth: 15,
            fontSize: 10
          }
        }
      }
    })
    var L = document.getElementById("lds-hourglass");
    L.style.display = "none";

    var Y = document.getElementById("InvisibleTillLoadedText");
    Y.style.display = "none";

    var Z = document.getElementById("InvisibleTillLoaded");
    Z.style.display = "block";
    
  }