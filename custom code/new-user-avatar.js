//example code
DirectualEngine.addEventListener(AppEvents.START, function(context){
    var picURL = $D.fs.download("https://source.boringavatars.com/beam/230.svg")
    var ID = $D.eval("{{id}}")
    $D.store.save("WebUser",{id: ID, userpic: picURL}, false)
    return true;
  });