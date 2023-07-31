## Web-RTC

Web Real-Time Communication (WebRTC) is a framework that enables you to add real time communication (RTC) capabilities to your web and mobile applications. WebRTC allows the transmission of arbitrary data (video, voice, and generic data) in a peer-to-peer fashion.

Almost every modern browser supports WebRTC. Additionally, there are WebRTC SDKs targeting different platforms, such as iOS or Android.

## Why WebRTC?

WebRTC apps provide strong security guarantees; data transmitted over WebRTC is encrypted and authenticated with the help of theSecure Real-Time Transport Protocol (SRTP).

WebRTC is open-source and free to use. The project is backed by a strong and active community, and it's supported by organizations such as Apple, Google, and Microsoft.

WebRTC is platform and device-independent. A WebRTC application will work on any browser that supports WebRTC, irrespective of operating systems or the types of devices.

# To run the project, clone the repository into your local system.

Inside the root folder, run -

## npm install

This would install the required dependencies into the node_modules folder.

Open the terminal, navigate to the root folder and run -

## nodemon index.js

Post this, open another terminal window and navigate to the ./client directory inside the root folder. Inside this directory, run -

## npm start

After this, you will be able to find your project at -

## http://localhost:3000

Process to make a call -

1. You need to enter your name and copy the ID. Then you need to paste that ID into the "Make a Call" section and press "Call".
2. Soon-after the prompt below would display -
   ~name~ is calling.
3. Press the "Answer" button and you will see another video of the second peer on your screen.
4. You can do the same process with another peer by only sharing the encrypted ID.

Some snapshots of the running prototype -
