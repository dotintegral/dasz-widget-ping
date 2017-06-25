# dasz-widget-ping
Ping widget for Dasz (https://github.com/dotintegral/Dasz)

Simply pings the given pages and displays the result

Configuration options
  
    {
      "name": "ping",
      "config": {
        "name": "google", // name do be displayed as a widget's title
        "url": "google.com", // url to ping
        "port": 80, // port (optional, default 80)
        "refresh": 3000 // refresh in ms (optional, default 5000)
      },
      "data": {}
    }
