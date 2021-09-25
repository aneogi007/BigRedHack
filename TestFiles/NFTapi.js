//install npm install request

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/',
  'headers': {
    'Cookie': '__cf_bm=eaAs5sUd5uNn_4YTsxSyzi1rSuM54pnCL1TDeRmP9dc-1632530585-0-AYNkhhXDxjotBsdfPG5V+ucLYSnWnxozOpFxmwkISQ17BVRuYKvvhhuwv8uG4DSGhG+9nX2t3zFwpFxIchCH4TM='
  }
};

var image_url = 'none';

request(options, function (error, response) {
  if (error) throw new Error(error);

  parsedBody = JSON.parse(response.body);
  image_url = parsedBody.image_url; 
  
  console.log("this is the asset image url:", image_url);
});

 

