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