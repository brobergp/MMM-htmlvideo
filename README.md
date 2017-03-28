# MMM-htmlvideo

This module for the [MagicMirror](https://github.com/MichMich/MagicMirror) autoplays a video using the html video function.

## Installation

  1\. Execute the following commands to install the module:

```bash
cd ~/MagicMirror/modules # navigate to module folder
git clone https://github.com/brobergp/MMM-htmlvideo.git # clone this repository
```

  2\. Then, add the following into the `modules` section of your `config/config.js` file:

````javascript
{
  module: 'MMM-htmlvideo',
  position: 'fullscreen_below',
  config: {
    videoSRC: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
    loop: true,
  }
},
````


## customization

  Copy the code from the htmlvideo.css to your own custom.css and change size, position etc with css.

## Configuration options

The following properties can be configured:

| option | description |
| ------------- | ------------- |
| `videoSRC` | The location of your video,   |
| `loop` | If the video is suppose to play on an endless loop or not, `true` or `false`, default is `true` |
