
= Develop =
 yarn install

== How to implement a feature ==
Once you get a Redmine ticket,

Create a new feature branch. The branch name should either be a version (e.g. 0.0.0) or the ticket number, with prefix `ii-`, so for example ii-123. Only branch from master please.

Submit a PR to master.

= Run =
 npm run start

= Test =
How?!

= Deploy =

== For Android ==
From: https://capacitorjs.com/docs/android

 npm run build
 npx cap add android
 npx cap sync
 npx cap copy
 npx cap open android

After running above commands, android studio will get open then you can build app from there

From: https://capacitor.ionicframework.com/docs/android/
 npx cap sync
 npx cap open android

=== Facebook Login ===

From: https://ionicframework.com/docs/native/facebook

fb app id: 3016949928380365

ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="3016949928380365" --variable APP_NAME="Guyd"

keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

ionic cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="3016949928380365" --variable APP_NAME="Guyd"

