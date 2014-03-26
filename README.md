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

July 11
- On Build List and Shared List pages, addition of a "pre-header" to title bar: "Editing My Master List," "My Shared List," "Shared Lists"
- Addition of stripes to top of Build List title bar.
- Layout changes to Shared List page and Shared List Preview title bar and overlay
- On all interior pages, decrease in main header size
- Layout changes to right column of Shared List pages
- Revised favicons (adding transparency and various sizes)

July 16
- DES-92: New "loading" or "progress" animated graphic for use when Quiz data is processing or any time we want to
  prevent user input. Example files: quiz02-progress.html, build-list_progress.html
- DES-90: Re-aligned the "Welcome to your list" window (build-list_intro.html), including adjustment for larger screens.
  (changes in style.css and fluid-layout.css)
- Adjusted list item spacing on the Follow Friends page to improve appearance of multi-row lists. (changes in style.css)
- Adjusted font size and width of definition list headers on Create my profile (create-my-profile.html) to prevent
  wrapping on narrow screens (changes in style.css)

July 24
- DES-95: Added "Find more parents" button to "Lists I'm following" sidebar. Removed text blurb and link.
  See: build-list02_adding-editing-choose.html
- DES-100: Changed layout in Search modal window. See: product-searchB.html
- CSS changes are in style.css and fluid-layout.css
- Also, in "build-list.html," added the "Editing My Master List" pre-header for consistency.

July 29
- DES-99: text and layout adjustments to Sign Up modal and Log in modal (sign-up.html, log-in.html, style.css)
- Sign Up example: http://soybox.com/mamajamas/sign-up.html
- Log In example: http://soybox.com/mamajamas/log-in.html
- (Included Ryan's new ID selector for product search)

Jul 30
- DES-93: New "+ Add Another" buttons on Build List. Please see: build-list_add-another.html
- Also, a CSS change affecting the alignment of + marks on "Add to My List" buttons of the public list page.

Aug 1
- Revised language on Build List Intro page: build-list_intro.html

Aug 6
- DES-105: "Following" state for public list "Follow" button. Please see: published-list-follow.html and published-list-following.html
- New placement of Follow button and profile name
- "Shared by" header and arrow in third column
- Expandable profile text (uses jquery.expander.min.js and expander-options.js)
- Removal of title pre-header from Build List and Public List title header

Aug 13
- DES-114: Added "Start Your List" button to main header of public list, adjusted position of other header elements
- DES-94: Updated homepage thumbnail images and linked them to a modal "gallery" window. Uses SimpleModal jQuery plugin.
- DES-89: Added bullets and color to right column list on home page.
- New "X" icon image to fix problems with web font close button not appearing in IE9 (in home page gallery)
- Added conditional comment to HEAD to allow targeting of IE9

Aug 14
- DES-100: Adjusted product search modal window language and styling.
- DES-102: Added numbers to ratings in product search pop-up info balloons.
- DES-108: Added Privacy Policy to Terms of Service, to be linked from footer as "Privacy & Terms"
- Please note addition of jquery.tabs.js plugin, used on the Privacy & terms page, privacy-policy_terms-of-service.html
- DES-89: Adjusted styling of home page list.

Aug 21
- DES-122: Made quiz image labels visible, with slight opacity change on hover
- DES-124: Removed pointer from co-sleeping quiz image

Aug 22
- DES-112: SimpleModal window triggered by "Follow" button on public list. (published-list-follow_modal.html)
- Please note updated jquery.simplemodal.min.js (changed default opacity)
- Please note updated icon_close.png graphic (changed transparency and adjusted image)
- Updated gallery.js (used for home page thumbnails gallery)
- Added jquery.cookie.js (for remembering navigation state in privacy-policy_terms-of-service.html)

Sept 3
- DES-132: Friends Lists and Find Friends: "my-friends.html", "my-friends_find-friends.html",
  "my-friends_find-friends_no-auth.html"
- my-friends_find-friends.html uses js tabs for the "Facebook," "Gmail," "Invite a Friend" navigation
- my-friends_find-friends_no-auth.html shows content for users who have not authorized their account to
  access Facebook or Gmail
- Friends lists on the above pages use javascript to dynamically set the height of the list column, allowing it to
  scroll independently.
- DES-126: modified the slider arrow graphic (in images/quiz) and CSS (quiz.css) to include a hover state (along
  with the disabled and active states)
- DES-125: CSS change (in quiz.css) to center text on the quiz questions
- CSS changes (to style.css and fluid-layout.css) include layout adjustments to header (affecting placement and
  size of search box) and changes to page background color and borders.

...

Oct 22
- DES-152
- DES-154
- DES-155

Oct 28
- DES-152: build-list.html — Please see new "add item" at bottom of list. Pressing "add new" would make yellow
  new item row appear directly beneath. Note "priority" selection menu, which defaults to "Consider."
- DES-153: build-list_intro.html — Updated colors and overlay setup for build list intro. "Done" button should
  close modal and hide tooltips. (Uses simplemodal framework)
- DES-164: builst-list.html — Clicking "Choose" in the "Towel" row activates choose modal. Updated rating
  graphics to use stars instead of eggs. Updated modal to use Simplemodal framework.

Nov 6
- DES-147: Added privacy settings status and collapsible panel to the Shared List Preview screen.
  Icon and text should show current setting. When user clicks radio buttons to changes the setting, the change
  should be reflected in the privacy setting status (icon and text) above. Settings saved when user clicks "Save"
  Please see: shared-list-preview.html, shared-list-preview_mj.html, shared-list-preview_rg.html
- DES-149: New "My Settings" page, accessible from the upper-right dropdown menu. Settings should work as described above. (Please note that the left-hand nav "Email" link follows Angie's mockup, but there is no setting for that page yet.) See: my-settings.html, my-settings_mj.html and my-settings_rg.html
- DES-477: Item rating modal. On Build List, when user selects "have" from a "need/have" menu, a modal should appear asking if the user would like to rate the item. Please see: build-list-rate.html
- CSS changes includes the above, as well code formatting changes and removal of references to the old 3-step progress bar.

Nov 11
- DES-112: modal for non-logged-in users clicking "follow" on shared list. See: shared-list-modal.html [click "Follow"]
- DES-113: modal for non-logged-in users clicking "add" on shared list. See: shared-list-modal.html [click "Add"]
- DES-156: modal prompting users to follow friends. See: shared-list-followfriends.html
- DES-169: adjustments to shared list layout. Tighter spacing, smaller fonts, bold "has" and "needs." 
- In fluid-layout.css, removed old comments

Nov 13
- DES-167: Added new quiz question allowing user to get product suggestions or build list from scratch: quiz09.html
- Changed quiz progress bar CSS to account for additional question

Nov 15
- DES-168: Added "Change" button that appears when product name in Edit List is hovered.

Nov 21
- DES-181. Updated Terms of Service and Privacy pages (terms-of-service.html, privacy-policy.html)

Dec 2
- DES-166: Change to appearance of Invite/Invited button on Browse Lists page
- DES-188: Changes to Browse Lists pages, formerly Find Friends (browse-lists_discover.html)
- DES-189: New buttons for non-authorized app pages (browse-lists_discover_no-auth_fb.html,  
   browse-lists_discover_no-auth_gmail.html)
- DES-193: CSS fix for broken Home page footer (changed home.html to show collapsed footer)
- DES-191: Non-logged-in view of Browse Lists (browse-lists_discover_nologin.html)
- DEV-432: Changed scrolling behavior on Browse Lists (please note addition of JS)

Jan 11
- corrected quiz.css for new quiz question

Jan 13
- DES-178: New home page (home.html, with new images and changes to fluid-layout.css and style.css).
- DES-182: Color change for Build List Review/comment link.
- DES-204: Shading on Build List priority headers
- In Home page footer mennu, "About" link is now hidden

Jan 14
- DES-176: Home page: text changes (in #secondary and #tertiary), alignment changes to three boxes content
- DEV-553: Quiz formatting fix for 1st question margins (adjustment to quiz.css)
- Included Ryan's fixes for beta on interior pages and modal headers on Home page

Jan 24
- DES-111: category dropdown menu for "Add New Item" in "All" category:
- collapsed menu: https://github.com/aschiavoni/mamajamas-design/blob/master/build-list_all.html
- expanded menu: https://github.com/aschiavoni/mamajamas-design/blob/master/build-list_all-open.html
- with error message: https://github.com/aschiavoni/mamajamas-design/blob/master/build-list_all-error.html

Jan 31
- DES-206: product details modal window. Example: http://www.soybox.com/mamajamas/build-list_need-have_modal.html
- DES-215: move footer links to menu in head. Examples: http://soybox.com/mamajamas/build-list.html, http://soybox.com/mamajamas/build-list-loggedin.html

Feb 4
- DES-199: add "Filter by age" dropdown to build list and shared list
- example: http://soybox.com/mamajamas/build-list.html
- example: http://soybox.com/mamajamas/build-list_sortopen.html
- example: http://soybox.com/mamajamas/shared-list.html
- example: http://soybox.com/mamajamas/shared-list_sortopen.html

Feb 8
- DES-217: show/hide recommendations button and recommended product tags. 
- example: http://soybox.com/mamajamas/build-list_reco.html
- example: http://soybox.com/mamajamas/build-list_reco2.html
- Notifications CSS position change. 
- example: http://soybox.com/mamajamas/home.html
- example: http://soybox.com/mamajamas/build-list_notification.html

Feb 9
- DES-104: "copy list" button
- Example: http://soybox.com/mamajamas/shared-list-loggedin.html
- Includes width-dependent adjustment to title bar button text size

Mar 13
- DES-220: Added profile button to top of "create profile" page and adjusted alignment

Mar 19
- DES-221: improvements to recommended products list option quiz question
- changed quiz modals to use simplemodal
- Please see: 
  quiz01.html
  quiz02-progress.html
  quiz02.html
  quiz02b.html
  quiz03a.html
  quiz03b.html
  quiz04.html
  quiz06.html
  quiz06b.html
  quiz_recommend.html
  quiz_zipcode.html

Mar 26
- FAQ page, faq.html, should be linked from the global upper-right dropdown menu. See also here: http://soybox.com/mamajamas/faq.html
- CSS changes affecting Home page colors and alignment. See: http://soybox.com/mamajamas/home.html
- Added Ryan's title width adjustment. (Can not recall how I settled on the original narrower value, but I think it was for relatively narrow screens)
