# Application Response
Sends a POST (In this case, Discord webhook) when a Google Form is submitted.

Our World of Warcraft guild application is a simple Google Form. The first response in our application is the player's in-game name. This posts a webhook into our officer channel and mentions the @recruiter role instantly when anyone applies to the guild, and links to the share link for the form (```"url": ""``` is filled in with that link) AND to their WoW armory page.

This was created in Google Script. https://script.google.com/ When on the edit page for the Google Form, click the three dots in the top right, hit "<> Script Editor", and paste this in.

Fill in the POST_URL https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks

Fill in the roleID. Role ID is found by typing ```\@Role_Name``` in your discord channel. Will be in format ```<@&##################>```

Fill in the URL to the form, if you wish to do so.
