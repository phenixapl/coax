/* start sort function*/
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("autoMotoTable");
  switching = true;
   dir = "asc";
 
  while (switching) {
      switching = false;
    rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
           shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
     
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
       
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
/*end sort function*/
/*start modal window*/
var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
function openWin() {
        overflow.className = "overflow";
        document.body.appendChild(overflow);
        var height = modal.offsetHeight;
        modal.style.marginTop = - height / 2 + "px";
        modal.style.top = "50%";
}

if (!Element.prototype.remove) {
        Element.prototype.remove = function remove() {
                if (this.parentNode) {
                        this.parentNode.removeChild(this);
                }
        };
}

overflow.onclick = function () {
        modal.style.top = "-100%";
        overflow.remove();
}

/*end modal window*/
