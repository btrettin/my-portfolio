# Terra -- Website

## Setup information

In order to run the website, you will need to install Node.js ([link](https://nodejs.org/en/download/)). After you download Node.js, run the installer and go through the wizard.

After Node has been installed, make sure that if was installed correctly. To do this, go to the terminal/command prompt and run the following commands:

* `node -v`
* `npm -v`

The above commands will print out the version numbers of Node and NPM, the Node package manager, respectively. If that worked, go ahead and clone the repository.

Once you have cloned it, move into the directory, then run `npm install`. This will install all of the dependencies required to run the website.

Next, in a separate terminal/command prompt window, run  `npm run watch-css`. This will compile the stylings for the website. Then, in the first terminal/command prompt window, run `npm start`. This will spin up a development server that will host the website. After the server is up, you can go to [localhost:3030/test](localhost:3030/test) to verify that the local website is up and running!

## Testing

The testing framework used with Mocha with a Selenium webdriver. To run the tests run the script

```
npm test
```

If you want to run specific tests use

```
npm test -- -u -t="<name of test or description>"

```
