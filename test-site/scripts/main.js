$(function() {
  $(".menu>ul>li").hover(function() {
      $(this.querySelector("ul")).slideToggle()
  })
})


