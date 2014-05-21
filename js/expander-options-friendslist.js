// you can override default options globally, so they apply to every .expander() call
$.expander.defaults.slicePoint = 132;

$(document).ready(function() {
  // override default options (also overrides global overrides)
  $('div.expandable').expander({
    expandPrefix:     '... ',
	expandText:       'Expand', // default is 'read more'
    userCollapseText: 'Collapse',  // default is 'read less'
    expandEffect: 'show',
  	expandSpeed: 0,
  	collapseEffect: 'hide',
  	collapseSpeed: 0
  });

});
