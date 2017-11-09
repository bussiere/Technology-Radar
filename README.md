# Technology Radar

The Technology Radar is a tool to inspire and support teams to pick the best technologies for new projects. It sets out the changes in technologies that are interesting in software development: changes that you may think your engineering teams should pay attention to and consider using in their projects.

## Cool. How can I make my own?

1. Install Ruby https://rubyinstaller.org/
1. run `gem install liquid` if necessary
1. Edit the spreadsheet as necessary
1. run `ruby transform.rb` in your CLI to generate a new `radar_data.js`
1. open `index.html` in your browser to inspect the result

## Speadsheet schema

| Column |   Definition  |
|:------:|:-------------:|
|    A   |   Node name   |
|    B   |    Quadrant   |
|    C   | Hover comment |
|    D   | Ring position |

## Ring position maping

| Score | Ring  |
|:-----:|:-----:|
|   0   | ADOPT |
|   1   | TRIAL |
|   2   | TRIAL |
|   3   | HOLD  |

## Screenshots

### The Dynamic view shows the legend of the node or quadrant button you hover over

![Alt text](/ScreenShots/Dynamic.jpg?raw=true "login")

### The Static view shows everything, it is useful for printing

![Alt text](/ScreenShots/Static.jpg?raw=true "login")

### The Fullscreen view is activated by clicking a quadrant button

![Alt text](/ScreenShots/Fullscreen.jpg?raw=true "login")
