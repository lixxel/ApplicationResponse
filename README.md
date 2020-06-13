# Application Response
Sends a POST (In this case, Discord webhook) when a Google Form is submitted.

Our World of Warcraft guild application is a simple Google Form. The first response in our application is the player's in-game name. This posts a webhook into our officer channel and mentions the @recruiter role instantly when anyone applies to the guild, and links to the share link for the form (```"url": ""``` is filled in with that link) AND to their WoW armory page.

This was created in Google Script. https://script.google.com/ When on the edit page for the Google Form, click the three dots in the top right, hit "<> Script Editor", and paste this in.

Fill in the POST_URL https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks

Fill in the roleID. Role ID is found by typing ```\@Role_Name``` in your discord channel. Will be in format ```<@&##################>```

Fill in the guild's realmName. Must have dashes in place of spaces (for example, moon-guard).

Fill in the URL to the form, if you wish to do so.

playerName is response[0] because it's the first question on our application. Change the number and add whatever extra information you'd like for the webhook post.

# Important
**Script will not work unless you add it to your project's triggers. Don't forget this step.**
1. Select Edit -> Current project's triggers
2. Click Add Trigger
3. Choose "onSubmit" function to run. Select event type "On form submit". Leave the rest default, except whichever failure notification settings you'd like.
4. Save.
5. Google should ask for permissions. Give it a yes.
