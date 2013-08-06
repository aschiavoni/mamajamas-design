// you can override default options globally, so they apply to every .expander() call
$.expander.defaults.slicePoint = 200;

$(document).ready(function() {
  // override default options (also overrides global overrides)
  $('div.expandable').expander({
    expandText:       'Show more', // default is 'read more'
    userCollapseText: 'Show less',  // default is 'read less'
    expandEffect: 'slideDown',
    collapseEffect: 'slideUp'
  });

});
