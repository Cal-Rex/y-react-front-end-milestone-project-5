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

[put learning outcome grids here]

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
- _as a user, i want to be able to create an account so tha i can access the platform_
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
- _As a user, i want to be able to edit any content that i publish, to amend spelling errors or upload a better picture_
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
## Programs

# Testing
Contained as a seperate document [here]()

# DEPLOYMENT
Step-by-step guide on how to deploy

# Credits

# Acknowledgements 