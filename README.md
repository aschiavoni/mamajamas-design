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