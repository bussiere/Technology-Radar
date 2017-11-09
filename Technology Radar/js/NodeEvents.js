function displayLegend() {
    
      if (legIndex == 0) { // Techniques
        currentScope = 1;
        $('text:contains("ASSESS\u200C")').stop().fadeToggle();
        $('text:contains("HOLD\u200C")').fadeToggle();
        $('text:contains("ADOPT\u200C")').fadeToggle();
        $('text:contains("TRIAL\u200C")').fadeToggle();
        $('text:contains("Techniques & Tools")').fadeToggle();
        $('a[id|=0]').fadeToggle();
        for (var f = 1; f < acmNodes[0]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = 1; f < acmNodes[0]; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      } else if (legIndex == 1) { // data management
        currentScope = 2;
        $('text:contains("ASSESS \u200C")').stop().fadeToggle();
        $('text:contains("HOLD \u200C")').fadeToggle();
        $('text:contains("ADOPT \u200C")').fadeToggle();
        $('text:contains("TRIAL \u200C")').fadeToggle();
        $('text:contains("Data Management")').fadeToggle();
        $('a[id|=1]').fadeToggle();
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      } else if (legIndex == 2) { // PLatforms 
        currentScope = 3;
        $('text:contains("ASSESS  \u200C")').stop().fadeToggle();
        $('text:contains("HOLD  \u200C")').fadeToggle();
        $('text:contains("ADOPT  \u200C")').fadeToggle();
        $('text:contains("TRIAL  \u200C")').fadeToggle();
        $('text:contains("Platforms & Infrastructure")').fadeToggle();
        $('a[id|=2]').fadeToggle();
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      } else { // languages
        currentScope = 4;
        $('text:contains("ASSESS   \u200C")').stop().fadeToggle();
        $('text:contains("HOLD   \u200C")').fadeToggle();
        $('text:contains("ADOPT   \u200C")').fadeToggle();
        $('text:contains("TRIAL   \u200C")').fadeToggle();
        $('text:contains("Languages & Frameworks")').fadeToggle();
        $('a[id|=3]').fadeToggle();
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).fadeToggle();
        }
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
          $('[id^='+f+'\\:]').fadeToggle();
          $('[id^='+f+'-]').fadeToggle();
        }
      }
    }

    function initialHide() {
        // Initial hide Can't be done by CSS
        $('text:contains("ASSESS \u200C")').hide();
        $('text:contains("HOLD \u200C")').hide();
        $('text:contains("ADOPT \u200C")').hide();
        $('text:contains("TRIAL \u200C")').hide();
        $('text:contains("Data Management")').hide();
        $('a[id|=1]').hide();
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).hide();
        }
        for (var f = acmNodes[0]; f < acmNodes[1]; f++) {
            $('[id^='+f+'-]').hide();
            $('[id^='+f+'\\:]').hide();
        }
        $('text:contains("ASSESS  \u200C")').hide();
        $('text:contains("HOLD  \u200C")').hide();
        $('text:contains("ADOPT  \u200C")').hide();
        $('text:contains("TRIAL  \u200C")').hide();
        $('text:contains("Platforms & Infrastructure")').hide();
        $('a[id|=2]').hide();
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).hide();
        }
        for (var f = acmNodes[1]; f < acmNodes[2]; f++) {
            $('[id^='+f+'-]').hide();
            $('[id^='+f+'\\:]').hide();
        }
        $('text:contains("ASSESS   \u200C")').hide();
        $('text:contains("HOLD   \u200C")').hide();
        $('text:contains("ADOPT   \u200C")').hide();
        $('text:contains("TRIAL   \u200C")').hide();
        $('text:contains("Languages & Frameworks")').hide();
        $('a[id|=3]').hide();
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
          $("text:contains('.')").filter(function () {
            return this.innerHTML.indexOf(f + '.') == 0;
          }).hide();
        }
        for (var f = acmNodes[2]; f < totalNodes + 1; f++) {
            $('[id^='+f+'-]').hide();
            $('[id^='+f+'\\:]').hide();
        }
        // End of initial hide
      }
      
      function sepcificHide() {
      
        if (quadrantScope != 1) { // Techniques
          $('text:contains("ASSESS\u200C")').hide();
          $('text:contains("HOLD\u200C")').hide();
          $('text:contains("ADOPT\u200C")').hide();
          $('text:contains("TRIAL\u200C")').hide();
          $('text:contains("Techniques & Tools")').hide();
        }
        if (quadrantScope != 2) { // data management
          $('text:contains("ASSESS \u200C")').hide();
          $('text:contains("HOLD \u200C")').hide();
          $('text:contains("ADOPT \u200C")').hide();
          $('text:contains("TRIAL \u200C")').hide();
          $('text:contains("Data Management")').hide();
        }
        if (quadrantScope != 3) { // PLatforms 
          $('text:contains("ASSESS  \u200C")').hide();
          $('text:contains("HOLD  \u200C")').hide();
          $('text:contains("ADOPT  \u200C")').hide();
          $('text:contains("TRIAL  \u200C")').hide();
          $('text:contains("Platforms & Infrastructure")').hide();
        }
        if (quadrantScope != 4) { // languages
          $('text:contains("ASSESS   \u200C")').hide();
          $('text:contains("HOLD   \u200C")').hide();
          $('text:contains("ADOPT   \u200C")').hide();
          $('text:contains("TRIAL   \u200C")').hide();
          $('text:contains("Languages & Frameworks")').hide();
        }
      }