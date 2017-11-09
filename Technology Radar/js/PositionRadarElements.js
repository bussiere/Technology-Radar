var adoptNext = -1;  
var quad = 0

function adoptPos(quadIndex) {
  
  if(quadIndex != quad) {
    quad++;
    adoptNext = -1;
  }

  adoptNext++;

  if(quadrantScope == 0 || !dynamic) {

      if(adoptNext == 6) { // inner
        return 0.1;
      } else if(adoptNext == 1 || adoptNext == 5) {
        return 0.23;
      } else if(adoptNext == 2 || adoptNext == 0 || adoptNext == 9 || adoptNext == 12) {
        return 0.4;
      } else if(adoptNext == 3 || adoptNext == 10 || adoptNext == 13 || (adoptNext>14 && adoptNext%2==1)) {
        return 0.55;
      } else { // outer
        return 0.7;
      }

  } else {

      if(adoptNext == 0) { // inner - 0
        return 0;
      } else if(adoptNext == 3 || adoptNext == 6 || adoptNext == 12 || adoptNext == 16) { // - 1
        return 0.23;
      } else if(adoptNext == 1 || adoptNext == 5 || adoptNext == 11 || adoptNext == 15 || adoptNext == 19) { // - 2
        return 0.4;
      } else if(adoptNext == 4 || adoptNext == 7 || adoptNext == 10 || adoptNext == 13 || adoptNext == 18 || (adoptNext%2==1)) { // - 3
        return 0.55;
      } else { // outer - 4
        return 0.7;
      }


  }

}

var radar_arcs = [
  {'r': 200*0.75, 'name': 'ADOPT'},
  {'r': 290*0.75, 'name': 'TRIAL'},
  {'r': 350*0.75, 'name': 'ASSESS'},
  {'r': 400*0.75, 'name': 'HOLD'},
];

var radar_style = [
  {'r': h*0.45, 'name': 'HOLD', 'color' : "#f3f4f4"},
  {'r': h*0.395, 'name': 'ASSESS', 'color' : "#eaebec"},
  {'r': h*0.34, 'name': 'TRIAL', 'color' : "#e1e3e4"},
  {'r': h*0.28, 'name': 'ADOPT', 'color' : "#d9dcdd"}
];

// Manually edit the coordinates of the legends for the static radar after updating the Radar_Data.js file
// techniques and tools

// for desktops
if (dynamic) {
  radar_data[0].left = w / 1.5;
  radar_data[0].top = h / 6;
  // data managment
  radar_data[1].left = w / 1.5;
  radar_data[1].top = h / 3;
  //  platforms and infrastructure
  radar_data[2].left = w / 1.5;
  radar_data[2].top = h / 3;
  // languages and frameworks
  radar_data[3].left = w / 1.5;
  radar_data[3].top = h / 4.5;
} else {
  radar_data[0].left = w / 38;
  radar_data[0].top = h / 22;
  // data managment
  radar_data[1].left = w / 38;
  radar_data[1].top = h / 1.325;
  //  platforms and infrastructure
  radar_data[2].left = w / 1.3;
  radar_data[2].top = h / 9;
  // languages and frameworks
  radar_data[3].left = w / 1.3;
  radar_data[3].top = h / 2.1;
}


// Values fot labels for the quadrants
var quadHeaders;

if (dynamic) {
  quadHeaders = [
    {
      title: "HOLD",
      left: (dynamicX * 1.549),
      top: h / 2 + (h / 30)
    },
    {
      title: "ASSESS",
      left: (dynamicX * 1.459),
      top: h / 2 + (h / 30)
    },
    {
      title: "TRIAL",
      left: (dynamicX * 1.39),
      top: h / 2 + (h / 30)
    },
    {
      title: "ADOPT",
      left: quadrantScope == 0 ? (dynamicX * 1.12) :  (dynamicX * 1.295),
      top: h / 2 + (h / 30)
    }
  ];
} else {
  quadHeaders = [
    {
      title: "HOLD",
      left: (w / 2) + radius * 1.11,
      top: h / 2 + h / 31
    },
    {
      title: "ASSESS",
      left: (w / 2) + radius * 0.93,
      top: h / 2 + h / 31
    },
    {
      title: "TRIAL",
      left: (w / 2) + radius * 0.79,
      top: h / 2 + h / 31
    },
    {
      title: "ADOPT",
      left: (w / 2) + radius * 0.2,
      top: h / 2 + h / 31
    }
  ];
}