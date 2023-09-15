# About Sweden quiz
## Portfolio project 2: About Sweden Quiz
About Sweden Quiz is a quiz for those who want to show their knowledge about Sweden but also to learn something new!

**Good Luck!**

Johan Lindelöf

 ![The Responsive image](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/responsive.png)

 ## About the website
### Project planning
This is my first time coding javascript so first I needed to look at different quizes both of how to code and what I wanted in my quiz. I looked at youtube and looked through some code I could find on the internet that matches what I wanted. I also brought with me knowledge from my diploma course in coding. I wanted a quiz that had questions in different categories and easy for the user to maneuver through.  
I have used Balsamiq to plan how the quiz should look like. I did it very easy layout because I did`nt know when I started how easy or hard my decisions would be to code in javascript.
Here is my rough plan: [About Sweden Quiz](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/About%20Sweden.pdf)

As you might see my quiz is a bit different than my balsamiq sheet. It's because I did not know when I started coding that it would feel natural to have an "End Game"-button and a "Reset"-button at the end of the quiz.

### UX
This quiz are for anyone who want to learn a little about Sweden but also just to have fun.

### Users stories
- As a user I want to know what the quiz is about.
- As a user I want to navigate easily and quickly through the quiz.
- As a user, I want to navigate easily through the quiz.
- As a user I want to know the right and wrong answer.
- As a user I want to see my score.
- As a user I want to have the possibility to replay or end the quiz when it pleases.
I want to give the user a little knowledge about Sweden in different categories.

## The structure of the quiz
The quiz has threesections:
+ **Startpage:** Where the user can read the instructions and get information on your options throughout the quiz. 
+ **Playground:** Here the user plays the game. Here are the questions and two buttons, “Next”-button and “End Game”-button.
+ **Scoreboard:** Where the user finds its score and also a “Back in Game”-button.

### Colors
**Background:** I decided to use the colors of Sweden, blue and yellow. The background is blue, from the sky of the image, and the playground is yellow. The title text is in yellow and the buttons turn blue when you hover over them. The function buttons are with a blue background and white text except for the “End-Game” button that has a yellow background with a red border and black text.

**The colors used was:**
+ Yellow #ffefa7 - For background and button.
+ Blue rgb 106, 193, 252 - For buttons and background.
+ Blue #457bd1 - hover over buttons.
+ White #FFF - used for text.
+ Black #000 - For text and shadows.
+ Red #ff0000 - Wrong answer.
+ Green #008000 - Right answer.
 

### Technologies
1. HTML - To create a basic site.
2. CSS - To create a nice, standout front-end and to give a great user experience.
3. Javascript - To create functions in the game.
4. Balsamiq - To create a wireframe.

## Features

### Existing Features

+ #### Logo
  - The title of the quiz with a subtitle. It is displayed on an image of the swedish flag and the sky. With yellow text and black shadow.

![Title](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/header.png)
  

+ #### Start
  - The start of the game has instruction of the quiz and a start button.
    
  ![Start of the quiz](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/playgroundandstart.png)

+ #### Playground
  - After pressing the start button a question displays.
 
  ![Question](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/questionappear.png)

  - User select an answer and if it turns green it is correct:
  
  ![Right answer](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/rightanswer.png)
  
  - And if it turns red it is incorrect.
  - The right answer will turn green:
 
  ![Wrong answer](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/wronganswer.png)

  - As soon as the user selects their answer, a "Next"-button and a "End Game"-Button will display.
  - The user can now decide to continue to the next question or end the game.
  
![Next and End button](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/nextendbutton.png)

+ #### Scoreboard
  - When you answered all the questions or end the game the user will be directed to the scoreboard:
  - Here the user can see their score and decide to reset the quiz or if ended the game, return to the questions.
  
  ![Scoreboard](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/scoreboard.png)

### Features to Implement
Further I would like to make the scores out of answered questions when ended the game.

## Testing
+ I tested the site, and it works in different web browsers: Chrome, Firefox, and Microsoft Edge.
+ On mobile devices, I tested the quiz on a Samsung Galaxy A13 with the Samsung browser and an iPhone SE with the Safari browser.
+ I confirmed that the site is responsive and functions on different screen sizes using the devtools device toolbar.
+ I confirmed that the quiz, start, playground and scoreboard are readable and easy to understand.

### Validator Testing
+ HTML No errors were returned when passing through the official W3C validator.
+ CSS No errors were found when passing through the official (Jigsaw) validator.
+ Javascript No errors were found when passing through JSHint validator.

### Testing using Google Lighthouse:
I used Google Lighthouse via devtools to assess the website.

![Lighthouse](https://github.com/jlindeloef/about-sweden-quiz/blob/main/readme-images/lighthouse.png)


















