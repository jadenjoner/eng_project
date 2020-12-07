


function get(url, func, init = false) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (init)
        func(init(this.responseText));
      else
        func(this.responseText);
      }
    };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}



// Auto refresh

var currentReload;

if(true)
get('../reload.txt', (result) => {
  currentReload = result;

  setInterval(() => {
    get('../reload.txt', (result) => {
      if(currentReload != result)window.location.reload();
    })
  }, 500)
})
