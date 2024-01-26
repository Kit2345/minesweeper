# minesweeper

[Click to play game](https://minesweeper-omega-eight.vercel.app)

## How to play the game

Aim of the game:
Click all squares without finding a bomb. There are 10 in total.

How to play:
Click any cell to reveal it's contents. Will it be a bomb?

If the cell is empty - the number displayed will tell you how many sqaures around it contain bombs.

To mark a cell you think contains a bomb: hold down Shift key and click. Cell will be marked with an X, protecting the cell from being accidently mis-clicked. To remove the X/protection, hold down Shift Key and click cell again.

### Inspiration

After finishing the School of Code I saw that Boolean UK was hosting a week of evening taster sessions to show absolute beginners how to code retro arcade games. This seemed like a fun idea, and would be great to go back to fundamentals for practice. It was one game per two hour session, so by the end of it, we had a MVP minesweeper game, click a cell and it reveals whether there is a bomb present or not.

During the bootcamp I found DOM manipulation using Javascript difficult, so decided to code it all from scratch as practice. It was thoroughly enjoyable and it's great seeing something come to life step by step.

### Challenges I ran into

The biggest challenge I ran into was adding each additional feature. I planned out each feature and how to implement it, but didn’t really think about future features. So this meant I often had to refactor existing functions into smaller ones or re-write or add to existing code. I would inadvertently add bugs doing this, which meant I had to troubleshoot and work out where they were coming from. What I thought would be simple took a lot longer than expected. I still want to add difficulty settings - but that again needs another refactor/re-write!

### What I would do differently next time

While planning additional features I realised I needed to refactoring and then debug before I could implement - this emphasised how important separation of concerns are. Next time I will refactor as standard before filing the exisiting feature as complete.
After refactoring I testing each part separately to make sure it still worked as intended - at this point I should have added automatic tests instead of manually testing. If I had unit tests in place, this would have made it much easier and quicker. If I was to repeat this, I would add some basic unit tests in - either take a TDD approach or add a unit test as soon as I finish a function.

I was surprised how important and useful unit tests can be even for a simple minesweeper game.

### Accomplishments that we're proud of

I am really proud that I managed to get a working Minesweeper game working. How I tracked down the bugs by breaking down the code into smaller chunks and then systematically (manually) testing them to find what was wrong/unexpected

### What's next?

I want to add difficulty setting. <br>
Add tests to make sure each function does it's intended job.<br>
Game was designed with desktop in mind, so shift key + click isn't easy/possible with mobile. Need to come up with a solution to this. <br>

### Built with

Javascript, CSS, HTML
