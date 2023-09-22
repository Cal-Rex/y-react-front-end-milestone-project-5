# Y - Testing

# CONTENTS
1. [Automated testing](#automated-testing)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JS Validation](#js-validation)
    - [Lighthouse](#lighthouse)
2. [Manual testing](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Device Testing](#device-testing)
    - [Browser Testing](#browser-testing)
    - [Peer Testing](#peer-testing)

## Automated testing


### HTML Validation
[W3 Markup Validator](https://validator.w3.org/#validate_by_input) was used to validate project HTML.

| index.html |
| :-: |
| ![html](/readme-assets/testing/html/html.png) |
| info markers are only relating to trailing slashes on style elements. It has been clarified that this is acceptable |
| Error markers are flagged due to react specific syntax and should be disregarded |

### CSS Validation
[W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator) was used to Validate all CSS for the project. All CSS was compiled into a single document and tested, which yielded the following results:

| errors |
| :-: |
| ![css error check](/readme-assets/testing/css/css-1.png) |
| Testing resulted in no errors |

| warnings |
| :-: |
| ![css warnings](/readme-assets//testing//css/css-2.png) |
| the following warnings were created due to additional extensions being added so that code would be read by a wider range of browsers |
| active and focus psuedo elements for DropdownContainer are deliberate as these are in place to override bootstrap styles |


### JS Validation
[JSHint](https://jshint.com/) was used to validate all javascript files. all passed with minor warnings. mainly because React did not translate well into the JSHint validator. screenshots indicate where the validator could not fully read all code. however, all standard syntax issues were addressed.

**App**<br/>
[App.js](/readme-assets/testing/javascript/App.png)<br/>

**api**<br/>
[axiosDefault.js](/readme-assets/testing/javascript/api/axiosDefault.png)<br/>

**assets**<br/>
[Loader.js](/readme-assets/testing/javascript/assets/Loader.png)<br/>

**components**<br/>
[Asset.js](/readme-assets/testing/javascript/components/Asset.png)<br/>
[Avatar.js](/readme-assets/testing/javascript/components/Avatar.png)<br/>
[DropdownOptions.js](/readme-assets/testing/javascript/components/DropdownOptions.png)<br/>
[Footer](/readme-assets/testing/javascript/components/Footer.png)<br/>
[NavBar.js](/readme-assets/testing/javascript/components/NavBar.png)<br/>

**contexts**<br/>
[CurrentUserContext.js](/readme-assets/testing/javascript/contexts/CurrentUserContext.png)<br/>
[LoadContext.js](/readme-assets/testing/javascript/contexts/LoadContext.png)<br/>
[ProfileDataContext.js](/readme-assets/testing/javascript/contexts/ProfileDataContext.png)<br/>
[SearchContext.js](/readme-assets/testing/javascript/contexts/SearchContext.png)<br/>

**hooks**<br/>
[useClickAwayToggle.js](/readme-assets/testing/javascript/hooks/useClickAwayToggle.png)<br/>
[useRedirect.js](/readme-assets/testing/javascript/hooks/useRedirect.png)<br/>

**pages > auth**<br/>
[LoginForm.js](/readme-assets/testing/javascript/pages/auth/LoginForm.png)<br/>
[RegistrationForm.js](/readme-assets/testing/javascript/pages/auth/RegistrationForm.png)<br/>
[UpdateNonAuthForm.js](/readme-assets/testing/javascript/pages/auth/UpdateNonAuthForm.png)<br/>
[UpdatePasswordForm.js](/readme-assets/testing/javascript/pages/auth/UpdatePasswordForm.png)<br/>
[UpdateUsernameForm.js](/readme-assets/testing/javascript/pages/auth/UpdateUsernameForm.png)<br/>

**pages > comments**<br/>
[Comment.js](/readme-assets/testing/javascript/pages/comments/Comment.png)<br/>
[EditCommentForm.js](/readme-assets/testing/javascript/pages/comments/EditCommentForm.png)<br/>
[PostCommentForm.js](/readme-assets/testing/javascript/pages/comments/PostCommentForm.png)<br/>

**pages > profiles**<br/>
[FollowedProfiles.js](/readme-assets/testing/javascript/pages/profiles/FollowedProfiles.png)<br/>
[Profile.js](/readme-assets/testing/javascript/pages/profiles/Profile.png)<br/>
[ProfileList.js](/readme-assets/testing/javascript/pages/profiles/ProfileList.png)<br/>
[ProfilePage.js](/readme-assets/testing/javascript/pages/profiles/ProfilePage.png)<br/>

**pages > questions**<br/>
[EditQuestionForm.js](/readme-assets/testing/javascript/pages/questions/EditQuestionForm.png)<br/>
[PostQuestionForm.js](/readme-assets/testing/javascript/pages/questions/PostQuestionForm.png)<br/>
[Question.js](/readme-assets/testing/javascript/pages/questions/Question.png)<br/>
[QuestionList.js](/readme-assets/testing/javascript/pages/questions/QuestionList.png)<br/>
[QuestionPage.js](/readme-assets/testing/javascript/pages/questions/QuestionPage.png)<br/>

**utils**<br/>
[Utils.js](/readme-assets/testing/javascript/utils/Utils.png)<br/>

### Lighthouse

| index / liked posts / trending posts |
| :-: |
| ![index](/readme-assets/testing/lighthouse/index.png) |
| All 3 pages use the same component, so return the same results: |
| Performance is dropped into orange due to the fact the page allows for users to upload their own images, although there is a filesize restriction, this still allows for upload of images that lighthouse considers to be a heavy payload when stacked with multiple images on a page. |

| Registration Page |
| :-: |
| ![registration](/readme-assets/testing/lighthouse/registration.png) |
| no issues |

| Log in page |
| :-: |
| ![login](/readme-assets/testing/lighthouse/login.png) |
| no issues |

| Post Page |
| :-: |
| ![Post Page](/readme-assets/testing/lighthouse/post-page.png) |
| performance is dropped due to the nature of user-uploaded images not being optimised for display. | 
| Best practices dropped to 75 due to lighthouse not recognising image size style rules being determined by react component props |

| Create Post Page |
| :-: |
| ![Create Post](/readme-assets/testing/lighthouse/create-post.png) |
| no issues |

| Edit Post Page |
| :-: |
| ![Edit Post](/readme-assets/testing/lighthouse/edit-post.png) |
| performance is dropped due to the nature of user-uploaded images not being optimised for display. |

| Profile List Page |
| :-: |
| ![Profile List](/readme-assets/testing/lighthouse/profile-list.png) |
| Best practices dropped to 75 due to lighthouse not recognising image size style rules being determined by react component props |

| Profile Page |
| :-: |
| ![Profile Page](/readme-assets/testing/lighthouse/profile-page.png) |
| No Issues |


## Manual Testing

### Testing User Stories

**Navigation**

| Goals | Achieved by |
| :---- | :---------- |
| _As a user, i want to be able to seemlessly navigate every page with a central navigation feature_ | every page element relevant to a user is easily nafigated throught the footer navigation or through the avatar dropdown menu. making navigation to any part of the site less than 2 clicks away at all times |
| _As a user, i want to be prompted to log in to view content that can only be viewed by people with accounts_ | any time a site feature is clicked by an unauthenticated user, that user is redirected to the login page, which subsequently has a link to register in the event theydo not have account already |
| _As a user, i want to be able to navigate through pages and posts with minimal waiting time_ | async functions and use of react hooks provide a seamless and instantanious transition between site pages |

**Authentication**

| Goals | Achieved by |
| :---- | :---------- |
| _as a user, i want to be able to create an account so that i can access the platform_ | users can register with a simple registration form |
| _as a user, i want to be able to log in with my own account so i can partake in user-only features_ | users can log in with a simple log in form |
| _as a user, i want to be able to see if i am logged in at any given moment, so i know to log out or switch accounts if i need to_ | user status is shown in the top right of the page, displaying login or registration options if unauthenticated. if authenticated, users will see their profile avatar instead which also acts as a dropdown menu for user interactions |
| _as a user, i want to be able to remain logged-in to my account until i decide to sign out_ | use of axios interceptors and context components allow for routine refresing and management of account access tokens. allowing a persistent login status |

**Creating and viewing content**

| Goals | Achieved by |
| :---- | :---------- |
| _As a user, i want to be able to make my own posts/pose my own questions for people to interact with_ | a post create form allows users to create post content |
| _As a user, i want to be able to view questions/posts people have posted_ | the index/dashboard of the site displays posts by users, the trending tab orders all posts on the site by most commented, users can also view posts they have liked via their avatar dropdown menu |
| _As a user, i want to be able to view comments/answers and their vote count_ | all posts in list view display the top voted comment for a post in addition to its vote count. However total vote count for a post has not been implemented in this iteration |
| _As a user, i want to be able to vote on answers that i think are the best for a question/post_ | comments have a vote functionality |
| _As a user, i want to be able to see the Profiles of the people that make posts and comments_ | profile avatars will always show up on any posted content. the avatar contains a dropdown to fiew the profile of that given user |
| _As a user, i want to be able to comment/answer other people's posts | all posts can be commented on using a comment form on the post page if a user is authenticated |

**posts / individual posts**

| Goals | Achieved by |
| :---- | :---------- |
| _As a user, i want to view the most recent posts whenever i log in_ | posts on the dashboard are ordered by the most recently created by default |
| _As a user, i want to be able to filter posts by profiles that i am interested in_ | initially the scope for the dashboard of the project. however, this was not feasible to implement within this iteration of the project development window |
| _As a user, i want to be able to keep track of all the posts i have interacted with_ | users can view the posts they have liked via the avatr dropdown menu in the nav bar. |
| _As a user, i want to be able to seemlessley scroll through posts without having to wait for another page to load_ | the react infinite scroll library/component was used on list components to achieve this. paginsation was implemented in the API to manage incremental data load. |
| _As a user, i want to see what the most popular answer/comment is for a post when i am scrolling through posts to see what the general opinion is_ | by default, all question components display the most voted comment for a post when in list view |
| _As a user, i want to be able to view all the comments/answers to a post_ | all comments for a post can be viewed on any post's post page when clicking on the image or the comment icon |
| _As a user, i want to be able to edit any questions that i publish, to amend spelling errors or upload a better picture_ | all posts have an edit feature which gives access to an edit post form via a dropdown in the top right of the post, provided the user is the owner of the post |
| _As a user, i want to be able to edit any comments that i make so i can amend spelling errors_ | all comments have an edit feature which gives access to an edit comment form via a dropdown at the right of the comment, provided the user is the owner of the comment |
| _As a user, i want to be able to see posts that have been voted on the most, to see what is trending on the site_ | reliant on the vote tallying of a post, this goal was out of scope for this iteration |

**Profiles**

| Goals | Achieved by |
| :---- | :---------- |
| _As a user, i want to be able to view other user's public profiles and see what they have contributed to_ | any user's public profile can be viewed by another user by clicking on that users avatar in a post or comment or profile list and selecting the profile option from the dropdown menu |
| _As a user, i want to be able to Follow other users, so i have easier access to the content they create_ | authenticated users can follow another user by visiting the user's profile and selecting the follow button, or selecting follow from the avatar dropdown |
| _As a user, i want to be able to edit my own profile at any time, so i can keep my profile photo and details up to date_ | Authenticated users can edit non-auth related profile info from their navbar dropdow, or, auth-related information vit the edit button on their profile page |
| _As a user, i want to see what the top-voted comments/answers a profile has made_ | profiles display the most voted commet of a user on their profile page |
| _As a user, i want to be able to see the questions/posts a profile has made so i can decide if i like their content_ | the profile page displays all posts that a user has made |
| _As a user, i want to be able to update my username and password to keep my account secure_ | auth-related account information can be updated via a dropdown menu on the profile page. |


### Device Testing
This project was tested on the following devices:
- Dell Latitude 1310 laptop
- Google Pixel 6Pro
- iPhone 8


### Browser Testing
This project was tested on the following browsers:
- Google Chrome (PC)
- Google Chrome (Android)
- Mozilla Firefox (PC)
- Safari (iPhone 8)
- Opera (PC)

Due to settings in iOS and Safari, full testing could not be conducted because of restrictons of 3rd party cookies, preventing successful authentication.

### Peer Testing
additional testing was conducted by Georgia Bell and Christina Myrvold. The following issues were raised:
- _"when i create an account, i am not immediately logged in and i was wondering if my account creation was successful"_
    - this was a known bug st the time and has been logged to the backlog for fixing at a later date.
- _"So whenever I’m scrolling and I press the upvote, nothing happens, but as soon as I open the post by pressing the image, that press HAS been registered"_
    - voteing in list view was planned to be disabled for this iteration. bug has been logged to project backlog

### full manual testing

**NavBar**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- | 
| site logo | Links back to home page | clicked | navigates to home page | pass |
| search | posts on page are filtered by post and by usernames | entering text into bar | post list on page updates | pass |
| profile Avatar | whn clicked, dropdown menu appears, options should redirect user to the necessary page | click avatar and click each dropdown option | all links lead to where hey are supposed to go | pass |

**Followed profile list**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- | 
| other user avatar | when clicked, authenticated user gets option to follow/unfollow or view profile, unauthenticated users can view profile | clicked as authenticated user, clicked as unauthenticated user | exppected function / redirection | pass |
| profile list showing different users depending on login status | authenticated users will see the profiles they have followed, unauthenticated users will see profiles that have voted the most | viewing page as authenticated / unathenticated user | expected | pass |

**Footer**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- | 
| Trending posts icon | Clicking will redirect user to most commented on posts | clicked on | expected | pass |
| create post icon | Clicking will redirect to the create post form | clicked on | expected | pass |
| profile List icon | clicking will redirect to te profile list view here all active public profiles on the site can be viewed | clicked on | expected | pass |

**index, trending, liked postlist pages**
while testing was conducted individually for each page, each page is identical in navigaton and functionality, just the filter for posts has changed.

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- | 
| edit/delete dropdown o a post | if a post is awned by authenticated user, user can click sllipsis in top right of post to access dropdown to edit the post via a form or delete the post | viewed as autheticated user, click to navigate to edit form, clicked to delete a post, viewed as unauthenticated user | expected | pass |
| clicking on a post's image will redirect ot the postPage view | <-- | clicked on | expected | pass |
| like a post | click heart on post will like post | clicked on | heart icon updates on click to show user has liked, post appears i user's liked filter, unauthenticated users can't click, owners cannot like their own post | pass |
| likes tracking | whenever a post is liked, the number of likes on the post increases | clicked on | expected | pass |
| clicking on comment icon leads to comment form | <-- | clicked on | expected | pass |
| comments tracking | whenever a post is commet on, the number of comments on the post increases | commented on post | expected | pass |

**post create form**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------------- | ----------------- | ------ | --------- |




