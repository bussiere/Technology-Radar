// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#1bc2a0",
    "items" : [
  {
    "name": "Threat Modeling",
    "pc": {
      "r": 3,
      "t": 179
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "SSO",
    "pc": {
      "r": 3,
      "t": 123
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "DocFX",
    "pc": {
      "r": 3,
      "t": 99
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "iServer",
    "pc": {
      "r": 3,
      "t": 163
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Skype for business",
    "pc": {
      "r": 3,
      "t": 147
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Biztalk",
    "pc": {
      "r": 3,
      "t": 171
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Elk",
    "pc": {
      "r": 3,
      "t": 131
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Grafana",
    "pc": {
      "r": 3,
      "t": 139
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Bower",
    "pc": {
      "r": 2,
      "t": 101
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "NPM",
    "pc": {
      "r": 2,
      "t": 121
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "nHibernate",
    "pc": {
      "r": 2,
      "t": 131
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Load Impact",
    "pc": {
      "r": 2,
      "t": 151
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Data Anonymonisation",
    "pc": {
      "r": 2,
      "t": 111
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 2,
      "t": 141
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "JSONAssert",
    "pc": {
      "r": 2,
      "t": 161
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Microsoft Teams",
    "pc": {
      "r": 2,
      "t": 171
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Webpack",
    "pc": {
      "r": 1,
      "t": 151
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Pipelines as code",
    "pc": {
      "r": 1,
      "t": 127
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Pinpoint",
    "pc": {
      "r": 1,
      "t": 163
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Pa11y",
    "pc": {
      "r": 1,
      "t": 115
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Tailsman",
    "pc": {
      "r": 1,
      "t": 175
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "PowerShell",
    "pc": {
      "r": 0,
      "t": 165
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "SonarQube",
    "pc": {
      "r": 0,
      "t": 135
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Jira",
    "pc": {
      "r": 0,
      "t": 120
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "POSTMAN",
    "pc": {
      "r": 0,
      "t": 150
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Confluence",
    "pc": {
      "r": 0,
      "t": 105
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "ODS",
    "pc": {
      "r": 0,
      "t": 112
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "BitBucket",
    "pc": {
      "r": 0,
      "t": 142
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "ARM Azure Resource Manager",
    "pc": {
      "r": 0,
      "t": 127
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Nuget",
    "pc": {
      "r": 0,
      "t": 157
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "SOLID",
    "pc": {
      "r": 0,
      "t": 172
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Contract First",
    "pc": {
      "r": 0,
      "t": 95
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "OWASP",
    "pc": {
      "r": 0,
      "t": 95
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Swagger To Asciidoc",
    "pc": {
      "r": 0,
      "t": 95
    },
    "comments": "",
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#1b9dc2",
    "items" : [
  {
    "name": "MySQL",
    "pc": {
      "r": 3,
      "t": 68
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 2,
      "t": 76
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "HD Insight",
    "pc": {
      "r": 2,
      "t": 46
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Power BI",
    "pc": {
      "r": 1,
      "t": 20
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "R Studio",
    "pc": {
      "r": 1,
      "t": 68
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Azure SQL DWH",
    "pc": {
      "r": 1,
      "t": 44
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "SSAS",
    "pc": {
      "r": 1,
      "t": 56
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Tableau",
    "pc": {
      "r": 0,
      "t": 25
    },
    "comments": "Hover comments here",
    "movement": "c"
  },
  {
    "name": "SSIS",
    "pc": {
      "r": 0,
      "t": 40
    },
    "comments": "",
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#febb34",
    "items" : [
  {
    "name": "AWS",
    "pc": {
      "r": 3,
      "t": 248
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Email notifications",
    "pc": {
      "r": 3,
      "t": 192
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "SFTP",
    "pc": {
      "r": 3,
      "t": 224
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "FTP",
    "pc": {
      "r": 3,
      "t": 256
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Sharepoint",
    "pc": {
      "r": 3,
      "t": 184
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "IaaS",
    "pc": {
      "r": 3,
      "t": 208
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Push notifications",
    "pc": {
      "r": 2,
      "t": 236
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "CloudFlare",
    "pc": {
      "r": 2,
      "t": 256
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Containers",
    "pc": {
      "r": 2,
      "t": 186
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "HSTS",
    "pc": {
      "r": 2,
      "t": 216
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Microsoft Bot Framework",
    "pc": {
      "r": 1,
      "t": 212
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "MongoDB DocumentDB",
    "pc": {
      "r": 1,
      "t": 224
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 1,
      "t": 248
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Octopus Deploy",
    "pc": {
      "r": 0,
      "t": 220
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Key Vault",
    "pc": {
      "r": 0,
      "t": 250
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Bamboo",
    "pc": {
      "r": 0,
      "t": 205
    },
    "comments": "",
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages & Frameworks",
    "color" : "#e02e49",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "AngularJS",
    "pc": {
      "r": 3,
      "t": 314
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "XML",
    "pc": {
      "r": 3,
      "t": 322
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Entity Framework v6",
    "pc": {
      "r": 3,
      "t": 274
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Cordova",
    "pc": {
      "r": 3,
      "t": 330
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Ionic",
    "pc": {
      "r": 3,
      "t": 298
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 3,
      "t": 354
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Dapper",
    "pc": {
      "r": 2,
      "t": 336
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "React Native",
    "pc": {
      "r": 2,
      "t": 346
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Enzyme Projactor",
    "pc": {
      "r": 2,
      "t": 276
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "React",
    "pc": {
      "r": 1,
      "t": 290
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Azure Identity Services",
    "pc": {
      "r": 1,
      "t": 302
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "C#",
    "pc": {
      "r": 0,
      "t": 325
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "JSON",
    "pc": {
      "r": 0,
      "t": 295
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": ".NetCore",
    "pc": {
      "r": 0,
      "t": 310
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "MOQ",
    "pc": {
      "r": 0,
      "t": 280
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Xamarin",
    "pc": {
      "r": 0,
      "t": 340
    },
    "comments": "",
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 0,
      "t": 287
    },
    "comments": "",
    "movement": "c"
  }
]
  }
];
