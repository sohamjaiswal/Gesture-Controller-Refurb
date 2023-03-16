![Project Logo](/doc/logo.png)


[![License](https://img.shields.io/github/license/LiquidGalaxyLAB/Presentation-Tool.svg)](https://opensource.org/licenses/Apache-2.0)
# 🙌 Gesture Controller
A cheap and easy solution to add a new way to control Liquid Galaxy, the main goal of the project is to add a gesture controller for the platform, totally based in just a android app and a server to listen the commands.

## 🧙‍♂️ About
The project has the main goal to add new and more interactive ways to use Liquid Galaxy. First, like the project name suggests, the application let you use body poses to navigate with Google Earth with 9 different possible commands:
- **Idle:** is the "normal pose" and also performs a stop command;
- **Move:** move Google Earth to north, south, west or east;
- **Rotate:** rotates the camera to left or right;
- **Zoom:** make the camera get closer or out (in and out).

## 🙊 Voice Features (disabled 🙁)
Voice features are currently unsupported <br />
This is due to very high version disparity b/w the currently implemented speech to text flutter package and the current android supported speech to text package version <br />
It can be worked on given enough time as the implemented version is, speech_to_text v2.3.0 whereas the current version is v6.1.1! <br />
A disparity of 4 major version releases! Each of which implemented breaking changes!!
~~Also, the project has support to voice commands, that contains all the previous pose commands plus 2 more, in total 11 commands:~~
- ~~**Fly to:** perform a query on Google Earth, and just make it go to someplace;~~
- ~~**Planet:** change Google Earth current planet, with Earth, Moon, Mars, and Sky possibilities.~~

Gesture Controller uses one Android app to get the user camera pose inputs and the speech to voice commands, and also, a server to properly perform the commands on Liquid Galaxy. You can see the global project schema in the image below.
<br />
<br />
![Global Schema](/doc/global_schema.png)
<br />
<br />
The application has two possible setups, you can see in the schema that we have _"Local Server"_ or _"SSH Calls"_ this is because the server can be installed in LG master, so all commands are performed directly and locally, resulting in better performance; or can be installed on a different machine, in this case, the server makes SSH calls to master, consequently is added some more time between the user performs a pose and Google Earth respond to it, caused by SSH latency.

#### Major technologies used
- [Dart (Flutter)](https://flutter.dev)
- [Node.js](https://nodejs.org/en/)
- [Tensorflow Lite](https://www.tensorflow.org/lite)
- [Posenet](https://www.tensorflow.org/lite/models/pose_estimation/overview)
- [Socket.IO](https://socket.io)

#### Application showup
Here some screenshots of the Android application.
<br />
<br />
![Global Schema](/doc/app_screenshots.png)

## 📚 Guides
Here some guides to install and use the application.
#### Install server
To install the the server run install.sh and follow the instructions.
``` bash
sudo bash install.sh
```
It's important to consider that install the server in another machine (not Liquid Galaxy master) may cause some more commands latency between doing a gesture and see it on Google Earth, due to the fact that server and master use SSH for communication. For a better experience install the server on Liquid Galaxy master by just leaving the _”master ip”_  input blank in installation process.

#### Run server
To run the sever just use Node.js terminal command inside _gcserver_ folder.
```bash
node index.js
```
It's important to consider that you must have the Node.js version equal or greater than 10.4.0.

#### Run mobile application
To use the Android application you have two options.

##### Get application apk
In this case you can just download it on Play Store or get [here](https://drive.google.com/drive/u/0/folders/1fWzFNq7PgQY8xgaQBN_8fVCIN3UipCUP).

##### Debug with flutter
In this option you can debug the application using Flutter, using Android Studio or inside _gcmobile_ folder by running the following commands.
``` bash
flutter pub get
flutter run
```
#### How to use?
Here how to use the application and some recommendations for a better experience. So with server running and the Android app installed and opened in some device follow the instructions.
##### Android app setup
1. Go to settings tab (settings icon on the superior left on the camera screen);
2. Tap in _”edit server”_ button;
3. Input the application server ip and the port (same as you set in the installation process);
4. Just tap connect and in the server details must be updated with _”connected”_ status;
5. Just go back to the camera screen and the application is ready to read pose and voice commands.

##### Usage recommendations
- Make sure that the device is in landscape left mode, with the back camera pointed to the user;
- The device should be at a height of 90cm from the ground and with a distance of 200cm  between user and device.
- Check if the user can be clearly identified by the camera, with a good contrast with the background.


## 🍻 Special Thanks
Thanks to my main mentor of _Google Summer of Code 2020_, Iván Santos González and the Liquid Galaxy admin Andreu Ibáñez. Also to the local Liquid Galaxy Lab coordinator (Brazil, São Paulo, Sorocaba - Facens university) who helped me the most to get this opportunity and also trained me to accomplish this project, Marc Gonzalez Capdevila.

## 🌎 License
This software is under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)

Copyright 2020 [Bruno Faé Faion](https://www.linkedin.com/in/bruno-faé-faion-b36a03192/)
