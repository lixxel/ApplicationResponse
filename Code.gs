/*
@author Steph AKA Lixx
@link https://github.com/stephannapolis GitHub.
*/

//POST_URL is the webhook URL. https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks
var POST_URL = "";
var roleID = ""; //find roleID by typing \@Role_Name. Will be in format <@&##################>
var realmName = ""; //for example, "moon-guard"

function onSubmit(e) {
  
  var form = FormApp.getActiveForm();
  var allResponses = form.getResponses();
  var latestResponse = allResponses[allResponses.length - 1];
  var response = latestResponse.getItemResponses();
  var playerName = response[0].getResponse();
  
  var options = {
    "method": "post",
    "headers": {
        "Content-Type": "application/json",
      },
      "payload": JSON.stringify({
      "content": roleID,
      "embeds": [{
        "title": "New Application in Queue!",
        "description": "Name: ["+playerName+"](https://worldofwarcraft.com/en-us/character/" + realmName + "/"+playerName.toLowerCase()+")",
        "url": ""
      }]
    })
  };

  UrlFetchApp.fetch(POST_URL, options);
};
