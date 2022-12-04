function idset(id, string) {
    document.getElementById(id).innerHTML = string;
  }
  
  var stoppuhr = (function() {
    var stop = 1;
    var days = 0;
    var hrs = 0;
    var mins = 0;
    var secs = 0;
    var msecs = 0;
    var runden = "";
    var anzrunden = 0;
    return {
      start: function() {
        stop = 0;
      },

      //--> Stop funktion definieren
      stop: function() {
        stop = 1;
      },
      clear: function() {
        stoppuhr.stop();
        days = 0;
        hrs = 0;
        mins = 0;
        secs = 0;
        msecs = 0;
        runden = "";
        anzrunden = 0;
        stoppuhr.html();
      },

      //--> neustart der funktion def.
      restart: function() {
        stoppuhr.clear();
        stoppuhr.start();
      },

      //--> Anzeige der Zeit def.
      timer: function() {
        if (stop === 0) {
          msecs++;
          if (msecs === 100) {
            secs ++;
            msecs = 0;
          }
          if (secs === 60) {
            mins++;
            secs = 0;
          }
          if (mins === 60) {
            hrs++;
            mins = 0;
          }
          if (hrs === 24) {
            days++;
            hrs = 0;
          }
          stoppuhr.html();
        }
      },

      //--> Timer anzeige in der Tabelle 
      runde: function() {
        runden =  "<tr><td>" + days  + "</td><td>"  + hrs + "</td><td>" + mins + "</td><td>" + secs + "</td><td>" + msecs + "</td></tr>" + runden;
        anzrunden++;
        stoppuhr.html();
      },
      set: function(tage, stunden, minuten, sekunden, msekunden) {
        stoppuhr.stop();
        days = tage;
        hrs = stunden;
        mins = minuten;
        secs = sekunden;
        msecs = msekunden;
        runden = "";
        anzrunden = 0;
        stoppuhr.html();
      },

      //--> in hhtml anzeigen
      html: function() {
        idset("tage", days);
        idset("stunden", hrs);
        idset("minuten", mins);
        idset("sekunden", secs);
        idset("msekunden", msecs);
        idset("runden", runden);
        idset("anzrunden", anzrunden + " Runden");
      }
    }
  })();
  setInterval(stoppuhr.timer, 10);