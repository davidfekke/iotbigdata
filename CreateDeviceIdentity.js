'use strict';

var iothub = require('azure-iothub');

var connectionString = 'HostName=JaxBigDataDemo.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=uBvMK7aPknvdmQPwnLJeRlo35F93V7mK3/h9EoLUmNo=';

var registry = iothub.Registry.fromConnectionString(connectionString);

var device = new iothub.Device(null);
device.deviceId = 'dfekke-internetbtn';
registry.create(device, function(err, deviceInfo, res) {
  if (err) {
    registry.get(device.deviceId, printDeviceInfo);
  }
  if (deviceInfo) {
    printDeviceInfo(err, deviceInfo, res)
  }
});

function printDeviceInfo(err, deviceInfo, res) {
  if (deviceInfo) {
    console.log('Device id: ' + deviceInfo.deviceId);
    console.log('Device key: ' + deviceInfo.authentication.SymmetricKey.primaryKey);
  }
}

/*
Device id: dfekke-internetbtn
Device key: GurSS0ImoNy8HQF7QPCc2DQ5UJ/e3oa9A46gdz4ZBB4=
*/