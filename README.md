# Multiplication Client-side Web Application

The goal of this work is to produce a client-side Web application to help a child understand multiplication.

The main features of this are:
- it displays a grid of all the numbers from 1 to 144

## Steps

1. Add basic markup
This adds the index.html file
I have injected the main content via JavaScript. This is partly to save time (it would most likely be done server side in a real world example) but also feels justified because the app itelf requires JavaScript to work at all. 

## Setting up

This app uses Karma as a test runner for JavaScript Unit Tests, together with Mocha testing framework and Chai

To set up the Karma test modules run ```npm install```

To run tests run ```karma start spec/js/karma.conf.js```
