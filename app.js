/**
* Copyright 2014 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
**/

var express = require('express');

var PORT = 80;

var app = express();
app.get('/items', function (req, res) {
  res.json({"total_rows":9,"offset":0,"rows":[{"id":"02d464187ca55de949eb5b2eb0cc0cf9","key":"02d464187ca55de949eb5b2eb0cc0cf9","value":{"rev":"1-d942c72ce909d19fc6932000dfe68fe9"},"doc":{"_id":"02d464187ca55de949eb5b2eb0cc0cf9","_rev":"1-d942c72ce909d19fc6932000dfe68fe9","name":"Football","color":"brown","quantity":64,"description":"Throw this football around the yard.","usaDollarPrice":49.99,"imgsrc":"https://dl.dropboxusercontent.com/s/nmq741933tp2mcw/football.jpg","isNew":false}},{"id":"10898614b1c979d14f144910d4dff598","key":"10898614b1c979d14f144910d4dff598","value":{"rev":"1-3412b2354c8bf559852375c274df8097"},"doc":{"_id":"10898614b1c979d14f144910d4dff598","_rev":"1-3412b2354c8bf559852375c274df8097","name":"Chicago, IL","color":"multi color","quantity":1,"description":"The entire city of Chicago is up for grabs.","usaDollarPrice":6500000000,"imgsrc":"https://dl.dropboxusercontent.com/s/y4he3pdvww18j8d/chicago.jpg","isNew":true}},{"id":"1379a9992febf00db7d903ea5a906194","key":"1379a9992febf00db7d903ea5a906194","value":{"rev":"1-f607e16a8754ba05f5a2b364fa43272a"},"doc":{"_id":"1379a9992febf00db7d903ea5a906194","_rev":"1-f607e16a8754ba05f5a2b364fa43272a","name":"Bar Stool","color":"black","quantity":7,"description":"A swiveling bar stool perfect for any raised table or counter. This bar stool also has a level for height adjustment.","usaDollarPrice":199.99,"imgsrc":"https://dl.dropboxusercontent.com/s/7i3j1vmaxoh1ili/barStool.jpg","isNew":false}},{"id":"14d1e3adb72c8aa5d52d98c80247c11a","key":"14d1e3adb72c8aa5d52d98c80247c11a","value":{"rev":"1-3154d5b210814ac1de9f65a58b50ce1c"},"doc":{"_id":"14d1e3adb72c8aa5d52d98c80247c11a","_rev":"1-3154d5b210814ac1de9f65a58b50ce1c","name":"Hot Air Balloon","color":"multi color","quantity":3,"description":"If you bought Chicago, you might as well buy a hot air balloon to travel your newly acquired city.","usaDollarPrice":10000000,"imgsrc":"https://dl.dropboxusercontent.com/s/1w9ua4xh2zyvviq/hotairballoon.jpg","isNew":true}},{"id":"4bc6c97db870e236fd2309ff2acd3f3e","key":"4bc6c97db870e236fd2309ff2acd3f3e","value":{"rev":"1-75a3d88c340b6f1a916c0a0571467392"},"doc":{"_id":"4bc6c97db870e236fd2309ff2acd3f3e","_rev":"1-75a3d88c340b6f1a916c0a0571467392","name":"Microwave","color":"black","quantity":71,"description":"Heat up your food in style with this slick looking microwave.","usaDollarPrice":69.99,"imgsrc":"https://dl.dropboxusercontent.com/s/ch9lkfm39t3h260/microwave.jpg","isNew":false}},{"id":"5b172d8b2085063311c83102fee5c7ad","key":"5b172d8b2085063311c83102fee5c7ad","value":{"rev":"1-731530d242ada22445b82cdb636c115f"},"doc":{"_id":"5b172d8b2085063311c83102fee5c7ad","_rev":"1-731530d242ada22445b82cdb636c115f","name":"Baby Cactus Plant","color":"green","quantity":97,"description":"Adopt a small cactus plant. They make great conversation starters when you have company over. Do not touch!","usaDollarPrice":14.99,"imgsrc":"https://dl.dropboxusercontent.com/s/wqwgw48be49g6bb/cactus.jpg","isNew":true}},{"id":"d042819c12b40ed128db2e27516b3b50","key":"d042819c12b40ed128db2e27516b3b50","value":{"rev":"1-1108beb62ced63926028150735810c55"},"doc":{"_id":"d042819c12b40ed128db2e27516b3b50","_rev":"1-1108beb62ced63926028150735810c55","name":"Bluetooth Speaker","color":"brown","quantity":155,"description":"Listen to your tunes anywhere with this portable and super loud bluetooth speaker!","usaDollarPrice":49.99,"imgsrc":"https://dl.dropboxusercontent.com/s/lx487x8kc6kl88d/bluetoothspeaker.jpg","isNew":false}},{"id":"d63b38f7532e97d2cd3048015767654e","key":"d63b38f7532e97d2cd3048015767654e","value":{"rev":"1-bff047d691b1e89a7637f460836aa8f8"},"doc":{"_id":"d63b38f7532e97d2cd3048015767654e","_rev":"1-bff047d691b1e89a7637f460836aa8f8","name":"T-Rex","color":"gray","quantity":1,"description":"A monstrous T-Rex that may or may not listen to your commands.","usaDollarPrice":3000,"imgsrc":"https://dl.dropboxusercontent.com/s/ttzhdan0rc90c3b/trex.jpg","isNew":true}},{"id":"f434c2c1307fa7bf90c4f2ec95c3a924","key":"f434c2c1307fa7bf90c4f2ec95c3a924","value":{"rev":"1-ea446d20df2d1095cc6c82b0597affb0"},"doc":{"_id":"f434c2c1307fa7bf90c4f2ec95c3a924","_rev":"1-ea446d20df2d1095cc6c82b0597affb0","name":"Golf Ball","color":"white","quantity":24,"description":"Hit the furthest drives with this new and improved golf ball. Built for distance and accuracy.","usaDollarPrice":24.99,"imgsrc":"https://dl.dropboxusercontent.com/s/m261pusn6rlcfcn/golfball.jpg","isNew":false}}]});
});

app.get('/loadTest', function (req, res) {
 res.json({"success": 0, "fail": 0, "time": 0});
});

app.get('/', function (req, res) {
  res.send("");
});


app.listen(PORT)
console.log(' Application Running on port' + PORT);
