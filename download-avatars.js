var request=require("request");
var fs=require('fs');


var GITHUB_USER='Roger-Lighthouse';
var GITHUB_TOKEN='e1f218d5dececc03bc8566f31b07ddf2a14afee1';
var repoOwner=process.argv[2];
var repoName=process.argv[3];


function getRepoContributors(repoOwner, repoName, cb) {
  if(repoName!=null && repoOwner!=null){
    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    p(requestURL);

    var options = {
      url: requestURL,
      headers: {"User-Agent": "Student Project"}
    }
    request.get(options, cb);  // Note 1
  }else{
    console.log("Fuck You, No Params");
  }
}


getRepoContributors(repoOwner, repoName, function (err, result, body) {
  //console.log("Errors:", err);
 // console.log("Result:", body);
  var objectArray=JSON.parse(body);
  for(var i = 0; i < objectArray.length; i++){
    p(objectArray[i].avatar_url);
    downloadImageByURL(objectArray[i].avatar_url, './avatars/'+objectArray[i].login+'.jpg');
  }

});

function downloadImageByURL(url, path) {
  request.get(url)               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err  ;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(path));               // Note 4
}




function p(item){
  console.log(item);
}

