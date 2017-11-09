
var numberOfNodes = [0, 0, 0, 0];
var nodesPlaced = [0, 0, 0, 0]
var currentNodeIndex = 0;
var initialValue = 0;
var additionalValue = 2;

// Accumulates the number of nodes to space them out
var angles = [
  { // techniques
    adopt1: initialValue, // inner
    adopt2: initialValue,
    adopt3: initialValue,
    adopt4: initialValue,
    adopt5: initialValue, // outer
    trial: initialValue,
    assess: initialValue,
    hold: initialValue
  },
  { // data
    adopt1: initialValue, // inner
    adopt2: initialValue,
    adopt3: initialValue,
    adopt4: initialValue,
    adopt5: initialValue, // outer
    trial: initialValue,
    assess: initialValue,
    hold: initialValue
  },
  { // platforms
    adopt1: initialValue, // inner
    adopt2: initialValue,
    adopt3: initialValue,
    adopt4: initialValue,
    adopt5: initialValue, // outer
    trial: initialValue,
    assess: initialValue,
    hold: initialValue
  },
  { // languages
    adopt1: initialValue, // inner
    adopt2: initialValue,
    adopt3: initialValue,
    adopt4: initialValue,
    adopt5: initialValue, // outer
    trial: initialValue,
    assess: initialValue,
    hold: initialValue
  }
]

/**
 * Positions the headers of the different quadrants
 */


var adoptDist1 = 0.1;
var adoptDist2 = 0.23;
var adoptDist3 = 0.4;
var adoptDist4 = 0.55;
var adoptDist5 = 0.7;
var trialDist = 0.865;
var assessDist = 1.029;
var holdDist = 1.18;

/**
 * Calculates the new angles and distance from the origin point for each node
 */

for (var j = 0; j < radar_data.length; j++) { // quadrants

  for (var i = 0; i < radar_data[j].items.length; i++) { // rows in quadrants

    // applies the new distance from the origin point

    if ((!dynamic && !isMobileOrTab) && (radar_data[j].items[i].name.length >= 28) || (isMobileOrTab && dynamic) && radar_data[j].items[i].name.length >= 28) {
      radar_data[j].items[i].name = radar_data[j].items[i].name.substr(0, 28) + "...";
    } else if ((isMobileOrTab && !dynamic) && radar_data[j].items[i].name.length >= 16) {
      radar_data[j].items[i].name = radar_data[j].items[i].name.substr(0, 16) + "...";
    } else if ((!isMobileOrTab && dynamic) && radar_data[j].items[i].name.length >= 45) {
      radar_data[j].items[i].name = radar_data[j].items[i].name.substr(0, 45) + "...";
    }

    if (radar_data[j].items[i].pc.r == 3) {
      radar_data[j].items[i].pc.r = radius * holdDist;
    } else if (radar_data[j].items[i].pc.r == 2) {
      radar_data[j].items[i].pc.r = radius * trialDist;
    } else if (radar_data[j].items[i].pc.r == 1) {
      radar_data[j].items[i].pc.r = radius * assessDist;
    } else {
      radar_data[j].items[i].pc.r = radius * adoptPos(j);
    }

    // calculates the new angles

    if ((quadrantScope == 0 || quadrantScope == 2) && radar_data[j].items[i].pc.t >= 0 && radar_data[j].items[i].pc.t < 90) { // data
      numberOfNodes[0] += 1;
      if (radar_data[j].items[i].pc.r == radius * holdDist) { //hold
        angles[j].hold += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * assessDist) { // assess
        angles[j].assess += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * trialDist) { // trial
        angles[j].trial += additionalValue;
      } else { // adopt
        if (radar_data[j].items[i].pc.r == radius * adoptDist1) {
          angles[j].adopt1 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist2) {
          angles[j].adopt2 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist3) {
          angles[j].adopt3 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist4) {
          angles[j].adopt4 += additionalValue;
        } else {
          angles[j].adopt5 += additionalValue;
        }

      }
    } else if ((quadrantScope == 0 || quadrantScope == 1) && radar_data[j].items[i].pc.t >= 91 && radar_data[j].items[i].pc.t < 180) { // techniques 
      numberOfNodes[1] += 1;
      if (radar_data[j].items[i].pc.r == radius * holdDist) { //hold
        angles[j].hold += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * assessDist) { // assess
        angles[j].assess += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * trialDist) { // trial
        angles[j].trial += additionalValue;
      } else { // adopt
        if (radar_data[j].items[i].pc.r == radius * adoptDist1) {
          angles[j].adopt1 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist2) {
          angles[j].adopt2 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist3) {
          angles[j].adopt3 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist4) {
          angles[j].adopt4 += additionalValue;
        } else {
          angles[j].adopt5 += additionalValue;
        }
      }
    } else if ((quadrantScope == 0 || quadrantScope == 3) && radar_data[j].items[i].pc.t >= 181 && radar_data[j].items[i].pc.t < 270) { // platforms
      numberOfNodes[2] += 1;
      if (radar_data[j].items[i].pc.r == radius * holdDist) { //hold
        angles[j].hold += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * assessDist) { // assess
        angles[j].assess += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * trialDist) { // trial
        angles[j].trial += additionalValue;
      } else { // adopt
        if (radar_data[j].items[i].pc.r == radius * adoptDist1) {
          angles[j].adopt1 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist2) {
          angles[j].adopt2 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist3) {
          angles[j].adopt3 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist4) {
          angles[j].adopt4 += additionalValue;
        } else {
          angles[j].adopt5 += additionalValue;
        }
      }
    } else if (quadrantScope == 0 || quadrantScope == 4) { // languages
      numberOfNodes[3] += 1;
      if (radar_data[j].items[i].pc.r == radius * holdDist) { //hold
        angles[j].hold += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * assessDist) { // assess
        angles[j].assess += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * trialDist) { // trial
        angles[j].trial += additionalValue;
      } else { // adopt
        if (radar_data[j].items[i].pc.r == radius * adoptDist1) {
          angles[j].adopt1 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist2) {
          angles[j].adopt2 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist3) {
          angles[j].adopt3 += additionalValue;
        } else if (radar_data[j].items[i].pc.r == radius * adoptDist4) {
          angles[j].adopt4 += additionalValue;
        } else {
          angles[j].adopt5 += additionalValue;
        }
      }
    }

  }
}

var totalNodes = 0;
for (var i = 0; i < 4; i++) {      // calculate total number of nodes
  totalNodes += numberOfNodes[i];
}

var quadrantSpacing = [0, 0, 0, 0];
for (var i = 0; i < 4; i++) {     // calculate the angle for each
  quadrantSpacing[i] = numberOfNodes[i] / totalNodes;
}

var temp = 0;
temp = quadrantSpacing[0];
quadrantSpacing[0] = quadrantSpacing[1];
quadrantSpacing[1] = temp;

/**
 * Sets the angles for all nodes
 */

var prevAngle = 0;

var angleRadians = [0, 0, 0, 0, 0, 0, 0, 0];

for (var j = 0; j < radar_data.length; j++) { // quadrants

  var holdIndex = 1;
  var assessIndex = 1;
  var trialIndex = 1;
  var adoptIndex1 = 1;
  var adoptIndex2 = 1;
  var adoptIndex3 = 1;
  var adoptIndex4 = 1;
  var adoptIndex5 = 1;

  var angleIndent = 0;

  switch (j) {
    case 0: angleIndent = 5;
      angleRadians[0] = 0;
      break;
    case 1: angleIndent = quadrantSpacing[0] * 355 + 5;
      angleRadians[1] = angleIndent * (Math.PI / 180);
      break;
    case 2: angleIndent = (quadrantSpacing[1] * 355 + quadrantSpacing[0] * 355) + 5;
      angleRadians[2] = angleIndent * (Math.PI / 180);
      break;
    case 3: angleIndent = (quadrantSpacing[2] * 355 + quadrantSpacing[1] * 355 + quadrantSpacing[0] * 355) + 5;
      angleRadians[3] = angleIndent * (Math.PI / 180);
      break;
  }

  // applies the new angle to each node
  for (var i = 0; i < radar_data[j].items.length; i++) { // rows in quadrants

    if (radar_data[j].items[i].pc.r == radius * holdDist) { //hold
      radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].hold) * holdIndex + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
      if(dynamic && quadrantScope != 0 && j+1 == (quadrantScope)) {
          radar_data[j].items[i].pc.t += (quadrantSpacing[j] * 355 / angles[j].assess)/6;
      }
      holdIndex += additionalValue;
    } else if (radar_data[j].items[i].pc.r == radius * assessDist) { // assess
      radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].assess) * assessIndex + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
      if(dynamic && quadrantScope != 0 && j+1 == (quadrantScope)) {
          radar_data[j].items[i].pc.t += (quadrantSpacing[j] * 355 / angles[j].trial)/4;
      }
      assessIndex += additionalValue;
    } else if (radar_data[j].items[i].pc.r >= radius * trialDist) { // trial
      radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].trial) * trialIndex + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
        if(dynamic && quadrantScope != 0 && j+1 == (quadrantScope)) {
          radar_data[j].items[i].pc.t += (quadrantSpacing[j] * 355 / angles[j].adopt5)/2;
        }
      trialIndex += additionalValue;
    } else { // adopt
      if (radar_data[j].items[i].pc.r == radius * adoptDist1) {
        radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355) / 2 + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
        adoptIndex1 += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * adoptDist2) {
        radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].adopt2) * adoptIndex2 + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
        adoptIndex2 += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * adoptDist3) {
        radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].adopt3) * adoptIndex3 + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
        if(dynamic && quadrantScope != 0 && j+1 == (quadrantScope)) {
          radar_data[j].items[i].pc.t += (quadrantSpacing[j] * 355 / angles[j].adopt5)/2;
        }
        adoptIndex3 += additionalValue;
      } else if (radar_data[j].items[i].pc.r == radius * adoptDist4) {
        radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].adopt4) * adoptIndex4 + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
        if(dynamic && quadrantScope != 0 && j+1 == (quadrantScope)) {
          radar_data[j].items[i].pc.t += (quadrantSpacing[j] * 355 / angles[j].adopt5)/4;
        }
        adoptIndex4 += additionalValue;
      } else {
        radar_data[j].items[i].pc.t = (quadrantSpacing[j] * 355 / angles[j].adopt5) * adoptIndex5 + (angleIndent);// - ((numberOfNodes[j]/totalNodes)/9)*355);
        if(dynamic && quadrantScope != 0 && j+1 == (quadrantScope)) {
          radar_data[j].items[i].pc.t += (quadrantSpacing[j] * 355 / angles[j].adopt5)/6;
        }
        adoptIndex5 += additionalValue;
      }

    }

    if(quadrantScope > 0)
    {
      if(radar_data[j].items[i].pc.t < 20)
      {
        radar_data[j].items[i].pc.t += 20;
      } 
      else if (radar_data[j].items[i].pc.t > 335)
      {
        radar_data[j].items[i].pc.t -= 20;
      }
    }
  }
}