## React frontend coding challenge

You'll be building a simple react component: an avatar picker. It looks like this:

![Pick an avatar](https://github.com/JoinColony/coding-challenge/raw/master/avatar_picker.gif "Pick me!")

The user clicks on the avatar to open a popover which allows the user to choose another avatar from the list. After a click a (fake) HTTP request is made (while a loading spinner runs), the popover closes and the new avatar will appear in the initial view.

### Design and behavior:

* The initially shown avatar is the first in the given list of avatars
* The initial avatar which opens the popover has a border of 1px on hover and active state
* The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
* The currently chosen avatar has a blue border of 3px
* The avatar list icons have grey border and are overlaid by a blue colored area with an opacity of 20% on hover
* The loading spinner should look like shown above. It is also blue.
* A click outside the popover area will result in the popover closing
* Simulate a server request/response by showing the spinner for exactly one second before choosing the avatar
* The popover is closed when an avatar is chosen

### Colors and measurements (we won't count exact pixels):

* Avatar image
  * height: 60px, width: 60px, perfect circles
  * border for initial image: hover, focus 1px, color: rgb(155, 160, 163)
  * avatar list images:
    * border on hover: 3px border, color rgb(155, 160, 163);
    * overlay on hover: color rgb(122, 161, 178), opacity: 20%
    * border spinner, currently active avatar: color: rgb(122, 161, 178)
    * margin between two avatars: 14px
* Popover
  * width: 280px
  * height: variable
  * rounded corners of 2px radius
  * background: rgb(44, 48, 51)
  * drop shadow: color: rgb(102, 102, 102), size 2px, blur 10px
  * padding: 14px
  * triangle: equilateral, 8px each side
* "Choose your avatar" title
  * color: rgb(249, 249, 249)
  * size: 16px
  * margin top and bottom: 14px

### Instructions:

* This is going to be a react component which is being passed just one property: the list of available avatars. This list contains the src of the image file, the avatar label and a unique avatar id. The number of avatars can vary (let's say up to 12). For this example please use the initial avatars provided in the reducer.

A basic react/redux app has been setup, it can be started via command line with `yarn start` and it will run on port 3000. There are some actions already provided to update the state in `src/actions` and a basic reducer with an initial state including a default avatar and the source for the other choices in `src/reducers`, since we're more interested in the UI itself than the tooling 😊.

Feel free to change anything you want, and if you have any questions you can hit me up at sam.simmons@koordinates.com

* Requested browser compatibility: IE11 and up, current versions of Chrome, FF, Safari
* You may split up the main component in as many sub-components as you see fit
* Think of it as a component that will end up in a large, scalable react app. Consider this when writing HTML and CSS as well.
* You're free to use as many third party JS libraries that you see fit

### Lots of extra :gem:s if you provide
* Extra care taken with accessibility
* Tests 🎉
* Nice animation when the menu opens/closes


### How to submit your results:

* The results have to be shared as a git repository
* You can either create a private repository on your favourite git hosting provider (github, gitlab, bitbucket) and then give access to
  * sam.simmons@koordinates.com
* Or create a public repository and send the link to that email addresses
* Or send the whole repository, zipped (including the `.git` directory) to that email address


### Attributions

* Avatar icons by <a href="http://www.freepik.com/free-photos-vectors/people">Freepik</a>
* Original coding challenge adapted from <a href="https://colony.io/">Colony</a>
