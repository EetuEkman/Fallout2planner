# Fallout 2 character planner

App for planning out your Fallout 2 character.

Fallout 2 is a video game developed by Black Isle studios.

The app is coded using typescript and bootstrapped with create-react-app.

App is hosted on github pages: <https://eetuekman.github.io/Fallout2planner>

## Motivation

I wanted to learn TypeScript and React. I was looking for an idea for a project to learn the fundamentals. I read advice somewhere that you should make a project about something that interests you and something that could be useful.

I love the Fallout universe and especially earlier Fallout games are dear to me. So what better way to learn than to combine my interest in Fallout with something that could be of use to someone to or just to play around with, a tool to plan out your character.

The game uses the S.P.E.C.I.A.L ruleset. Characters are defined through

* Primary statistics
* Derived statistics
* Skills
* Perks
* Traits

Primary statistics affect derived stats, skills and available perks. For the react, this works fine. Primary stats are held in a state, and when primary stats change, react detects the change and all the derived stats and skills are recalculated and available perks updated.

### Style

I chose to go for pure CSS to remind me of the fundamentals and exercise my CSS muscle.

I wanted to capture the look of the character creation screen from the game and bring it to a browser. Turns out bringing that style from the old video game designed for the late 90's screens and resolutions requires designer with a vision and artist to churn out the textures and assets to make the character planner look good. Nevertheless I tried to have some fun with it, like putting the hazard stripes to the scrollbards despite that being a bit frowned upon nowadays.

### Lessons learned

As I just wanted to start learning and coding, I bootstrapped the app with create-react-app. While CRA works and there's nothing wrong with it, it does come with unnecessary features and is considered by some "bad".

I wanted to learn a but more about Webpack and Babel and their configurations, so I made a simple PowerShell script (also great opportunity to learn and do something useful with it!) to bootstrap my own projects, available [here](https://github.com/EetuEkman/powershell-scripts).

I was perplexed when I noticed some odd behaviour when changing skill values.

After some research, I found out that the issue was a stale state. As a new project I was using React hooks. Stale state is not a problem of just React or JavaScript, but feature of many other languages when using nested functions as well. I'm sure to pump into this feature in the future, and now at least I can give an educated guess about what might be going on and how to solve it.

This time the problem was solved by calling React's setState in a functional way. Dmitri Pavlutin has an excellent article about what was going on. Link to the article [here](https://dmitripavlutin.com/react-hooks-stale-closures/)

## Testing

If you want to clone the repo and try it out for yourself, read on.

Node package manager is required for testing the app.

Node_modules are not included in the repository, so after cloning the repository, install dependencies while in the project folder with the command `npm install`.

App can then be ran in the development mode with the command `npm start`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.