My gameplan

Define MVP:
	Display 5 photos and a name. If photo is selected and matches name, repeat

MVP Design:
	* Make a request to the api
	* Choose five random people and display their pictures
	* Display one name
	* onClick of picture, if name matches displayed name, add green border and after 5 seconds, display a new 5 people

Setup:

First I setup my dev enviornment. I use NPM to install react, react-dom, babel and its relevent presets, and webpack to tie it all together.

I've decided to use react for this because I feel like the repetitive elements lead themselves to components in react, and I believe that it is the main framework that the WillowTree app team uses.

As of now, I don't know if I plan to do any routing, so I have left out react-router. I do know that I will need to make a request to the api, so I have added stage 3 so that I can use async / await.