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

Dec. 18: Added high-res logo, changed appearance of categories menu
- new high-res logo, logo@2x.png, supports retina display and other high-resolution displays
- CSS media queries use high-res logo on devices that support it, normal logo on standard displays
- removed top and bottom borders on product category links in left menu
- changed background color of selected product category
