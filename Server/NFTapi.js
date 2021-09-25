//install npm install request

UserId = '0x38d920102cbf2b37c57792859d894bc3d5522dd2'

var request = require('request');
var options = {
  
  'method': 'GET',
  'url': 'https://api.opensea.io/api/v1/assets?owner='+UserId+'&order_direction=desc&offset=0&limit=50',
  'headers': {
    'Cookie': '__cf_bm=eaAs5sUd5uNn_4YTsxSyzi1rSuM54pnCL1TDeRmP9dc-1632530585-0-AYNkhhXDxjotBsdfPG5V+ucLYSnWnxozOpFxmwkISQ17BVRuYKvvhhuwv8uG4DSGhG+9nX2t3zFwpFxIchCH4TM='
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);

  parsedBody = JSON.parse(response.body);

  for (let i = 0; i < parsedBody.assets.length; i++) {

    currAsset = parsedBody.assets[i];
    
    if (currAsset.name) {
      console.log('Asset[',i,'] Name:', currAsset.name);
      console.log('           ImageUrl:', currAsset.image_url+'=s0');
      console.log('           OwnerUserName:', currAsset.owner.user.username); 

      if (currAsset.creator && currAsset.creator.user.username ) {
        console.log('           CreatorUserName:', currAsset.creator.user.username);
      } else {
        console.log('           CreatorUserName: unknown');
      }
    }
    
   

  }
  
});