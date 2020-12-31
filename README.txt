
= Discussion of Concepts =

== Files ==

src/components is where most of the application lives. We're adapting concepts from rails, and the components resemble rails resources. (A resource is basically the object that has a corresponding database table.) That means CRUD operations can be done by "actions" list, new, create, edit, update, destroy, show.

The default namespace and default component name is "application". If you don't know where to put something and it doesn't belong to a resource, consider putting it there.

= Develop =
 yarn install

Go to https://tgm.mac:3002/en/account

== How to implement a feature ==
Once you get a Redmine ticket,

Create a new feature branch. The branch name should either be a version (e.g. 0.0.0) or the ticket number, with prefix `ii-`, so for example ii-123. Only branch from master please.

Submit a PR to master.

= Run =
 npm run start

= Test =

This application is to be test-driven, and regression bugs should gain a test when fixed. While we are not rock-hard on this rule, and committing code without tests is allowed, we very much encourage writing tests with code. We reserve the right to reject code that is not tested. Effectively, TDD is almost required.

We use jest, enzyme. See package.json and scripts/ .

 npm run test

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
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

ionic cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="3016949928380365" --variable APP_NAME="Guyd"

