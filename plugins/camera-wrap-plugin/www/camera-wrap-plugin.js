var exec = require('cordova/exec');

exports.coolMethod = function(success, error) {
  options = {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    encodingType: Camera.EncodingType.JPEG,
    correctOrientation: true
  };
  navigator.camera.getPicture(success, error, options);
};
