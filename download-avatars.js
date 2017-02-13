var request=require("request");
var GITHUB_USER='Roger-Lighthouse';
var GITHUB_TOKEN='e1f218d5dececc03bc8566f31b07ddf2a14afee1';


console.log('Hello World');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  p(requestURL);
  cb('oh', 'shit');
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});




function p(item){
  console.log(item);
}

