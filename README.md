# Clicky Game

## Overview

Deployed at:  https://lukeevangraham.github.io/clicky-game/

Clicky game is a memory game.  The game is built with React using components, managing state and responding to user events.

## Using The App

The application renders different images to the screen. Each image listens for click events.

The application keeps track of the user's score. The user's score increases when clicking an image for the first time. The user's score resets to 0 if they click the same image more than once.

Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

Once the user's score is reset after an incorrect guess, the game restarts.