# Y - Testing

# CONTENTS
1. [Automated testing](#automated-testing)
    - [HTML Validation]()
    - [CSS Validation]()
    - [JS Validation]()
    - [Lighthouse]()
2. [Manual testing](#manual-testing)

## Automated testing

### HTML Validation


### CSS Validation


### JS Validation
[JSHint](https://jshint.com/) was used to validate all javascript files. all passed with minor warnings. mainly because React did not translate well into the JSHint validator. screenshots indicate where the validator could not fully read all code. however, all standard syntax issues were addressed.

**App**
[App.js](/readme-assets/testing/javascript/App.png)

**api**
[axiosDefault.js](/readme-assets/testing/javascript/api/axiosDefault.png)

**assets**
[Loader.js](/readme-assets/testing/javascript/assets/Loader.png)

**components**
[Asset.js](/readme-assets/testing/javascript/components/Asset.png)
[Avatar.js](/readme-assets/testing/javascript/components/Avatar.png)
[DropdownOptions.js](/readme-assets/testing/javascript/components/DropdownOptions.png)
[Footer](/readme-assets/testing/javascript/components/Footer.png)
[NavBar.js](/readme-assets/testing/javascript/components/NavBar.png)

**contexts**
[CurrentUserContext.js](/readme-assets/testing/javascript/contexts/CurrentUserContext.png)
[LoadContext.js](/readme-assets/testing/javascript/contexts/LoadContext.png)
[ProfileDataContext.js](/readme-assets/testing/javascript/contexts/ProfileDataContext.png)
[SearchContext.js](/readme-assets/testing/javascript/contexts/SearchContext.png)

**hooks**
[useClickAwayToggle.js](/readme-assets/testing/javascript/hooks/useClickAwayToggle.png)
[useRedirect.js](/readme-assets/testing/javascript/hooks/useRedirect.png)

**pages > auth**
[LoginForm.js](/readme-assets/testing/javascript/pages/auth/LoginForm.png)
[RegistrationForm.js](/readme-assets/testing/javascript/pages/auth/RegistrationForm.png)
[UpdateNonAuthForm.js](/readme-assets/testing/javascript/pages/auth/UpdateNonAuthForm.png)
[UpdatePasswordForm.js](/readme-assets/testing/javascript/pages/auth/UpdatePasswordForm.png)
[UpdateUsernameForm.js](/readme-assets/testing/javascript/pages/auth/UpdateUsernameForm.png)

**pages > comments**
[Comment.js](/readme-assets/testing/javascript/pages/comments/Comment.png)
[EditCommentForm.js](/readme-assets/testing/javascript/pages/comments/EditCommentForm.png)
[PostCommentForm.js](/readme-assets/testing/javascript/pages/comments/PostCommentForm.png)

**pages > profiles**
[FollowedProfiles.js](/readme-assets/testing/javascript/pages/profiles/FollowedProfiles.png)
[Profile.js](/readme-assets/testing/javascript/pages/profiles/Profile.png)
[ProfileList.js](/readme-assets/testing/javascript/pages/profiles/ProfileList.png)
[ProfilePage.js](/readme-assets/testing/javascript/pages/profiles/ProfilePage.png)

**pages > questions**
[EditQuestionForm.js](/readme-assets/testing/javascript/pages/questions/EditQuestionForm.png)
[PostQuestionForm.js](/readme-assets/testing/javascript/pages/questions/PostQuestionForm.png)
[Question.js](/readme-assets/testing/javascript/pages/questions/Question.png)
[QuestionList.js](/readme-assets/testing/javascript/pages/questions/QuestionList.png)
[QuestionPage.js](/readme-assets/testing/javascript/pages/questions/QuestionPage.png)

**utils**
[Utils.js](/readme-assets/testing/javascript/utils/Utils.png)

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