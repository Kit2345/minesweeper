# minesweeper

[Click to play game](https://minesweeper-omega-eight.vercel.app)

## How to play the game

Aim of the game:
Click all squares without finding a bomb. There are 10 in total (in easy mode)

How to play:
Click any cell to reveal it's contents. Will it be a bomb?

If the cell is empty - the number displayed will tell you how many squares around it contain bombs.

To mark a cell you think contains a bomb: hold down Shift key and click. Cell will be marked with an X, protecting the cell from being accidentally mis-clicked. To remove the X/protection, hold down Shift Key and click cell again. (Feature not tested on mobile, on my to do list).

You can select difficulty by clicking the easy, medium or hard buttons. Current difficulty is in gray.

### Inspiration

After finishing the School of Code I saw that Boolean UK was hosting a week of evening taster session to show absolute beginners how to code retro arcade games.
I still remember getting my first PC and the many hours playing minesweeper and solitaire. So seemed like a fun idea to try and relive those memories by coding instead of playing! It would also be great to go back to fundamentals for practice.

By the end of the minesweeper taster session we had a basic MVP minesweeper game, click a cell and it reveals whether there is a bomb present or not.

During the bootcamp I found DOM manipulation using Javascript difficult, so decided to code it all from scratch as practice. It was thoroughly enjoyable and it's great seeing something come to life step by step. I had so much fun that I decided to add additional features to the basic MVP covered in the taster session.

### Challenges I ran into

The biggest challenge I ran into was adding each additional feature. I planned out each feature and how to implement it, but didn’t really think about future features. So this meant I often had to refactor existing functions into smaller ones or re-write or add to existing code. I would inadvertently add bugs doing this, which meant I had to troubleshoot and work out where they were coming from. What I thought would be simple took a lot longer than expected. I still want to add difficulty settings - but that again needs another refactor/re-write! EDIT: Re-factored code, into functions, wasn't as painful as I originally thought.

### What I would do differently next time

While planning additional features I realised I needed to refactoring and then debug before I could implement - this emphasised how important separation of concerns are. Next time I will refactor as standard before filing the exisiting feature as complete.
After refactoring I testing each part separately to make sure it still worked as intended - at this point I should have added automatic tests instead of manually testing. If I had unit tests in place, this would have made it much easier and quicker. If I was to repeat this, I would add some basic unit tests in - either take a TDD approach or add a unit test as soon as I finish a function.

I was surprised how important and useful unit tests can be even for a simple minesweeper game.

### Accomplishments that we're proud of

I am really proud that I managed to get a working Minesweeper game working. How I tracked down the bugs by breaking down the code into smaller chunks and then systematically (manually) testing them to find what was wrong/unexpected

### What's next?

~~I want to add difficulty setting.~~ <br>
Add option to change board size <br>
Add tests to make sure each function does it's intended job.<br>
Game was designed with desktop in mind, so shift key + click isn't easy/possible with mobile. Need to come up with a solution to this. <br>
Re-make the game using React<br>
Add feature so first click can't be a bomb (thanks Andy and Marika for suggestion) <br>
Add feature to keep track of score locally. New game, scores add to it, until bomb clicked. (Thanks Steven Smith for the suggestion)<br>

### Built with

Javascript, CSS, HTML
