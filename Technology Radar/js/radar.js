// The code below should not be edited

$(function () {
  $("html").fadeIn();
});

var resized = 0;

$(window).resize(function () {
  if (!mobileAndTabletcheck()) {
    if($(window).width() < w-60 || $(window).width() > w+60) {
   refreshForScale();
    }
  }

});

// reload page to scale
function refreshForScale() {
  $("html").fadeOut(function () {
    location.reload();
  });
}

var leftindex = -1;
var rightindex = -1;

var numOfAssigned = 0;
var quadIndex = 0;

var tempSwitch = numberOfNodes[0];
numberOfNodes[0] = numberOfNodes[1];
numberOfNodes[1] = tempSwitch;

var acmNodes = [
  numberOfNodes[0] + 1,
  numberOfNodes[0] + numberOfNodes[1] + 1,
  numberOfNodes[0] + numberOfNodes[1] + numberOfNodes[2] + 1,
]

var titleIndex = 0;
var tempText = "\u200C";
var legIndex = 0;
var currentScope = 1;

var imageIndex = 0;
var leftImage = true;
var topImage = true;
var imgNumAssigned = 0;

function init(h, w) {

  if (isMobileOrTab && dynamic) {
    // techniques and tools
    radar_data[0].left = w / 1.57;
    // data managment
    radar_data[1].left = w / 1.5;
    //  platforms and infrastructure
    radar_data[2].left = w / 1.47;
    // languages and frameworks
    radar_data[3].left = w / 1.57;
  } 

  titleName = {};
  otherName = {};

  var radar = new pv.Panel()
    .width(w)
    .height(h)
    .canvas('radar');

  // headline
  radar.add(pv.Label)
    .left(function() {
     if(dynamic) {
      return w / 42;
     } else {
      return w / 2.82;
     }
    })
    .top(function() {
      if(dynamic) {
        return h / 13;
      } else {
        return h / 18;
      }
    })
    .text(function() {
      if(dynamic) {
        return RadarTitle;
      } else {
        return RadarTitle + " " + RadarSubTitle + " - "+RadarDate;
      }
    })
    .textStyle("#201f1f")
    .font((((h + w) / 2) / 35) + "px 'headers'");
    
  if(dynamic) {
 
  radar.add(pv.Label)
    .left(w / 42)
    .top(function() {
      if(dynamic) {
        return h / 8;
      } else {
        return h / 9.1;
      }
    })
    .text(RadarSubTitle)
    .textStyle("#201f1f")
    .font((((h + w) / 2) / 35) + "px 'headers'");

  radar.add(pv.Label)
    .left(w / 42)
    .top(function() {
      if(dynamic) {
        return h / 5.7;
      } else {
        return h / 6.4;
      }
    })
    .text(RadarDate)
    .textStyle("#201f1f")
    .font((((h + w) / 2) / 35) + "px 'regular'");

  }

  if (dynamic) {
    // contact info
    radar.add(pv.Label)
      .bottom(h / 17)
      .left(w / 42)
      .textAlign("left")
      .text(RadarFooterTitle)
      .textStyle("#201f1f")
      .font((((h + w) / 2.6) / 45) + "px 'headers'")
      .add(pv.Label)
      .bottom(h / 40)
      .text(RadarFooterSubTitle)
      .textStyle("blue")
      .textStyle("#201f1f")
      .font((((h + w) / 2.6) / 45) + "px 'regular'");
  }

  // arcs
  radar.add(pv.Dot)
    .data(radar_style)
    .left(function () {
      if (dynamic) {
        return dynamicX;
      }
      return w / 2;
    })
    .bottom(function () {
      if (dynamic) {
        return dynamicY;
      }
      return staticY//h / 2;
    })
    .radius(function (d) { return d.r; })
    .strokeStyle(function (d) { return "#ffffff"; })
    .fillStyle(function (d) { return d.color; })
    .anchor("top");

  var circleRadius = (radius * 1.5);
  var horizontalRadius = (w * 0.5);
  var verticalRadius = (h * 0.5);
  var halfWidth = w * 0.5;
  var halfHeight = h * 0.5;

  ////////////////////////////// Angle test
  var lineValues = [
    {
      left: [
        horizontalRadius + ((Math.sin(Math.PI / 2 - angleRadians[0]) * circleRadius)), halfWidth,
        horizontalRadius + ((Math.sin(Math.PI / 2 - angleRadians[1]) * circleRadius)), halfWidth,
        horizontalRadius + ((Math.sin(Math.PI / 2 - angleRadians[2]) * circleRadius)), halfWidth,
        horizontalRadius + ((Math.sin(Math.PI / 2 - angleRadians[3]) * circleRadius)), halfWidth,

      ],  // right(horz) - left(horz)
      bottom: [
        verticalRadius + ((Math.cos(Math.PI / 2 - angleRadians[0]) * circleRadius)), halfHeight,
        verticalRadius + ((Math.cos(Math.PI / 2 - angleRadians[1]) * circleRadius)), halfHeight,
        verticalRadius + ((Math.cos(Math.PI / 2 - angleRadians[2]) * circleRadius)), halfHeight,
        verticalRadius + ((Math.cos(Math.PI / 2 - angleRadians[3]) * circleRadius)), halfHeight,
      ] // right(vert) - left(vert)
    }
  ];

  if (quadrantScope == 0) {

    radar.add(pv.Line)
      .data([100, 100])
      .lineWidth(1)
      .left(function (d) {
        leftindex++;
        if (dynamic) {
          return lineValues[0].left[leftindex] - dynamicW;
        }
        return lineValues[0].left[leftindex];
      })
      .bottom(function (d) {
        rightindex++;
        if (dynamic) {
          return lineValues[0].bottom[rightindex] - dynamicH
        }
        return lineValues[0].bottom[rightindex] - staticH;
      })
      .strokeStyle("#fff");

    radar.add(pv.Line)
      .data([200, 200])
      .lineWidth(1)
      .left(function (d) {
        leftindex++;
        if (dynamic) {
          return lineValues[0].left[leftindex] - dynamicW;
        }
        return lineValues[0].left[leftindex];
      })
      .bottom(function (d) {
        rightindex++;
        if (dynamic) {
          return lineValues[0].bottom[rightindex] - dynamicH;
        }
        return lineValues[0].bottom[rightindex] - staticH;
      })
      .strokeStyle("#fff");

    radar.add(pv.Line)
      .data([200, 200])
      .lineWidth(1)
      .left(function (d) {
        leftindex++;
        if (dynamic) {
          return lineValues[0].left[leftindex] - dynamicW;
        }
        return lineValues[0].left[leftindex];
      })
      .bottom(function (d) {
        rightindex++;
        if (dynamic) {
          return lineValues[0].bottom[rightindex] - dynamicH;
        }
        return lineValues[0].bottom[rightindex] - staticH;
      })
      .strokeStyle("#fff");

    radar.add(pv.Line)
      .data([200, 200])
      .lineWidth(1)
      .left(function (d) {
        leftindex++;
        if (dynamic) {
          return lineValues[0].left[leftindex] - dynamicW;
        }
        return lineValues[0].left[leftindex];
      })
      .bottom(function (d) {
        rightindex++;
        if (dynamic) {
          return lineValues[0].bottom[rightindex] - dynamicH;
        }
        return lineValues[0].bottom[rightindex] - staticH;
      })
      .strokeStyle("#fff");

  }

  for (var i = 0; i < radar_data.length; i++) {

    // quadrant title
    if (lastQuadrant != radar_data[i].quadrant) {
      lastQuadrant = radar_data[i].quadrant;
      radar.add(pv.Label)
        .left(radar_data[i].left - w / 210)
        .top(radar_data[i].top)
        .text(radar_data[i].quadrant)
        .strokeStyle(radar_data[i].color)
        .fillStyle(radar_data[i].color)
        .textStyle("#201f1f")
        .font(quadrantFontSize + "px 'headers'");
    }

    // re-order the items by radius, in order to logically group by ring
    var itemsByStage = _.groupBy(radar_data[i].items, function (item) {
      if (item.pc.r == radius * holdDist) {
        return 3;
      } else if (item.pc.r == radius * assessDist) {
        return 2;
      } else if (item.pc.r == radius * trialDist) {
        return 1;
      } else {
        return 0;
      }
      return 
    });
    var offsetIndex = 0;
    var midIndex = -1;
    var previous = undefined;

    Object.keys(itemsByStage).forEach(function (stageIndex) {
      if (stageIndex > 0 && previous !== undefined) {
        offsetIndex = offsetIndex + itemsByStage[previous].length + 1;
      }
      previous = stageIndex;

      if ((stageIndex > 1) && (midIndex < 0)) {
        midIndex = offsetIndex;
      }

      var left = radar_data[i].left;
      var top = radar_data[i].top + quadrantFontSize + spacer + (stageIndex * headingFontSize) + (offsetIndex * fontSize);

      if (stageIndex > 1) { // !dynamic && !mobile
        left = left + ((w) / 8);
        if (isMobileOrTab && (!dynamic)) {
          left = left * 0.99;
        } else if (!dynamic && !isMobileOrTab) {
          left = left + (w * 0.0005);
        } if (isMobileOrTab && dynamic) {
          left = left + (w * 0.05);
        } else if (dynamic && !isMobileOrTab) {
          left = left + ((w) / 25);
        }
        top = top - (2 * headingFontSize) - (midIndex * fontSize);
      }

      // stage label
      radar.add(pv.Label)
        .left(left - w / 200)
        .top(top - headingFontSize / 2 + w / 200)
        .text(function () {
          var titleText = radar_arcs[stageIndex].name + tempText;
          titleIndex++;
          if (titleIndex % 4 == 0) {
            tempText = " " + tempText;
          }
          return titleText;
        })
        .strokeStyle("#ffffff")
        .fillStyle("#ccc")
        .textStyle("#201f1f")
        .font((headingFontSize * 0.80) + "px 'headers'");

      // legend label
      if (quadrantScope == 0 || quadrantScope - 1 == i) {
        radar.add(pv.Label)
          .left(function () {
            numOfAssigned++;
            return left;
          })
          .top(function () {
            numOfAssigned--;
            return top;
          })
          .title(function (d) {
            if (quadIndex <= 3) {
              if (numOfAssigned > numberOfNodes[quadIndex]) {
                quadIndex++;
                numOfAssigned = 1;
              }
              return quadIndex.toString();
            }
          })
          .textStyle("#201f1f")
          .strokeStyle(radar_data[i].color)
          .fillStyle(radar_data[i].color)
          .add(pv.Dot)
          .def("i", top)
          // .event("mouseover", function() {
          //   alert('dd')
          // })
          .data(itemsByStage[stageIndex])
          .top(function () { return (this.i() + (this.index * fontSize) + w / 145); })
          .shape(function (d) { return (d.movement === 't' ? "triangle" : "circle"); })
          .event("click", function (d) { if (d.url !== undefined) { self.location = d.url } })
          .size(fontSize)
          .angle(45)
          .textStyle("#201f1f")
          .anchor("right")
          .add(pv.Label)
          .title("test1")
          .font(function (d) {
            if (isMobileOrTab) {
              return 10 + "px 'regular'";
            } else {
              return ((h + w) / 2) / 110 + "px 'regular'";
            }
          })
          .text(function (d) { 
            return radar_quadrant_ctr++ + ". " + d.name; })
          .add(pv.Image)
          .url("")
          .height(h / 60)
          .width(w / 10)
          .title(function(d) {
            imgNumAssigned++;
            return imgNumAssigned + ": " + d.comments;
          })
          .left(function(d) {
            radar_quadrant_ctr--;
            return left;
          })
          .top(function() {
            if(topImage) {
              topImage = false;
              imageIndex = 0;
            } else {
              imageIndex++;
            }
            if(imageIndex==0) {
              return top*1.02;
            }
            return top*1.005 + (imageIndex * (h/47.5)) + 1;// - (imageIndex==1?5:0);
          })
          .event("mouseover", pv.Behavior.tipsy({gravity: "n", html: true, fade: true}))
          .event("click", function (d) {

          });
      }

      // the blip itself
      if (quadrantScope == 0 || quadrantScope - 1 == i) {

        radar.add(pv.Dot)
          .def("active", false)
          .data(itemsByStage[stageIndex])
          .size(function (d) {
            if (windowBreakHeight > 2000) {
              return ((w + h / 2) / 13);
            }
            return ((w + h / 2) / 12);
          })
          .left(function (d) {
            if (dynamic) {
              return polar_to_raster(d.pc.r, d.pc.t)[0] - dynamicW;
            }
            return polar_to_raster(d.pc.r, d.pc.t)[0];
          })
          .bottom(function (d) {
            topImage = true;
            if (dynamic) {
              return polar_to_raster(d.pc.r, d.pc.t)[1] - dynamicH;
            }
            return polar_to_raster(d.pc.r, d.pc.t)[1] - staticH;
          })
          .event("mouseover", function (d) {
            if (quadrantScope == 0) {
              if (d.pc.t * (Math.PI / 180) >= angleRadians[3]) { // languages
                if (dynamic && legIndex != 3) {
                  displayLegend();
                  legIndex = 3;
                  displayLegend();
                }
              } else if (d.pc.t * (Math.PI / 180) >= angleRadians[2]) { // platforms
                if (dynamic && legIndex != 2) {
                  displayLegend();
                  legIndex = 2;
                  displayLegend();
                }
              } else if (d.pc.t * (Math.PI / 180) >= angleRadians[1]) { // Data management
                if (dynamic && legIndex != 1) {
                  displayLegend();
                  legIndex = 1;
                  displayLegend();
                }
              } else { // techniques and tools
                if (dynamic && legIndex != 0) {
                  displayLegend();
                  legIndex = 0;
                  displayLegend();
                }
              }
            }
          })
          .event("click", function (d) {
            if (isMobileOrTab) {
              if (d.pc.t * (Math.PI / 180) >= angleRadians[3]) { // languages
                if (dynamic && legIndex != 3) {
                  displayLegend();
                  legIndex = 3;
                  displayLegend();
                }
              } else if (d.pc.t * (Math.PI / 180) >= angleRadians[2]) { // platforms
                if (dynamic && legIndex != 2) {
                  displayLegend();
                  legIndex = 2;
                  displayLegend();
                }
              } else if (d.pc.t * (Math.PI / 180) >= angleRadians[1]) { // Data management
                if (dynamic && legIndex != 1) {
                  displayLegend();
                  legIndex = 1;
                  displayLegend();
                }
              } else { // techniques and tools
                if (dynamic && legIndex != 0) {
                  displayLegend();
                  legIndex = 0;
                  displayLegend();
                }
              }
            }
          })
          .angle(Math.PI)  // 180 degrees in radians
          .strokeStyle("white")
          .fillStyle(radar_data[i].color)
          .shape(function (d) { return (d.movement === 't' ? "triangle" : "circle"); })

          .anchor("bottom")
          .add(pv.Label)
          .textBaseline("top")
          .textStyle("#201f1f")
          .font(function (d) {
            if (isMobileOrTab) {
              return 8 + "px 'regular'";
            } else {
              return ((h + w) / 2) / 100 + "px 'regular'";
            }
          })
          .text(function (d) {  // to disable the carriage do: 'return = d.name' 
            if ((d.name.length) > 10) {
              for (var i = 0; i < d.name.length; i++) {
                if (i > 9 && d.name.charAt(i) == " ") {
                  titleName[d.name] = d.name.substr(i + 1, d.name.length);
                  otherName[d.name] = d.name.substr(0, i);
                  return d.name.substr(0, i);
                } else {
                  for (var j = d.name.length; j >= 0; j--) {
                    if (j < 9 && d.name.charAt(j) == " ") {
                      titleName[d.name] = d.name.substr(j + 1, d.name.length);
                      otherName[d.name] = d.name.substr(0, j);
                      return d.name.substr(0, j);
                    }
                  }
                }
              }
            } else {
              return d.name;
            }
            return d.name;
          });


        radar.add(pv.Dot) // This Dot transprent and shows the index of the node in an anchored pv.label      
          .def("active", false)
          .data(itemsByStage[stageIndex])
          .size(function (d) {
            if (windowBreakHeight > 2000) {
              return ((w + h / 2) / 13);
            }
            return ((w + h / 2) / 22);
          })
          .left(function (d) {
            if (dynamic) {
              return polar_to_raster(d.pc.r, d.pc.t)[0] - dynamicW;
            }
            return polar_to_raster(d.pc.r, d.pc.t)[0];
          })
          .bottom(function (d) {
            var verticalSpace = 1.0035; //// Height ajustment for the nodes of the two top quadrants // index center fix
            if (nodesPlaced[currentNodeIndex] != numberOfNodes[currentNodeIndex]) {
              nodesPlaced[currentNodeIndex] += 1;
            } else {
              currentNodeIndex++;
            }

            if (currentNodeIndex > 1) {
              verticalSpace = 1.005; //// Height ajustment for the nodes of the two bottom quadrants // index center fix
            }
            if (dynamic) {
              return polar_to_raster(d.pc.r, d.pc.t)[1] * verticalSpace - dynamicH;
            }
            return polar_to_raster(d.pc.r, d.pc.t)[1] * verticalSpace - staticH;
          })
          .angle(Math.PI)  // 180 degrees in radians
          .strokeStyle("transparent")

          .anchor("bottom")
          .add(pv.Label)
          .textBaseline("bottom")
          .textStyle("white")
          .text(function (d) { return total_index++; })
          .font(function (d) {
            if (isMobileOrTab) {
              return 10 + "px 'regular'";
            } else {
              return ((h + w) / 2) / 110 + "px 'regular'";
            }
          });

        // this pv.dot is for a carriage return when necessary
        radar.add(pv.Dot)
          .data(itemsByStage[stageIndex])
          .left(function (d) {
            if (dynamic) {
              return polar_to_raster(d.pc.r, d.pc.t)[0] - dynamicW
            }
            return polar_to_raster(d.pc.r, d.pc.t)[0];
          })
          .bottom(function (d) {
            if (windowBreakHeight > 2000) { // 4K screens
              if (dynamic) {
                return (polar_to_raster(d.pc.r, d.pc.t)[1]) - h / 45 - dynamicH;
              }
              return (polar_to_raster(d.pc.r, d.pc.t)[1]) - h / 45 - staticH;
            } // normal screens
            if (dynamic) {
              return (polar_to_raster(d.pc.r, d.pc.t)[1]) - h / 55 - dynamicH;
            }
            return (polar_to_raster(d.pc.r, d.pc.t)[1]) - h / 55 - staticH;
          })
          .size(function (d) { return (d.blipSize !== undefined ? d.blipSize : w / 20); })
          .strokeStyle("transparent")

          .anchor("bottom")
          .add(pv.Label)
          .textBaseline("top")
          .textStyle("#201f1f")
          .text(function (d) {
            var temp = titleName[d.name];
            return temp;
          })
          .font(function (d) {
            if (isMobileOrTab) {
              return 8 + "px 'regular'";
            } else {
              return ((h + w) / 2) / 100 + "px 'regular'";
            }
          })

      }

    });


    if (dynamic) {

      radar.add(pv.Image)
        .height(w / 13)
        .width(w / 13)
        .left(w * 0.580)
        .top(h * -0.001)
        .url("images/tech.png")
        .event("mouseover", function (d) {
          if (!isMobileOrTab && quadrantScope == 0) {
            if (dynamic && legIndex != 0) {
              displayLegend();
              legIndex = 0;
              displayLegend();
            }
          }
        })
        .event("click", function (d) {
          if ((isMobileOrTab && currentScope == 1) || !isMobileOrTab && quadrantScope != 1 || isMobileOrTab && quadrantScope != 0) {
            localStorage.setItem('qscope', JSON.stringify("1"));
            refreshForScale();
          } else if (dynamic && legIndex != 0 && isMobileOrTab) {
            displayLegend();
            legIndex = 0;
            displayLegend();
          }
        });

      radar.add(pv.Image)
        .height(w / 13)
        .width(w / 13)
        .left(w * 0.662)
        .top(h * -0.001)
        .url("images/data.png")
        .event("mouseover", function (d) {
          if (!isMobileOrTab && quadrantScope == 0) {
            if (dynamic && legIndex != 1) {
              displayLegend();
              legIndex = 1;
              displayLegend();
            }
          }
        })
        .event("click", function (d) {
          if ((isMobileOrTab && currentScope == 2) || !isMobileOrTab && quadrantScope != 2 || isMobileOrTab && quadrantScope != 0) {
            localStorage.setItem('qscope', JSON.stringify("2"));
            refreshForScale();
          } else if (dynamic && legIndex != 1 && isMobileOrTab) {
            displayLegend();
            legIndex = 1;
            displayLegend();
          }
        });

      radar.add(pv.Image)
          .height(w / 13)
        .width(w / 13)
        .left(w * 0.744)
        .top(h * -0.001)
        .url("images/plat.png")
        .event("mouseover", function (d) {
          if (!isMobileOrTab && quadrantScope == 0) {
            if (dynamic && legIndex != 2) {
              displayLegend();
              legIndex = 2;
              displayLegend();
            }
          }
        })
        .event("click", function (d) {
          if ((isMobileOrTab && currentScope == 3) || !isMobileOrTab && quadrantScope != 3 || isMobileOrTab && quadrantScope != 0) {
            localStorage.setItem('qscope', JSON.stringify("3"));
            refreshForScale();
          } else if (dynamic && legIndex != 2 && isMobileOrTab) {
            displayLegend();
            legIndex = 2;
            displayLegend();
          }
        });

      radar.add(pv.Image)
        .height(w / 13)
        .width(w / 13)
        .left(w * 0.826)
        .top(h * -0.001)
        .url("images/lang.png")
        .event("mouseover", function (d) {
          if (!isMobileOrTab && quadrantScope == 0) {
            if (dynamic && legIndex != 3) {
              displayLegend();
              legIndex = 3;
              displayLegend();
            }
          }
        })
        .event("click", function (d) {
          if ((isMobileOrTab && currentScope == 4) || !isMobileOrTab && quadrantScope != 4 || isMobileOrTab && quadrantScope != 0) {
            localStorage.setItem('qscope', JSON.stringify("4"));
            refreshForScale();
          } else if (dynamic && legIndex != 3 && isMobileOrTab) {
            displayLegend();
            legIndex = 2;
            displayLegend();
          }
        });

    }

    radar.add(pv.Image)
        .height(w / 13)
        .width(w / 13)
        .left(function() {
          if(dynamic) {
            return w*0.908;
          } else {
            return w*0.66;
          }
        })
        .top(function() {
          if(dynamic) {
            return h * -0.001;
          } else {
            if(!isMobileOrTab) {
              return h * - 0.033;
            } else {
              return h * 0.0199;
            }
          }
        })
      .url("images/" + (dynamic ? "static" : "resp") + ".png") 
      .event("click", function (d) {
        localStorage.setItem('dynamic', JSON.stringify((dynamic) ? "false" : "true"));
        refreshForScale();
      });

    if (quadrantScope != 0) {
      radar.add(pv.Image)
        .height(w / 13)
        .width(w / 13)
        .left(w * 0.4978)
        .top(h * -0.001)
        .url("images/all.png")
        .event("click", function (d) {
          localStorage.setItem('qscope', JSON.stringify("0"));
          refreshForScale();
        });
    }



    for (var j = 0; j < 4; j++) {
      radar.add(pv.Label)
        .left(quadHeaders[j].left)
        .top(quadHeaders[j].top)
        .textStyle("#201f1f")
        .text(quadHeaders[j].title)
        .font((headingFontSize * 0.70) + "px 'headers'");
    }

  }

  // Legend labels

  radar.anchor('radar');
  radar.render();

  if (dynamic && quadrantScope == 0) {
    initialHide();
  } else if (dynamic && quadrantScope > 0) {
    sepcificHide();
  }
};