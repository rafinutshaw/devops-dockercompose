var express = require('express');
const fetch = require("cross-fetch");
const { execSync } = require('child_process');

var app = express();
function getServiceInfo() {
  const ipAddress = execSync('hostname -i').toString().trim();
  const uptime = execSync('uptime').toString().trim();
  const availableDiskSpace = execSync('df --output=avail /').toString().trim().split('\n')[1]; // Only available space
  const availableDiskSpaceGB = (parseInt(availableDiskSpace) / 1024 / 1024).toFixed(2); // Convert KB to GB

  const processes = execSync('ps').toString().trim().split('\n');

  const uptimeFormatted = uptime.match(/up (.*?),/)?.[1] || 'N/A';

  return {
      ip_address: ipAddress,
      processes: processes,
      disk_space: availableDiskSpaceGB + ' GB',
      uptime: uptimeFormatted,
  };
}
app.get('/', function (req, res) {
  fetch('http://service2:3000/info')
    .then((response) => response.json())
    .then((body) => {
        res.json({
          Service1: getServiceInfo(),
          Service2: body,
      });
    }); 
  
});
app.listen(8199, function () {
  console.log('Example app listening on port 8199!');
});