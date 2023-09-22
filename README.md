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

4. [FEATURES](#features)
- [Design Features](#design-features)
    - [Front End libraries](#front-end-libraries-and-packages)
- [Visual Features](#visual-features)
- [404 and 500 Features](#404-and-500-error-pages)
- [Features to Implement in Future](#features-to-implement-in-future)

5. [BUGS](#bugs)
- [Resolved Bugs](#resolved-bugs)
- [Unresolved Bugs](#unresolved-bugs)

6. [TECHNOLOGIES](#technologies)
- [Languages Used](#languages-used)
- [Frameworks](#frameworks)
- [Libraries](#libraries)
- [Programs](#programs)

7. [TESTING](testing.md)

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

##### [Imgur](https://imgur.com/)
| Desktop View                                                | Mobile view                                                   |
| :---------------------------------------------------------: | :-----------------------------------------------------------: |
| ![imgur desktop](/readme-assets/research/imgur-desktop.png) | ![imgur mobile](/readme-assets/research/imgur-mobile.png.jpg) |


##### [instagram](https://www.instagram.com/)
| Desktop View                                                | Mobile view                                                   |
| :---------------------------------------------------------: | :-----------------------------------------------------------: |
| ![Instagram Desktop](/readme-assets/research/instagram-desktop.png) | ![Instagram Mobile](/readme-assets/research/instagram-mobile.png.jpg) |

##### [X / Twitter](https://twitter.com/home)
| Desktop View                                                |
| :---------------------------------------------------------: |
| ![Twitter / X](/readme-assets/research/twitter-desktop.png) |

##### [Facebook](https://www.facebook.com/)
| Desktop View                                                | Mobile view                                                   |
| :---------------------------------------------------------: | :-----------------------------------------------------------: |
| ![Facebook Desktop](/readme-assets/research/facebook-desktop.png) | ![Facebook Mobile](/readme-assets/research/facebook-mobile.jpg) |

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
Based on the user stories above, the following goals have been identified: 

1. Create a social media site that allows users to post questions
2. users should be able to interact with these questions by liking them, commenting on them and then voting for best comment
3. Users should be able to follow other users to keep up to date with those user's content
4. Users should be able to keep a record of content that they like
5. The user should have trackable stats on a profile page like their most voted comment.

**Based on the user stories and project goals, the following features have been considered for development:**

1. profile feature
    - users can use this component to view a profile
    - if they are the authenticated owner of a profile, they should have the option to update any of the publicly facing data
    - if they aren't the owner, they can choose to follow or unfollow the profile
    - the profile should list the content created by that user, both posts and most upvoted comments
        - clicking on tiehr of these should take the user to the post
2. homepage feature
    - users can use this component to see the most recently published content
    - users can search and filter content in this component, to look for specific posts or posts made by a specific user
3. post detail feature
    - this component should display a single post, but all of the answers/comments attached to it
        - the top 3 most voted comments will be ordered first, then after that, they will be ordered by most recently published
    - users will be able to comment, edit a comment, delete a comment and vote on comments from this component
4. a discover users feature
    - this component will allow users to see other registered users on the platform, view he content that they have posted and commented on and then decide to follow them if they like their posted content.

### Structure 

#### A Note of conflict:

The following informaiton below was advised on the walkthroughs to conduct the following process when structuring imports for this process. It has been advised however, by tutros and the console, that structuring imports with curly braces is the recommended/optimum method:

| [instructions on optimizing bootstrap imports](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/f50e8ca2d7f6497c9d9857048d973ae4/) |
|:-----|
| Because we have been using auto-imports for our components, our bootstrap imports have been done in a way that is not optimal for build time. For example in NavBar.js, we have imports like this <br><br> import { Navbar, Container, Nav } from "react-bootstrap"; Which means the entire react-bootstrap library is imported and the NavBar, Container and Nav components are deconstructed from it.<br><br>The Bootstrap documentation recommends instead importing each component individually from their specific folder. Like this:<br><br> import Navbar from "react-bootstrap/Navbar";<br> import Container from "react-bootstrap/Container";<br> import Nav from "react-bootstrap/Nav";<br> This minimises the bootstrap build to only the components that are needed from the library.<br><br> We recommend you go through your components and adjust your react-bootstrap component imports with this in mind. |

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

| For this project, given the idea is to pose contrasting answers on questions, a monochromatic colour scheme was decided on. the pallette was created with [Colormind](http://colormind.io/template/paper-dashboard/) |
| :-: |
| ![Colormind palette](/readme-assets/research/colormind.png) |

## Typography
Typography was initially drafted for this project but was then pushed to a later iteration due to time constraints and assessment criteria

## Imagery

| Modeling/spoofing the new "[X](https://twitter.com/home)" logo, the following brand was decided on as the main logo for the site | 
| :-: |
| ![y logo](/readme-assets/y-big-canvas-black.png) |
| variations of this image are used to creae the site header logo and user default profile images |

All icons for the site were implemented from the [FontAwesome](https://fontawesome.com/) library.

# Project Developlment | Agile Sprints

This project was Developed using Agile methodology, user stories and learning outcomes were achieved by completing the following documented Agile sprints, documented in GitHub Projects

The MoSCoW prioritisation system was used to organise tasks for each sprint.

Due to the nature of this project being created in 2 seperate repositories, user stories were documented as project milestones to group tasks under relevant user stories in both repositories.

**[The project board for both fron and backend projects can be viewed here](https://github.com/users/Cal-Rex/projects/11/views/3)**

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
| Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions. |
| Include class and/or functional components to build the application. |
| Write code that correctly handles user interactions such as clicks, changes to input fields etc. |
| Design a Front-End web application that lets the user initiate and control actions. |
| Create a complete set of CRUD (create, read, update and delete) functionality on the Front-End for users to work with records from an API. |
| All changes to the data should be notified to the relevant user on the Front-End application. |
| In the Front-End application, implement at least TWO forms, with validation, that allow users to create and edit resources in the Back-End API. |

| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _As a user, i want to be able to view comments/answers and their vote count_ | display the comments of a post with a comments component that also contains the number of votes made on that comment |
| _As a user, i want to be able to vote on answers that i think are the best for a question/post_ | put an icon in the post component that prompts users to make a vote on a post |
| _As a user, i want to be able to edit any questions that i publish, to amend spelling errors or upload a better picture_ | add an edit form for questions/posts made |
| _As a user, i want to be able to edit any comments that i make so i can amend spelling errors_ | create an edit form for comments |
| _As a user, i want to be able to comment/answer other people's posts_ | create a form that alows users to comment on questions/posts |


| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| Create a form that allows users to edit posts, create a dropdown called DropdownOptions that allows users to access the edit post form and also delete a post.<br><br> Create a component to structure and view comment data and then utilise this in the PostPage component.<br><br> Create the vote functionality on comments and track the vote count changes, implement infinite scroll on comments within the PostPage component (this unfortunately bugged at this stage). <br><br>create a form that allows users to make a comment. <br><br>Create a form that allows users to edit a comment that they own. <br><br>Re-Use the DropdownOptions component to also create a dropdown for comments, allowing them to be edited or deleted if the current user is the owner of that comment. | ![sprint 11](/readme-assets/sprints/sprint-11-project-view.png) |


## Milestone 12 - User Profiles and following features

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions. |
| Implement modular use of components and separation of concerns by incorporating component-specific files (i.e. one JavaScript file and, where applicable, one CSS file per component). |
| Include class and/or functional components to build the application. |
| Write code that correctly handles user interactions such as clicks, changes to input fields etc. |
| Design a Front-End web application that lets the user initiate and control actions. |
| All changes to the data should be notified to the relevant user on the Front-End application. |
| Display and manipulate API data on the Front-End application in a way that brings value to the user and aligns with the project's purpose. |

| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _As a user, i want to be able to view other user's public profiles and see what they have contributed to_ | create a profile page to house user details |
| _As a user, i want to be able to Follow other users, so i have easier access to the content they create_ | create a follow unfollow feature |
| _As a user, i want to be able to edit my own profile at any time, so i can keep my profile photo and details up to date_ | create an edit profile form |
| _As a user, i want to see what the top-voted comments/answers a profile has made_ | retrieve posts by user and order them by most votes, return first vlue in array |
| _As a user, i want to be able to see the questions/posts a profile has made so i can decide if i like their content_ | view posts of a user on their profile |
| _As a user, i want to be able to update my username and password to keep my account secure_ | add these fields to the edit profile form |

| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| create a profile component <br><br> create a page to house the profile component <br><br> create a context hook that manages the details of the current user to enable the ability to follow other users <br><br> create follow/unfollow feature <br><br> create edit profile form <br><br> add top comment and user's posts to their profile page | ![sprint 12](/readme-assets/sprints/sprint-12-project-view.png) |

## Milestone 13 - clean up features and search function

| Learning Outcomes / Acceptance Criteria covered in this milestone                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| Design a Front-End for a Full-Stack web application that meets accessibility guidelines, follows the principles of UX design, meets its given purpose and provides a set of user interactions. |
| Implement custom JSX (HTML, JavaScript and CSS) code to create a responsive, dynamic Front-End application consisting of one or more pages with relevant responses to user actions and a set of data manipulation functions. |
| Write code that meets minimum standards for readability (comments, indentation, consistent and meaningful naming conventions). |
| Name files consistently and descriptively, without spaces, capitalisation where recommended, to allow for cross-platform compatibility. |
| Document the deployment process for the Front-End application in the README file for the Front-End application. |
| Ensure the security of the deployed version of the Front-End application, making sure to not include any passwords in the git repository, and that all secret keys are hidden in environment variables or in files that are in .gitignore, if applicable. |
| Implement manual testing and document the procedures and results in the README file for the Front-End application. |
| Use Git & GitHub for version control of the Front-End application up to deployment, using commit messages to document the development process. |
| Deploy a final version of the Front-End application code to a cloud-based hosting platform and test to ensure it matches the development version. |
| Write JSX code that passes through a linter (e.g. eslint) with no significant issues affecting functionality. |
| Ensure that the final deployed code is free of commented out code and has no broken internal links, or broken links to the API. |


| User Stories covered in this milestone                                                                | details |
| :---------------------------------------------------------------------------------------------------- | :------ |
| _As a user, i want to be able to filter posts by profiles that i am interested in_ | implement search function that allows users to search for users and posts with keyword searching |

| Tasks This Sprint | Sprint overview |
| :---------------- | :-------------: |
| Implement Seach feature <br><br> tidy up code and run all code through Linters and validation services <br><br> ensure the project is not logging any unwanted errors in the console during render <br><br> document rest of development process not covered in milestone sprints <br><br> Deploy page to heroku again now that it is built <br><br> | ![sprint 13](/readme-assets/sprints/sprint-13-project-view.png) |

___

# Features
## Design Features

### Front-End Libraries and packages

**React Bootstrap**
To ensure modularity as well as consistent structure and style across the project. the [React Bootstrap v4](https://react-bootstrap-v4.netlify.app/) Library was used to built `Form` components and grid structuring of the project, allowing for a responsive design at the base level of the project. 

**React Router**
The React Routerlibrary was used to allow for seamless linking of paths on the site.

**Axios**
The Axios library was implemented to manage user's access and refresh tokens. response and request interceptors were created using the library augment requests sent to the API to maintain the User's authentication state.

**Code Institute walkthrough snippets**
Elements of the "moments" walkthrough provided valuable snippets that help structure some of the mounting, context components and Form elements of the project.


### Front-end Mechanical Features

**Logging in**
- when viewing the app a non-authenticated user, the app will always redirect the user to the login screen if the user tries to interact with any feature on the site that requires the user to be authenticated, sucj as creating a post, liking a post, voting on a oomment etc.
- this is achieved with the use of the `useContext` hook to create a `currentUser` context. which holds the status of the current user. conditional logic is then implemented in several components based on value of the hook.
- users can log in via the login page using a username and password
- Username and password are checked against the database by use of the Dj-rest-auth in the API aspect of this project
- Invalid details in the login form will prevent the form from submitting and prompt the user what the errors are with the login form data
- correct details will log a user in and return them to the index/dashboard of the app

**Sign up**
- Users can sign up if they do not have an account
- They can do so by clicking the link on the login page, which rediects to a sign up form
- the form requests the following fields be completed:
    - Username
    - Email Address
    - Password
    - Password (again, for verification)
    - failure to correctly enter all fields will prevent the form from submitting and the user will be alerted as to what fields are incorrect
    - correctly submitting the form posts the data to the Database via use of dj-rest-auth functions in the API. a profile is also created linked to the new user.


**Editing Personal Details**
- When logged in, users can update their info using the following 3 forms from their profile page:
    - Edit username
        - this form allows the user to update their username within the API database linked to their User record
    - Edit profile
        - this form allows for the edit of profile fields not directly linked to authentication information.
        - bio, and profile image can be edited here
    - Change Password
        - This form allows for users to udate their password

**Navigation**
- Search
    - both authenticated and unauthenticated users can use the search bar to filter posts on any of the post list pages (dashboard, tranding, liked) provided they have permission to access them (such as likes, which is only possible for authenticated users)
    - the search function also works exactly the same on the profiles list page, where it just filters through profiles as opposed to posts on the post list pages
    - there is no need to submit a search criteria, as the search feature will instantly render fresh results on keychange
- navigtae back to home with logo
    - the site logo on the navbar will always return users to the dashboard
- profile avatar
    - when logged in, the user's avatar appears in the top right of tee navbar. this acts as a dropdown to access a user's own profile, edit their profile, view their liked posts or log out

**"App"**
- the main body of the app is where all content is rendered, nested between the navbar and footer navigation elements
- content such as post and profile pages are rendered in this space dpeending what path the user takes or interaction they make with the site

**Post pages**
- Post pages are comprised of a reusable `PostList` component that have altered filter criteria to render certain posts - through utilisation of a reusable `Question` component to structure the post - in certain order depending on the following:
    - the `currentUser` logged in
    - the path that the user is viewing (trending, like posts etc.)
    - these components are then updated and rerendered when the search bar receives search criteria by use of a resuable custom `setQuery` context hook, which links all the different page types back to the search bar whenever they are in the render, allowing for seamless updating of results/search criteria.
- when logged in, users can interact directly with posts in the post List components, allowing for
    - clicking the comment icon or post image to redirect to a detailed view of the post
    - liking a post - which catalogues it in the user's liked posts view - by clicking the hart icon
    - click on the avatar of the post owner to get options to follow them or view their profile
    - if a user owns a post, a conditional dropdown appears at the to right of a post, allowing for users to edit or delete their post
- followed profiles
    - when logged in, users will always see a horizontal scrollable bar that contsain avatars of all the users that they follow
    - clicking on these avatars allows for users to unfollow/re-follow a user or visit their profile
- infinite scrolling
    - thanks to the `InfiniteScroll` package, list views will continue to scroll through posts so long as there are posts to view. 
        - the api paginates data in the backend, by 10 posts at a time. this helps "chunk" dataload to keep the app/device running smoothly or eat too much data in one sitting.

**Post detail**
- editing a post / deleting a post liking a post
    - due to the nature of the `Question` component being re-usable, the functions and there placements are absolutely iidentical to that when viewing a post in a list view.
- commenting
    - authenticated users can add a comment to a post by usingthe form that is placed directly below the post, above the pre-existeing comments. This does not appear for unauthenticated users.
- comments
    - if authenticated, users can vote on comments by clicking the vote icon on a comment, this will increase the vote count for a post by one, and decrease it by one if uncheckced.
    - comments also use the same dropdown component that the `Question` component uses to all for editing and deleting of comment data

**Create post form**
- the form requires the image and title fields to be mandatory
- content field is optional
- the title field does not allow users to "cheat" a tite by just entering whitespace into the field. it must have a text value.
- the image upload functionality only allows for images under 2mb
    - uploaded images immediately show as a preview before a user sbmit the form
    - on submit, if the data is not valid, the form will not submit and notifications will prompt the user as to why their form data is not acceptable.
    - if it is valid, the post is posted to the database, and the user then is redirected to the path to view their post in the detail view 
- when hitting submit, the submit button is replaced with a loader to signal to the user that the image is i the process of being uploaded to the database.

**Profile List**
- uses the same component that renders the followed profiles on the post list views. except it is passed an additional rop to change its style/orientation.
- as it is the same components being reused, functionality is identical to start of the explanations above

**Profile page**
- if the user is the owner of the profile, they are given a dropdown menu below their profile picture that allows them to update their profile details with one of 3 forms:
    - Edit profile
    - update username
    - change password
    - clicking on any of these dropdowns will redirect the user to a form to handle the change of that data
- the profile page makes use of the `Question` component and the `Comment` component to display a user's most-voted on comment, and al the posts that they have made.
    - as such, functionality on these components are identical to cthat of where they are viewed in a detail or list vew elsewhere in the site.
- whenever a user is followed/unfollowed, posts a question or posts a comment, these figures are update in real time on their profile.


## Visual Features
**Navigation**
- search bar
    - the background of the searchbar makes use of the filter backdrop blend css property. this allows for text to be legible while the background remains trasparent.
- logged in avatar
    - when hovered over or clicked the frame of the avatar shifts, indicatingit is an interactive element
    - when clicked the dropdown menu appears below with the same angular deisgn as the avatar frame
    - dropdown items are highlighted in white when hovered over, indicating interactive options

**Post pages**
-  followed profiles
    - as the followed profiles all re-use the same `Profile` component, every profile adopts the same styles:
        - when hovering a profile avatar the frame shifts like the owners avatar in the navbar
        - when clicking on the avatar and dropdown pops up to display options
    - the followed profiles are housed inside a `FollowedProfiles` component which layers a `overflow-x: scroll` rule with an `overflow-x: hidden` rule, which allows for a scrolling list of followed profiles while also stayaing inline with the main body column of the page.
-`Question` component
    - regardless of image dimesions, post images are fit to the `Question`'s conatiner dimensions using the `object-fit` property
    - under the post title the post auther's name is present with an `Avatar` component, which has all of the same functionality as the places it is also rendered (like `FollowedProfiles`)
    - when a post is liked, the heart icon for the like will change to be solid colour on click.
    - whenever a user likes or comments on a post the count for these metrics update in real time on the page.
    - if a user hasn't posted on a `Question`, a notice saying "No one's weighed in yet. get the ball rolling... " where the top comment would normally be, next to it will have a flashing comment icon, prompting the user make a comment if they feel inclined

**Profile List**
- displays the followed users just like in the post pages using the standard `FollowedProfiles` component
- the smae component is re-used but passed a `listView` boolean which means it will display all profiles as a vertical list, style rules alter the structure of the profile components so that they sit nicer as a vertical list. all other functionality remains the same.


## 404 and 500 Features
Any page or path that is not registered as a route in the app is handled by a "not-found" route which just maintains the style of the site and the user's nav bar. The only difference is that the main body displays a message saying "Sorry lad(y), this path is a dead end"

## Features to Implement in Future
- revise trending posts to show a random selection of top 3 users who have either got the most votes for a comment or posts that have the most likes or comments.
- integrate the profile list as an aside on the main posts page
- display a random post as a left aside on the posts page view, as initially planned in the wireframes

# Bugs
## Resolved Bugs
Profile data from the API not being retreived
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=38354544)

infinite scroll not fetching more data
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=38614674)

## Unresolved Bugs
Infinite Scrolling of comments components
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=38795327)

comments count not updating in real time on questionpage component
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=38795327)

iOS/safari/brave browsers cannot authenticate
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=39419296)

console error (500) when retrieving comments after returning to "/" after viewing a postPage.
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=39425475)

Profile Page: not logging currentUser before render
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=39467773)

pointer events negated on empty navbar space
- Documented in the [Github project view](https://github.com/users/Cal-Rex/projects/11/views/3?pane=issue&itemId=39467934)

____

# Technologies

## Languages Used

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)
    - [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [HTML](https://en.wikipedia.org/wiki/HTML)

## Frameworks
- [Node Package Manager](https://www.npmjs.com/)
- [React](https://react.dev/)
- [Axios](https://axios-http.com/docs/intro)

## Libraries
- [React Bootstrap v4](https://react-bootstrap.netlify.app/)
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)
- [React Router](https://reactrouter.com/en/main)
- [JWT Decode](https://jwt.io/)
- [FontAwesome](https://fontawesome.com/)

## Programs
- [JSHint](https://jshint.com/)
- [eslint](https://eslint.org/)
- [Gitpod](https://gitpod.io/)
- [GitHub](https://github.com/)
- [VS Code](https://code.visualstudio.com/)
- [LucidChart](https://www.lucidchart.com/)
- [MS Powerpoint](https://www.microsoft.com/en-gb/microsoft-365/powerpoint)
- [GIMP 2.10.32](https://www.gimp.org/)
- [Chat GPT](https://chat.openai.com/)
- [Clippy](https://bennettfeely.com/clippy/)
- [Google Chrome](https://www.google.com/intl/en_uk/chrome/dr/download/?brand=YTUH&gclid=EAIaIQobChMImb25hte9gQMVyUxHAR3M0gBGEAAYASAAEgKaX_D_BwE&gclsrc=aw.ds)
- [Opera GX](https://www.opera.com/?utm_campaign=%2300%20-%20WW%20-%20Search%20-%20EN%20-%20Branded&utm_content=37670026502&gclid=EAIaIQobChMIysfYkte9gQMVvYxQBh0LgAFwEAAYASAAEgKOoPD_BwE)
- [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/?utm_medium=paidsearch&utm_source=google-rsa&utm_campaign=fxeu&utm_content=A144_A203_302582&gclid=EAIaIQobChMInp6Tote9gQMVm4lQBh098Q3dEAAYASAAEgItI_D_BwE)
- [Safari](https://www.apple.com/uk/safari/)
- [Heroku](https://heroku.com/)

___

# Testing
Contained as a seperate document [here](/TESTING.md)

___

# DEPLOYMENT
Ths projest is deployed and managed on Heroku

Step-by-step guide on how to deploy:
1. after making an account, log in
2. on the dashbaord go to the dropdown menu and select **Create New App**
3. on the next page, name the project, following the naming conventions specified by heroku
    - beneath this field, choose the region you wish to have your app host from (EU/USA)
    - Finalize the process by selecting **Create App** 

Provided the project is set up and ready to go. connect the repository to the new Heroku repository
4. in the newly created app on heroku, navigate to the deploy tab and link up the project from what ever version control system you are using (heroku Git / GitHub etc).
5. Go to the development environment for the project. in package.json, addhe following to `scripts`:
    - `npm install -g serve`
6. Create a Procfile in the Repository. inside it add the following code:
    - `web: serve -s build`
7. with all of this in place, navigate back to heroku and go the app dashboard, select the deploy tab
8. scroll down and hit deploy.

# Credits

**references and troubleshooting resources**
- https://www.pluralsight.com/guides/override-react-bootstrap-with-custom-css-file
- https://mui.com/system/spacing/
- https://docs.djangoproject.com/en/4.2/ref/contrib/auth/#django.contrib.auth.models.User

**Tutors at the Code Institute:**
- Sarah
- Gemma
- Joanne
- Martin
- Sean
- Ed

**Mentors:**
- Jubril
- Seun

**Testers:** 
- Gerogia Bell
- Christina P Myrvold

**Motivational Pets**
- Kaiba
- Layla