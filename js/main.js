$(document).ready(function() {
  $("a[href^='http:'], a[href^='https:']").not("[href*='mathiaslindholm.com']").attr('target','_blank');
  $("a[href^='http:'], a[href^='https:']").not("[href*='localhost']").attr('target','_blank');
  $("a[href$='.pdf']").attr('target','_blank');
});