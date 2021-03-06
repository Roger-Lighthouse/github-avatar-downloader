var request=require("request");
var fs=require('fs');


var GITHUB_USER='Roger-Lighthouse';
var GITHUB_TOKEN='e1f218d5dececc03bc8566f31b07ddf2a14afee1';
var repoOwner=process.argv[2];
var repoName=process.argv[3];


function getRepoContributors(repoOwner, repoName, cb) {
  if(repoName != null && repoOwner != null){
    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    p(requestURL);

    //set up an options object because I required a User-Agent
    var options = {
      url: requestURL,
      headers: {"User-Agent": "Student Project"}
    }
    request.get(options, cb);  // Note 1
  }else{
    console.log("Sorry, No Params, No Deal!!");
  }
}

// Invokes the getRepoContributors function
getRepoContributors(repoOwner, repoName, function (err, result, body) {
  var objectArray=JSON.parse(body);
  for(var i = 0; i < objectArray.length; i++){
    p(objectArray[i].avatar_url);
    downloadImageByURL(objectArray[i].avatar_url, './avatars/'+objectArray[i].login+'.jpg');
  }

});


// Called by getRepoContributors and downloads images into another folder, avatars
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



// This is my mini function to do console.log
function p(item){
  console.log(item);
}

