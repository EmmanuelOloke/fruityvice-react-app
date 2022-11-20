# Fruityvice React App [Mindera Code Academy]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# SITUATION

This project was built collaboratively by a group of students from the Mindera Code Academy (UK) June 2022 Cohort. It was created with the aim of solidifying everything that was learnt throughtout the duration of the program from June to November 2022. During the program, different projects have been worked on as one of the main aim of the program is to enable students learn Frontend Software Engineering by building projects hands on. This particular project was assigned to be worked on collaboratively with other students as the final project so the students get to experience what it's like working together with other developers to bring a project to life.

# TASK

The task was to work with the [Fruityvice API](https://fruityvice.com), go through the documentation and understand how the API functions, then create a web application around it to bring the features and information the API provides to life.

# APPROACH

After understanding the functionalities of the API, the team went ahead to brainstorm and sketch out design ideas that will best portrait the goal of the project. It was decided that instead of just displaying the data to the user, it would be best to provide to the users some means to navigate the app to see more information about the Fruits present there in. These features include `SEARCH`, `FILTER`, `SORT` and `DETAIL`.

- `SEARCH`: The SEARCH component was created to enable the users search through the various Fruits returned as a response from the API call made using `fetchAPI`. Edge cases like `Fruits Not Found` or a user clicking on the search button without any input were handled and appropriate errors were displayed using the `react-toastify` npm package.

- `FILTER`: The Filter component gives users the ability to be able filter through the list of fruits based on either the `Genus` or `Family` of the fruit. When a filter is selected, all fruits matching the selected criteria are displayed to the user. Edge case like multiple listing of the same fruit if it matches more than one selected criteria was handled by filtering the already filtered result again in order to return only unique items. Also, if no filter criteria is selected, the entire list of fruit is shown.

- `SORT`: We provided the user with the ability to sort through the fruits by the level of nutrients they contain, based on the information returned from the API. A user can sort through fruits from high to low or vice versa for the content level of a particular nutrient. For example, carbohydrate, protein, calories, fat or sugar.

- `DETAIL`: A fruit detail page is provided where the user can see more details about each individual fruit. This was achieved through nested routing provided by `react-router-dom`. The user click on a particular fruit card and they are taken to a route where all available details of that fruit are shown.

- `ABOUT`: An about page was also provided where information about the API and the functionalities of the web app were provided. Also, there's a team section showing all team members involved in bringing the project to life.

# RESULT

The Fruityvice app was successfully built and deployed on [Vercel](https://vercel.com). It fulfilled the mission of exposing the involved team members to the realities of working in a team as a Software Engineer. It showcases the main features of the Fruityvice API and brings it all to life with an aesthetic User Interface.

![App Screenshot](/src/assets/app-screenshott.png)
