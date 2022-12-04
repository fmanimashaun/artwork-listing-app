![](https://img.shields.io/badge/fmanimashaun-green)
![](https://img.shields.io/badge/francis3400-blue)
![](https://img.shields.io/badge/gealsanchez-red)

# My Spaceship App (API-based webapp)

## 📗 Table of Contents

- [📖 Overview](#about-project)
  - [Project Objectives](#project-objectives)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

## 📖 Overview <a name="about-project"></a>

This group capstone project focuses on building a single-page web application based on an external API, webpack 5, and sass to list spaceships. The application is designed to be a listing of spaceships that features a Home page which lists the spaceships. Each listing allows the user to "like" the item using an Involvement API, as well as to engage in more detail with a popup window that provides more data about the item, such as the ability to comment on it, or reserve it for a period of time. The application is designed to be responsive across all screen sizes, and utilizes webpack 5 in order to optimize the speed of loading and allow for easy integration with sass for styling. Additionally, it is designed with user experience in mind, with all pages building upon the Home page and allowing the user to engage with the content in a more continuous manner. Overall, this project provides a unique and enjoyable experience for users to list spaceships and engage with them in a variety of ways.

### Project Objectives <a name="project-objectives"></a>

**APIs**

- First, you need to find an API so you can base the development of the webapp around it. The API should allow you to:
  - Get a list of items with a unique item id (or generate the unique id).
  - For a given item, get detailed information about it.

    We recommend that you choose an API that **doesn't need authentication**. if you select an API that requires authentication, you should implement it on your own. Also, if you select an API that provides **image** resources, your webapp will be more visual which will make it more appealing.

    Some example APIs are:

  - [Pokeapi](https://pokeapi.co/): data about the Pokémon world.
  - [TVmaze API](https://www.tvmaze.com/api): data about TV series and movies.
  - [Meals DB](https://www.themealdb.com/api.php): data about meals.

You can find more APIs in [this GitHub repo](https://github.com/public-apis/public-apis) or in [ProgrammableWeb](https://www.programmableweb.com/category/all/apis). Some of the APIs require a token, some require authentication, and some others are just open.

- You will use our [Involvement API](https://www.notion.so/869e60b5ad104603aa6db59e08150270) to record the different user interactions (likes, comments and reservations).

**Interfaces**

- You should build these interfaces:
  - The *home page*.
  - The *comments popup*.
  - The *reservations popup* (only for the groups of 3 students).
- You should follow the layout of the wireframes provided. You should personalize the rest of the design including colors, typographies, spacings, etc.
- Home page
  - When the page loads, the webapp retrieves data from:
    - The selected API and shows the list of items on screen.
    - The Involvement API to show the item likes.
  - Remember that your page should make only 2 requests:
    - One to the base API.
    - And **one** to the Involvement API.
  - When the user clicks on the Like button of an item, the interaction is recorded in the Involvement API and the screen is updated.
  - When the user clicks on the "Comments" button, the Comments popup appears.
  - When the user clicks on the "Reservations" button, the Reservations popup appears (only for the groups of 3 students).
  - Home page header and navigation similar to the given mockup.
  - Home page footer similar to the given mockup.
- Comments popup
  - When the popup loads, the webapp retrieves data from:
    - The selected API and shows details about the selected item.
    - The Involvement API to show the item comments.
  - When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.
- Reservations popup (only for the groups of 3 students)
  - When the popup loads, the webapp retrieves data from:
    - The selected API and shows details about the selected item.
    - The Involvement API to show the item reservations.
  - When the user clicks on the "Reserve" button, the data is recorded in the Involvement API and the screen is updated.

**Counters**
We have counters in all the interfaces that show:

- The number of items (home).
- The number of comments (comments popup).
- The number of reservations (reservations popup) - only for the groups of 3 students.

Even if the API gives you these numbers, you will create a specific function to calculate these numbers on each page. Respect the following rules:

- Each counter should be implemented as a separate module.
- A counter function should look for specific DOM elements (e.g. for the comments counter it should look for comments) and make the counting based on what is actually displayed on the page.
- A counter function should cover all the edge cases you can think about.

These counter functions need to be covered with unit tests using Jest. Make sure that you have tests for all edge cases.

**Technical set up**

- Set up the repository on GitHub and use gitflow.
- Set up webpack.
- Use modules to organize your code. You should have a separate directory for your modules ( `src/modules`). It is your responsibility to divide your code into logical chunks.
- Set up a JavaScript testing library (Jest). All your tests should be stored in one directory.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [JavaScript/ES6](https://262.ecma-international.org/6.0/)
- [webpack 5](https://webpack.js.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com)
- [Stylelinter](https://stylelint.io/)
- [ESLint](https://eslint.org/)
- [Webhint](https://webhint.io/)
- [Lighthouse](https://ethcar.github.io/lighthouse/)
- [SASS](https://sass-lang.com/)
- [API](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3)

### Key Features <a name="key-features"></a>

- [x] Use ES6 modules, with import and export.

## 🚀 Live Demo <a name="live-demo"></a>

> [Live Demo Link](https://fmanimashaun.github.io/my-spaceship-app/)
> [Video Demo Link](#)

<p align="center">
  <img width="500" src="#">
</P>

## 💻 Getting Started <a name="getting-started"></a>

- [Optional] Install git bash to your machine to enable you to clone this repo.
- install Visual Studio to be able to host a local live version.
- Install a browser to view the local live version.

To get a local copy up and running follow these simple example steps.

### Setup <a name="setup"></a>

- Open your GitHub account the repository's [link](https://github.com/fmanimashaun/my-spaceship-app)

### Prerequisites <a name="prerequisites"></a>

- Internet connection
- A github account

### Install <a name="install"></a>

- copy the repo's link and clone it by writing `git clone https://github.com/fmanimashaun/my-spaceship-app.git` on your git bash terminal.
- `npm install` to install the dependencies.

### Run tests <a name="run-tests"></a>

- You can check for errors by running linter tests found in the github flows.

### Deployment <a name="deployment"></a>

- run `npm run start` to run it locally.

## Authors <a name="authors"></a>

👤 **Engr. Animashaun Fisayo**

- [GitHub](https://github.com/fmanimashaun)
- [Twitter](https://twitter.com/fmanimashaun)
- [LinkedIn](https://www.linkedin.com/in/fmanimashaun/)
- [Website](https://fmanimashaun.com)

👤 **Gerson Sanchez**

- [GitHub](https://github.com/gealsanchez)
- [Twitter](https://twitter.com/gealsanchez)
- [LinkedIn](https://www.linkedin.com/in/gerson-sanchez-88309b57/)

👤 **Francis Uche**

- [GitHub](https://github.com/francis3400)
- [Twitter](https://twitter.com/francisBlinkz)
- [LinkedIn](https://www.linkedin.com/in/francis-uche-888675213)

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## ⭐️ Show your suppor <a name="support"></a>

Give a ⭐️ if you like this project!

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.
