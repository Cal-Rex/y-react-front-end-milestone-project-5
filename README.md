# Y
## voting on the right answer, for anything
_____________________________________________________________________
## Table of Contents
1. [INTRODUCTION](#introduction)
2. [DESIGN](#design)
- [UX](#ux)
  - [Research](#research)
- [Development Planes](#development-planes)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure](#structure) 
  - [Skeleton](#skeleton)
- [Colour Scheme](#colour-scheme)
- [Typography](#typography)
- [Imagery](#imagery)

3. [Project Development / Agile Sprints](#project-developlment--agile-sprints)

3. [FEATURES](#features)
- [Design Features](#design-features)
- [Visual Features](#visual-features)
- [Gameplay + JS Features](#gameplay-features)
- [404 and 500 Features](#404-and-500-error-pages)
- [Features to Implement in Future](#features-to-implement-in-future)

4. [BUGS](#bugs)
- [Resolved Bugs](#resolved-bugs)
- [Unresolved Bugs](#unresolved-bugs)

5. [TECHNOLOGIES](#technologies)
- [Languages Used](#languages-used)
- [Frameworks](#frameworks--libraries--programs)
- [Libraries](#frameworks--libraries--programs)
- [Programs](#frameworks--libraries--programs)

6. [TESTING](testing.md)

Contained as a seperate document [here](testing.md)

7. [DEPLOYMENT](#deployment)

Step-by-step guide on how to deploy

8. [CREDITS](#credits)

9. [ACKNOWLEDGEMENTS](#acknolwedgments)

__________________________________________

# Introduction
"Y" is a satirical copy of a recently rebranded social media site. The site will allow users to post public questions or images, and ask the opinions of other authenticated users. Users can then vote on their favourite response. The response with the most votes will be deemed the "Right answer"

The site itself aims to operate just like any other standard social media platform where a user can create an account and personalize their identity. Make their own posts and interact with other user's content. 

**This project is the fifth of the five projects to be created for the Diploma in Full Stack Software Development (Advanced Front-End)**

## Project Purpose:
This project aims to:

1. Design an interactive Front-End web application using HTML, CSS and advanced JavaScript, based on component composition and separation of concerns.
2. Explain the key role that specialist Front-End developers perform in modern software development/delivery teams.
3. Create an Application Programming Interface for consumption by 3rd party applications.
4. Create an Interactive Front-End application that consumes API data.

## Criteria

### LO1: Design an interactive Front-End web application using HTML and CSS and advanced JavaScript, based on component composition and separation of concerns.
1. > Design a Front-End for a Full-Stack web application that meets accessibility guidelines, follows the principles of UX design, meets its given purpose and provides a set of user interactions.

2. > Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions.

3. > Write code that meets minimum standards for readability (comments, indentation, consistent and meaningful naming conventions).

4. > Name files consistently and descriptively, without spaces, capitalisation where recommended, to allow for cross-platform compatibility.

5. > Document the deployment process for the Front-End application in the README file for the Front-End application.

6. > Ensure the security of the deployed version of the Front-End application, making sure to not include any passwords in the git repository, and that all secret keys are hidden in environment variables or in files that are in .gitignore, if applicable.

7. > Implement modular use of components and separation of concerns by incorporating component-specific files (i.e. one JavaScript file and, where applicable, one CSS file per component).

8. > Include class and/or functional components to build the application.

9. > Design a responsive Front-End application with the use of a Front-End library which is compatible with React.

10. > Write code that correctly handles user interactions such as clicks, changes to input fields etc.

11. > Design a Front-End web application that lets the user initiate and control actions.

12. > Implement manual testing and document the procedures and results in the README file for the Front-End application.

13. > Use Git & GitHub for version control of the Front-End application up to deployment, using commit messages to document the development process.

14. > Deploy a final version of the Front-End application code to a cloud-based hosting platform and test to ensure it matches the development version.


### LO2:  Explain the key role that specialist Front-End developers perform in modern software development/delivery teams.
1. > Demonstrate an understanding of the React architecture by documenting the reuse of components in the README file for the Front-End application.

2. > Document the UX design work undertaken for the Front-End application, including any wireframes, mockups, diagrams, etc., created as part of the design process and its reasoning. Include diagrams created as part of the design process and demonstrate that these have been followed through to implementation.

3. > Describe what you set out to achieve in creating this application (project goals).

4. > Document all User Stories and map them to the project goals in the README file for the Front-End application.

5. > Use Github Projects to implement Agile project management methodology with User Stories mapped to relevant sprints.

6. > Document Front-End libraries you have used for specific features included in the application and justify your choice in the README file for the Front-End application.


### LO4: Create an Interactive Front-End application that consumes API data.
1. > Create a complete set of CRUD (create, read, update and delete) functionality on the Front-End for users to work with records from an API.

2. > All changes to the data should be notified to the relevant user on the Front-End application.

3. > Display and manipulate API data on the Front-End application in a way that brings value to the user and aligns with the project's purpose.

4. > Implement exception-handling for user actions when communicating with the API, and relay any relevant feedback to the user on the Front-End application.

5. > Write JSX code that passes through a linter (e.g. eslint) with no significant issues affecting functionality.

6. > In the Front-End application, implement at least TWO forms, with validation, that allow users to create and edit resources in the Back-End API.

7. > Ensure that the current login state is evident to the user in the Front-End application.

8. > Ensure that the final deployed code is free of commented out code and has no broken internal links, or broken links to the API.

<br />

___

# Design

## UX
### Research
As Mentioned in the Introduction, the game is inspired by original text-based adventure games, table-top games, roguelike games and webcomics. styling inspiration and mechanic ideas where derived from viewing the following sources:

As Mentioned in the Introduction, this site is a satirical take a recently rebranded social media site. however the following social media platforms were looked at for inspiration regarding site structure, style and implementation of features:

##### [Imgur]()

##### [instagram]()

##### [X / Twitter]()

##### [Facebook]()

<br>

## Development planes

### Strategy

#### User Stories

**Navigation**
- _As a user, i want to be able to seemlessly navigate every page with a central navigation feature_
- _As a user, i want to be prompted to log in to view content that can only be viewed by people with accounts_
- _As a user, i want to be able to navigate through pages and posts with minimal waiting time_

**Authentication**
- _as a user, i want to be able to create an account so that i can access the platform_
- _as a user, i want to be able to log in with my own account so i can partake in user-only features_
- _as a user, i want to be able to see if i am logged in at any given moment, so i know to log out or switch accounts if i need to_
- _as a user, i want to be able to remain logged-in to my account until i decide to sign out_

**Creating and viewing content**
- _As a user, i want to be able to make my own posts/pose my own questions for people to interact with_
- _As a user, i want to be able to view questions/posts people have posted_
- _As a user, i want to be able to view comments/answers and their vote count_
- _As a user, i want to be able to vote on answers that i think are the best for a question/post_
- _As a user, i want to be able to see the Profiles of the people that make posts and comments_
- _As a user, i want to be able to comment/answer other people's posts

**posts / individual posts**
- _As a user, i want to view the most recent posts whenever i log in_
- _As a user, i want to be able to filter posts by profiles that i am interested in_
- _As a user, i want to be able to keep track of all the posts i have interacted with_
- _As a user, i want to be able to seemlessley scroll through posts without having to wait for another page to load_
- _As a user, i want to see what the most popular answer/comment is for a post when i am scrolling through posts to see what the general opinion is_
- _As a user, i want to be able to view all the comments/answers to a post_
- _As a user, i want to be able to edit any questions that i publish, to amend spelling errors or upload a better picture_
- _As a user, i want to be able to edit any comments that i make so i can amend spelling errors_
- _As a user, i want to be able to see posts that have been voted on the most, to see what is trending on the site_

**Profiles**
- _As a user, i want to be able to view other user's public profiles and see what they have contributed to_
- _As a user, i want to be able to Follow other users, so i have easier access to the content they create_
- _As a user, i want to be able to edit my own profile at any time, so i can keep my profile photo and details up to date_
- _As a user, i want to see what the top-voted comments/answers a profile has made_
- _As a user, i want to be able to see the questions/posts a profile has made so i can decide if i like their content_
- _As a user, i want to be able to update my username and password to keep my account secure_

### Scope
Based on the user stories, the following features have been considered for development:

1. profile component
    - users can use this component to view a profile
    - if they are the authenticated owner of a profile, they should have the option to update any of the publicly facing data
    - if they aren't the owner, they can choose to follow or unfollow the profile
    - the profile should list the content created by that user, both posts and most upvoted comments
        - clicking on tiehr of these should take the user to the post
2. homepage component
    - users can use this component to see the most recently published content
    - users can search and filter content in this component, to look for specific posts or posts made by a specific user
3. post detail component
    - this component should display a single post, but all of the answers/comments attached to it
        - the top 3 most voted comments will be ordered first, then after that, they will be ordered by most recently published
    - users will be able to comment, edit a comment, delete a comment and vote on comments from this component
4. trending component
    - this component will give pick from the top-3 most voted on posts and pick one at random, and return it in a post-detail style component, for users with larger screens to immediately view and contribute to.

### Structure 
### Skeleton

#### Wireframes

**mobile / smaller screens**

| Home page / post detail page | comments list page | profile / following list page |
| :----------: | :----------: | :----------: |
| ![home page / post detail page](/readme-assets/wireframes/wireframes-1.webp) | ![comments page](/readme-assets/wireframes/wireframes-3.webp) | ![profile and following pages](/readme-assets/wireframes/wireframes-2.webp) |

**desktop / larger screens**

| home page | profile page |
| :-------: | :----------: |
| ![home page](/readme-assets/wireframes/wireframes-4.webp) | ![profile page](/readme-assets/wireframes/wireframes-5.webp) |

## Colour Scheme
## Typography
## Imagery

# Project Developlment | Agile Sprints

This project was Developed using Agile methodology, user stories and learning outcomes were achieved by completing the following documented Agile sprints, documented in GitHub Projects

Due to the nature of this project being created in 2 seperate repositories, user stories were documented as project milestones to group tasks under relevant user stories in both repositories.

**Milestones 1-6 were conducted during the primary development of the back end API and can be found [here](https://github.com/Cal-Rex/y-api-milestone-project-5/blob/main/README.md#development)**

## Milestone 7 - Setting up App and workspace

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| Use Git & GitHub for version control of the Front-End application up to deployment, using commit messages to document the development process. |

| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| create app base uing npm commands and connect to heroku. install React-bootstrap library and check connetivity. add crossorigin tag to manifest link in html to prevent an obsolete console error, install react routing. | ![sprint 7](/readme-assets/sprints/sprint-7-project-view.png) |

## Milestone 8 - Create Navbar and user/account registration

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions. |
| Implement modular use of components and separation of concerns by incorporating component-specific files (i.e. one JavaScript file and, where applicable, one CSS file per component). |
| Include class and/or functional components to build the application. |
| Write code that correctly handles user interactions such as clicks, changes to input fields etc. |

| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _As a user, i want to be able to seemlessly navigate every page with a central navigation feature_ | create navbar component that can house navigation links, login and sign up links in additon to a place that can house an avatar and a search bar |
| _as a user, i want to be able to create an account so that i can access the platform_ | create a page that allows unauthenticated users to create an account which is stored in the database via the API. |

| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| Create a NavBar component using react bootstrap. create a registration form that creates new user records and profile records on the database. | ![sprint 8](/readme-assets/sprints/sprint-8-project-view.png) |


## Milestone 9 - Create login/logout features, manage authentication status

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions. |
| Implement modular use of components and separation of concerns by incorporating component-specific files (i.e. one JavaScript file and, where applicable, one CSS file per component). |
| Include class and/or functional components to build the application. |
| Write code that correctly handles user interactions such as clicks, changes to input fields etc. |
| Design a Front-End web application that lets the user initiate and control actions. |
| All changes to the data should be notified to the relevant user on the Front-End application. |
| Ensure that the current login state is evident to the user in the Front-End application. |


| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _as a user, i want to be able to log in with my own account so i can partake in user-only features_ | create a login form and page that can be navigated to from the navbar if a user is not logged in/authenticated |
| _as a user, i want to be able to see if i am logged in at any given moment, so i know to log out or switch accounts if i need to_ | once logged in, instead of having the "log in" and "create account" options in the navbar, users will see their profile avatar and username. clicking ont he profile avatar will reveal a dropdown menu that will allow users to log out. |
| _as a user, i want to be able to remain logged-in to my account until i decide to sign out_ | use of interceptors with axios will refresh the user's access token when interacting with elements on the site, preventing the user from logging out until 24 hours of inactivity. | 


| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| Create form that allows users to login with their new credentials. make the app use the useContext hook to establish the auhentication status of a user. create an avatar component, impolement the avatar component to be visible on the condition the user is logged in, create an event handler that handles the function of logging out and implement it as a dropdown option from the profile avatar when a user is logged in. prevent an authenticated user's access token from expiring with axios interceptors | ![sprint 9](/readme-assets/sprints/sprint-9-project-view.png) |


## Milestone 10 - Create ability to make and view posts

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions. |
| Write code that correctly handles user interactions such as clicks, changes to input fields etc. |
| Design a Front-End web application that lets the user initiate and control actions. |
| Display and manipulate API data on the Front-End application in a way that brings value to the user and aligns with the project's purpose. |
| In the Front-End application, implement at least TWO forms, with validation, that allow users to create and edit resources in the Back-End API. |

| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _As a user, i want to view the most recent posts whenever i log in_ | the homepage lists the posts in the database and orders them by most recently posted |
| _As a user, i want to be able to seemlessley scroll through posts without having to wait for another page to load_ | implement infinite scroll react component |
| _As a user, i want to be able to make my own posts/pose my own questions for people to interact with_ | enable a create question form that allows users to post questions |
|  _As a user, i want to be able to view questions/posts people have posted_ | see point 1 |

| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| Create a form where users can create posts and a path to that form, add component to the homepage that lists posts by most recent, enable an infinite scroll on that component feed. | ![sprint 10](/readme-assets/sprints/sprint-10-project-view.png) |


## Milestone 11 - creating commens and editing posts/comments

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |

| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _As a user, i want to be able to view comments/answers and their vote count_ |  |
| _As a user, i want to be able to vote on answers that i think are the best for a question/post_ |  |
| _As a user, i want to be able to edit any questions that i publish, to amend spelling errors or upload a better picture_ |  |
| _As a user, i want to be able to edit any comments that i make so i can amend spelling errors_ |  |
| _As a user, i want to be able to comment/answer other people's posts |  |
| _As a user, i want to be able to vote on answers that i think are the best for a question/post_ |  |


| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |


### LO1: Design an interactive Front-End web application using HTML and CSS and advanced JavaScript, based on component composition and separation of concerns.
1. > Design a Front-End for a Full-Stack web application that meets accessibility guidelines, follows the principles of UX design, meets its given purpose and provides a set of user interactions.

2. > Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions.

3. > Write code that meets minimum standards for readability (comments, indentation, consistent and meaningful naming conventions).

4. > Name files consistently and descriptively, without spaces, capitalisation where recommended, to allow for cross-platform compatibility.

5. > Document the deployment process for the Front-End application in the README file for the Front-End application.

6. > Ensure the security of the deployed version of the Front-End application, making sure to not include any passwords in the git repository, and that all secret keys are hidden in environment variables or in files that are in .gitignore, if applicable.

7. > Implement modular use of components and separation of concerns by incorporating component-specific files (i.e. one JavaScript file and, where applicable, one CSS file per component).

8. > Include class and/or functional components to build the application.

9. > Design a responsive Front-End application with the use of a Front-End library which is compatible with React.

10. > Write code that correctly handles user interactions such as clicks, changes to input fields etc.

11. > Design a Front-End web application that lets the user initiate and control actions.

12. > Implement manual testing and document the procedures and results in the README file for the Front-End application.

13. > Use Git & GitHub for version control of the Front-End application up to deployment, using commit messages to document the development process.

14. > Deploy a final version of the Front-End application code to a cloud-based hosting platform and test to ensure it matches the development version.


### LO2:  Explain the key role that specialist Front-End developers perform in modern software development/delivery teams.
1. > Demonstrate an understanding of the React architecture by documenting the reuse of components in the README file for the Front-End application.

2. > Document the UX design work undertaken for the Front-End application, including any wireframes, mockups, diagrams, etc., created as part of the design process and its reasoning. Include diagrams created as part of the design process and demonstrate that these have been followed through to implementation.

3. > Describe what you set out to achieve in creating this application (project goals).

4. > Document all User Stories and map them to the project goals in the README file for the Front-End application.

5. > Use Github Projects to implement Agile project management methodology with User Stories mapped to relevant sprints.

6. > Document Front-End libraries you have used for specific features included in the application and justify your choice in the README file for the Front-End application.


### LO4: Create an Interactive Front-End application that consumes API data.
1. > Create a complete set of CRUD (create, read, update and delete) functionality on the Front-End for users to work with records from an API.

2. > All changes to the data should be notified to the relevant user on the Front-End application.

3. > Display and manipulate API data on the Front-End application in a way that brings value to the user and aligns with the project's purpose.

4. > Implement exception-handling for user actions when communicating with the API, and relay any relevant feedback to the user on the Front-End application.

5. > Write JSX code that passes through a linter (e.g. eslint) with no significant issues affecting functionality.

6. > In the Front-End application, implement at least TWO forms, with validation, that allow users to create and edit resources in the Back-End API.

7. > Ensure that the current login state is evident to the user in the Front-End application.

8. > Ensure that the final deployed code is free of commented out code and has no broken internal links, or broken links to the API.

# Features
## Design Features
## Visual Features
## 404 and 500 Features
## Features to Implement in Future

# Bugs
## Resolved Bugs
## Unresolved Bugs

# Technologies
## Languages Used
## Frameworks
## Libraries
- 
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)
- https://www.svgrepo.com/svg/5500/upload-file
## Programs
- https://pep8ci.herokuapp.com/#
- https://bennettfeely.com/clippy/

# Testing
Contained as a seperate document [here]()

# DEPLOYMENT
Step-by-step guide on how to deploy

# Credits

- https://www.pluralsight.com/guides/override-react-bootstrap-with-custom-css-file
- https://mui.com/system/spacing/
- https://docs.djangoproject.com/en/4.2/ref/contrib/auth/#django.contrib.auth.models.User


# Acknowledgements 