module.exports = {
  "server": {
    "baseDir": "./public"
  },
  "files": [
    "./public/**/*.{html,css,js}"
  ],
  "ghostMode": {
    "clicks": false,
    "scroll": false,
    "location": false,
    "forms": false
  },
  "reloadDebounce": 2000,
  "reloadThrottle": 1000
};