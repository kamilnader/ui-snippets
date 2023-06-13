$(".wrapperIcon").click(function (event) {
    event.stopPropagation()
})
$(":button").click(function(){
  setTimeout(function() {
    $(".wrapperIcon").click(function (event) {
    event.stopPropagation()
})
    }, 1000)
})