mamajamas-design
================

Mamajamas markup and css



Oct 6: Added "Create Account" modal window, adjustments to site-wide template. --Rick

Site-wide template changes:
- moved #progress DIV into header
- adjusted layout dimensions 

Modal window notes:
- Relevant code starts at line 74 of create-account1.html (site-wide template used as example underlay).
- Inserting inline style "display:block" into #modal-wrap makes modal layer visible.
- Vertical positioning is currently hard-coded in CSS with a negative top margin dependent on modal window height. Dynamically setting an inline style via JS might be a better solution.
- Styling of FB and Create Account with Email Address buttons to be refined later.

Oct 6, 11:23 PM: Added "Create Account" (username, email, pw) screen and adjustments to "Save your list" (create account 1)
- jQuery plugin from http://fuelyourcoding.com/scripts/infield/ allows in-field labels that fade on field focus

Oct 8: Added "Log in" modal window example (login.html), based on create-account2.html

Oct 10: Added "Follow Moms"
- uses "ss-standard" webfont for checkmarks and "info" icon
- includes new CSS class added to #hed-wrap for progress bar backgroung

Oct 19: FB buttons, buttons example page
- added "Connect with Facebook" graphic to create-account1.html
- added "Connect with Facebook" button to log-in.html
- added buttons.html example page

Nov. 1: Visited link color, layout, buttons adjustments
- Commented out boilerplate.css link colors
- Removed (for now) smartphone and tablet-sized screen layout adjustments
- Adjusted button padding and button icon alignment

Nov. 7: Build List, Layout changes
- Added screens showing Build List product listings in various states — will require behaviors added via JS
- Added wide layout — activated via media query when browser window width is greater than 1000px
- (Build List is still a work in progress!)

Nov. 11: Progress bar enhancements
- Added visual design to progress bar through CSS and background image sprite, requiring changes to HTML
- Please see example files: progressbar1.html, progressbar2.html and progressbar3.html

Nov. 29: Build List dropdown menus, FB button changes
- Added mockups showing When To Buy and Priority dropdown selection menus on the Build List page
- Changed appearance of the Login with Facebook buttons on the Create Account and Log in pages
- Fixed IE button color and width problems

Dec. 6:  Added product note "open" state, new Sign Up modal, style changes to Log In modal, drop-down menu fix
- Changed product notes to one-line preview (truncated with CSS): see Build List screens
- Added "open" state" to show full product note when note preview is clicked (see: build-list05_note-open.html)
- New Sign Up modal window (see sign-up.html)
- Changes to Log In modal (see log-in.html)
- Added high z-index to When to Buy and Priority drop-down menus

Dec. 18 A: Added high-res logo, changed appearance of categories menu
- new high-res logo, logo@2x.png, supports retina display and other high-resolution displays
- CSS media queries use high-res logo on devices that support it, normal logo on standard displays
- removed top and bottom borders on product category links in left menu
- changed background color of selected product category

Dec. 18 B: CSS adjustments for jquery auto-complete widget
- changed font from Verdana to inherit the font family and size set for the parent element
- added drop-shadow to auto-complete panel

Dec. 23: Added Follow sidebar, adjusted selected category appearance, removed retina.js from Build List pages
- Ideal size of profile images for Follow sidebar is 80px, which is twice the size shown on the page, 40px. This will ensure support for retina displays.
- Following the decision to use ony high-res product images, removed retina.js links on the Build List pages.
- Gave the selected category a more tab-like appearance, connecting it visually to the middle column.

Dec. 27: Added New Item markup, adjusted button colors, added high-res priority icons

Dec. 28: 
- Adjusted selected category appearance: added more space above the category list and more space to the left of the products list
- Adjusted alignment of the checkmark on the Follow page so it doesn't slip off the photos
- Made new default photo for the Follow page (note the new file type and name): /images/profile_photo-default.png
- Included Ryan's adjustments for Follow tag removal and appearance of Sign Up collapsible panel link

2013
Jan. 9:
- Added HTML (and CSS) for Create My Profile: /create-my-profile.html
- CSS change addresses vertical squishing on tall product images
- Color change to checkmark graphic (and high-res version): "/images/icons_checkboxes.png and /images/icons_checkboxes@2x.png"

Jan. 17:
- Added markup for the My Account link and dropdown menu.
- Default profile photo (if user has not uploaded their own) can be /images/profile_photo-default-s.png

Jan. 22:
- Added markup for Published List Preview (published-list-preview.html)
- Supporting files in /images and /css

Jan. 26:
- Markup for Published List (published List Preview minus the message overlay DIV)

Feb. 1
- Added markup for marking the sorted column in the products list. Current sorting column header needs the class, "sorting."
- Changed cursor on the column headers to pointer.

Feb. 15
- Changed styling for user email link in My Account drop-down, including Ryan's changes:
-- user email link tag can now be replaced with span tags to remove link without losing menu styling
-- if user email is a link, background and text color will not change on hover, and cursor won't change to pointer
- My Account drop down menu is viewable in the files build-list02_adding-editing.html and myaccount-dropdown.html

Mar. 8
- Added screens for Quiz step 1 and step 2 (quiz01.html and quiz02x.html)
- Note: change inline "display" style to control quiz sub-menu visibility

Mar. 10
- Added screen for Quiz step 3 (quiz03.html)
- Notes: 
-- Adding class "q-selected" when user clicks a choice would control visibility of the checkmark overlays.
-- "Next" button should only be given color emphasis (via addition of "bt-color" class) after user makes a selection.

Mar. 15
- Fixes for issues DES-56 (dropdown z-index under-lap) and DES-57 (multiple choice un-selectable checkmark)
- Links in dropdown menus now fill the width of the menu.
- Question 2 files:
- --    quiz02.html : default state. "Next" button is not highlighted (no "bt-color" class).
- --    quiz02a.html : boxed text has been clicked, expanding dropdown menu.
- --    quiz02b.html : a selection has been made, revealing second question.
- --    quiz02c.html : second question's boxed text has been clicked, expanding dropdown menu.
- --    quiz02d.html : selection has been made in second dropdown menu, collapsing the dropdown. "Next" button gains highlight color.
- --    quiz02e.html : user has clicked on first question's boxed text, expanding the dropdown menu again.
- --    Note: clicking outside of an expanded dropdpwn menu should close the menu.
- Question 3 files:
- --    quiz03a.html : default state. "Next" button is not highlighted until a choice has been made.
- --    quiz03b.html : "Pump" has been selected. The "next" button gains color highlight through the "bt-color" class. Clicking again on "Pump" will deselect it.

Mar. 17
- Added mark-up for Quiz screen 4
- Adjusted quiz CSS to darken image edges (for better definition) and change how checkmark visibility works.

Mar. 18
- Added mark-up and images for Quiz screen 6 (slider): quiz06.html
- quiz06b.html shows slider arrow positioned one tick to the left

Mar. 25
- Added mark-up for Quiz screen 8 (zip code input): quiz08.html
- Added cropped and resized images for Quiz 7 (in images/quiz)

April 2
- Added a generic form page (form.html)

May 7
- Added product-search.html, showing tab 1 of new search modal, with pop-up info ballons
- New rating images sprites, arrow for info balloon. Carousel arrows for future use. Dummy product images for search modal mockup (in images/search/).
- Including Ryan's adjustments to quiz.css and standalone form CSS in style.css

May 22
- Formatting changes to Product Search modal (product-search.html), including removal of "carousel" class and change to product detail pop-ups.
- New page type for Terms of Service page (terms.html)
- Build List adjustments: removed "Get Recommendations" buttons and changed "Share" button to "Publish"

May 23
- CSS edit to allow "Delete" hover submenu to appear on un-filled listings on the Build List screen.
- Edited Build List mockups to include "Delete" button on un-filled product listings.

May 31
- In product-search.html: New "Add your own" field in collapsible panel, layout, font and other styling adjustments.
- In build-list02_adding-editing-choose.html: New "choose-bt" class, added to TR after "edit-mode" class, allows placement of "Choose" button after product name field.
  Compare to no-Choose-button version in "build-list02_adding-editing.html"

June 8
- Added Build List Intro screen: build-list_intro.html
- Deleted Reenie Beanie web font on all but home.html and build-list_intro.html
- Added 600 font weight to Open Sans web font link in HEAD
- Added DIV to progress bar for placement of border graphic
- Added "All" link to Build List category list
- Changed "Publish" button to "Share"
- Added standard-resolution versions of some graphics that were previously only high-res
- Restored sample thumbnail images for "thumbnails.html" example file
- Added footer links

June 12
- Added new About Mamajamas page: about.html and supporting images.

July 1
- Added CSS for disabled "Share" button on Build List. Please see "build-list02_adding-editing.html"
- Added CSS and new images for half-stars and half-eggs. Use .egg-half and .star-half to display half- egg and star graphics.
- Added CSS for "No ratings" text on Build List, to replace eggs when no ratings are available. See: build-list04_when-priority1.html
