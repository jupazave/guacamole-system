'use strict';

let chromecastjs = require('chromecast-js');

export default () => {

    var browser = new chromecastjs.Browser();

    var finish = () => {
        console.log('Chromecast Stopped!');
        browser = null;
    }

    browser.on('deviceOn', function(device){
      device.connect();
      device.on('connected', function(){
        device.close(finish);
      });
    });

}



