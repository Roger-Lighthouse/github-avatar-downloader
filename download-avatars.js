var request=require("request");

console.log('Hello World');

function getRepoContributors(repoOwner, repoName, cb) {
  cb('oh', 'shit');
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

