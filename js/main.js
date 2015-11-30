$(document).ready(function() {
  // open links and documents in new tab
  $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr('target','_blank');
  $("a[href^='http:'], a[href^='https:']").not("[href*='localhost']").attr('target','_blank');
  $("a[href$='.pdf']").attr('target','_blank');
});