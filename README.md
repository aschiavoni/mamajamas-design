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
