# ChefMate

ChefMate is a service that allows its users to have cooking lessons with highly skilled chefs. The lessons conveniently take place at the user's kitchen, via a smartphone or laptop, so the service is remote and global.

The goal of this fictional company is to have a webpage that provides clear and concise information regarding the service it provides, and also allow users to register and pay for their lessons.

## UX

The target audience for this service are individuals older than 20 that enjoy cooking and want to enhance their cooking skills by getting tips from professional chefs.

As a user, I expect to:
* Easily understand what this service offers.
* Get a clear picture of how this service benefits me.
* Be able to quickly navigate between different sets of information.
* Have no difficulties in registering with the service. 

The company expects the website to:
* Provide clear information regarding its service.
* Make the user understand how the service may benefit him/her.
* Have a clear design, easy to navigate.

The website consists of one single page, containing 4 separate sections:
* A header
* A "Our Service" section
* A "Reviews" section
* A "Register" section

A PDF with the wireframes can be found [here](assets/wireframes/wireframes.pdf). Please note that wireframes were provided only for mobile and desktop views. Tablets will take the mobile design if viewed as portrait, and desktop design if viewed as landscape.

## Features
### 1 - Header Section

The [header](assets/wireframes/page_1_header.png) section has a simple layout. It contains a 'hero' image on the background with a very short sentence on top of it, defining what the service is about.

The top part of the screen has a transparent navigation bar, which contains 2 elements:

1. A logo on the left side.
1. Navigation links on the right side.

The navigation links are not immediately visible on mobile design. Instead, the user is presented with a menu icon that, once clicked, displays the navigation links.

The navigation bar is present on all sections of the webpage, allowing the user to quickly jump between sections.

Right beneath the slogan on the header section the user will find a button stating "Tell me more!", which invites the viewer to explore more about the company's service.

### 2 - "Our Service" Section

This [section](assets/wireframes/page_2_our_service.png) is divided into 2 parts:

1. The upper part contains information about what the service can offer to the user.
1. The lower part displays pictures of some of our chefs. Once clicked, the pictures reveal more information about each chef.

The purpose of this section is to allow the viewers to have a clear idea of what this service is about and also understand that our chefs have a broad range of knowledge in various types of cuisine.

### 3 - "Reviews" Section

This [part](assets/wireframes/page_3_reviews.png) of the website is divided into small blocks that provide quotes from individuals of different walks of life, meant to not only inform the user about the benefits of the service, but also allow the user to understand that the service is targeted to various groups of people: students, individuals with busy careers, couples, etc.

### 4 - "Register" Section

The final [section](assets/wireframes/page_4_register.png) of the webpage contains a simple form that allows the user to easily register with the service.
At the bottom, there's a footer providing links to social media platforms, in case the user is interested in more information.

### Features Left to Implement

The webpage needs a sign-up button, a more robust / comprehensive form and backend functionality.

## Technologies Used

The ChefMate website makes use of two Jquery Libraries:

1. For the fixed navbar, [Waypoints](http://imakewebthings.com/waypoints/) was used.
1. For the modals, I used the [code](https://jquerymodal.com/) developed by GitHub user [Kyle Fox](https://github.com/kylefox/).

For icons, the following framework was used: https://ionicons.com/

The following languages were used in the development of this site: HTML, CSS and Javascript.

## Testing

5 elements were tested:

1. The navigation bar
1. The clickable chef pictures on 'Our Service' section
1. The registration form
1. Social Media Links
1. The responsive elements of the webpage

### Navigation Bar

Tested all navigation links on both mobile and desktop (including the black logo on the left side of the fixed navigation), all works as expected.

### Clickable Chef Pictures

Clicking on the chef pictures will display a [modal](assets/finished_project_screenshots/chef_picture.jpg) containing information about the chef. I did encounter a bug where clicking on the same picture for the second time will display a modal with no information. More research needs to be done on this.

### Registration Form

Tested if it's possible to submit a form with incorrect information (no name, invalid email address / password) - this is not possible, as [expected](assets/finished_project_screenshots/register_invalid_form.jpg).
Tested the "Reset Form" button, it does clear the information typed in the form.

### Social Media Links

Social media links will navigate to the expected webpages, opening up on new tabs.

### Responsive Elements

Viewed the page at different resolutions, media queries kick in as expected.
The following resolutions were tested:

* 360x740
* 375x812
* 414x736
* 768x1024
* 800x1280
* 1024x768
* 1280x800
* 1350x900
* 1920x1080

### Software / Devices

The website was tested on the following browsers, all displaying similar behaviour:

* Mozilla Firefox (84.0.2)
* Google Chrome (88.0.4324.104)
* Microsoft Edge (88.0.705.50)

For mobile, the following device was used: Asus Zenphone 5 (Chrome version 87.0.4280.141).


## Deployment

Website was deployed to GitHub (username [evendoom](https://github.com/evendoom/)) via Visual Studio Code. 

Once deployed to GitHub, the following steps were taken to create a GitHub Page: 

1. Access the GitHub [repository](https://github.com/evendoom/chef_mate) via an internet browser.
1. Click 'Settings'.
1. On the new page, scroll down to 'GitHub Pages'.
1. Select branch (main).
1. Select folder (root).
1. Click 'Save'.

## Credits

The following articles / webpages / services were directly used or served as inspiration for this project:

1. Icons were provided by Ion Icons: https://ionicons.com/.
1. The website 'Flat UI Colors' provided inspiration for color palettes: https://flatuicolors.com/.
1. Logo design was done with https://www.freelogodesign.org/.
1. All pictures used on this project were taken from https://unsplash.com/.
1. References to CSS glyphs was found on [CSS-Tricks](https://css-tricks.com/snippets/html/glyphs/).
1. Tips on how to achieve smooth scrolling with just CSS were found at https://spigotdesign.com/smooth-scroll-offset-anchor-links-with-css/#smooth-scroll.
1. For the modals, the following code was used: https://jquerymodal.com/.
1. For the fixed navigation bar, the script can be found at http://imakewebthings.com/waypoints/.
1. The book "Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques, 3rd Edition" written by Ben Frain provided a lot of CSS tips and tricks, inspiring me to use Flexbox and Grid for page layouts.
1. All names and text on this project are fictional and written by myself.

*README.md written by Davide Correia, 2021*