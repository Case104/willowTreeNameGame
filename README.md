![Splash](http://i.imgur.com/tZs9pG1.png)

##Lets play!

To view the app either clone it down and use `npm run start`, or visit this [Heroku Link](http://willow-tree-name-game-jc.herokuapp.com/#/).

####Technologies Used:
 * React
 * React-router
 * Lodash
 * Webpack
 * Babel
 * Express

####Features:
 * MattMode!
 * Scoring
 * Routing
 * Architecture


##Design Thoughts

My goal for this app was to demonstrate my knowledge of React and create a fun way to learn the names from people at WillowTreeApps.

Architecturally, I used a container / component scheme where I did my best to keep the logic in the containers, and used components as functional stateless components that would simply render a view. My coding style is to be as clear as possible, and I try to break everything down to its most basic form. 

Most of the logic lives in the GameContainer. This container manages almost all of the state and logic in the app, and passes down handler methods when needed. The GamesContainer uses methods from the utils/helpers.js file to accomplish its tasks, while keeping its own methods concise and readable. I can see an argument where that level of abstraction could cause more harm than good, but I haven't heard that feedback yet.

Although I didn't take the time to create tests, I did make sure to use PropTypes to provide at least a little bit of coverage.

##Take-aways

######I need to spend more time with bootstrap and css. It was a huge timesink.
######I really enjoy the functional nature of react. The more I use it, the more it just makes sense.

##Closing

I feel like I accomplished my initial goals, and that this app does a good job of displaying my overall coding style.
