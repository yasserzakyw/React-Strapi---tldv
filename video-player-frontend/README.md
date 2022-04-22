# Getting Started Video Player App | Frontend 🚀

This section is the Front-end (_clinet side_) of the application.

## Overview

- Project was developed with ReactJS.

- I have taken the approach of breaking down all used elements into smaller web components.

- I have created TWO pages:
  1.  _Home_: Renders and displays list of videos, in Cards style.
  2.  _VideoDetails_ : Gets the video id from URL with [useParams() hook](https://v5.reactrouter.com/web/api/Hooks/useparams), then renders and autoplays the video. Also displays it's details.
- Pages use a shared hook called `useVideo()` to:

  - Fetches data from API (Videos list)
  - Gets all Video details
  - Controls fetching state (_used for loading spinner animation while fetching_)

- Prepared a pre-defined boiler-plate css classes using SASS for ease of development.

  - example: \
     `<span className="container flex justify--center align-center" >`

    is equivilant to

    ```
    // HTML
    <span className="container" />

    // CSS
    .container {
       display: flex;
       justify-content: center;
       align-items: center;
    }
    ```

  - Along with other configurations for styling dynamic flow.

# Prepare and run the project (locally) ⚙️

1. Make sure you have [node](https://nodejs.org/en/) installed on your machine.

2. In order to install the proper packages to run this project, navigate to this direcotry:

   ```
   cd video-player-frontend
   ```

3. In the project directory, you can run:

   ```
   npm start
   ```

   OR

   ```
   yarn start
   ```

   This runs the app in the development mode.

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

5. I order to successfully call the API and fetch data, you to have the backend server up and running.\
   Please navigate to this [README](Navigate to backend README.md) file to know how to do that 😉

\
The page will reload when you make changes.\
You may also see any lint errors in the console.

In case of any questions, you know [where to find me 👨🏻‍💻](http://yasserzaky.xyz/)
