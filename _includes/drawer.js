$(function(){
  $(".drawer--left").drawer({
    class: {
      nav: 'drawer-nav--left',
      toggle: 'drawer-toggle--left',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    }
  });

    $("#openRight").on("click",function(){
  	drawerRight();
  });
});
function drawerRight(){
  $("#right").drawer("open");
}