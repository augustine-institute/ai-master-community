# FORMED.org test project

This project was set up to be the location for automated tests using the protractor and the cucumber test frameworks. 

Here are some resources to help, if you are not familiar with these technologies:
* https://cucumber.io/ - Cucumber test framework
* https://github.com/cucumber/cucumber-js - the javascript version of cucumber. 
* http://www.protractortest.org/ - protractor
* https://github.com/igniteram/protractor-cucumber-typescript - reference used in creating this project
* https://www.typescriptlang.org/ - the typescript language
* https://code.visualstudio.com/download - awesome, free IDE for developing in typescript
* https://www.jetbrains.com/webstorm/ - more awesome (but not free) IDE for developing in typescript

## How to get started

(more details coming soon)

* Install vscode (or other ide) and nvm or just node/npm version 6.11 (at least)

(windows nvm = https://github.com/coreybutler/nvm-windows/releases)

* Install chrome

* use node version 6.11
```
nvm install 6.11
nvm use 6.11
```

* build the project
```
npm install yarn
npm run yarn install
```

* run the tests
```
npm run test
```


## How to create new tests using chrome

(more coming soon)

* Write a feature file
* Run the tests `npm run test`
* notice unimplemented steps have code spit out.
* Write the steps code using typescript by pasting the output of the steps that are not implemented

## How to test different browsers

(coming soon)

