var request=require("request");
var fs=require('fs');


var GITHUB_USER='Roger-Lighthouse';
var GITHUB_TOKEN='e1f218d5dececc03bc8566f31b07ddf2a14afee1';


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  p(requestURL);

  var options = {
    url: requestURL,
    headers: {"User-Agent": "Student Project"}
  }
  request(options, cb);               // Note 1

}


getRepoContributors("jquery", "jquery", function (err, result, body) {
  //console.log("Errors:", err);
 // console.log("Result:", body);
  var objectArray=JSON.parse(body);
  for(var i = 0; i < objectArray.length; i++){
    p(objectArray[i].avatar_url);
  }

});




function p(item){
  console.log(item);
}

