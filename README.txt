
= Discussion of Concepts =

== Files ==

src/components is where most of the application lives. We're adapting concepts from rails, and the components resemble rails resources. (A resource is basically the object that has a corresponding database table.) That means CRUD operations can be done by "actions" list, new, create, edit, update, destroy, show.

The default namespace and default component name is "application". If you don't know where to put something and it doesn't belong to a resource, consider putting it there.

= Develop =
 yarn install

Go to https://tgm.mac:3002

== How to implement a feature ==
Once you get a Redmine ticket,

Create a new feature branch. The branch name should either be a version (e.g. 0.0.0) or the ticket number, with prefix `ii-`, so for example ii-123. Only branch from master please.

Submit a PR to master.

= Run =
 yarn run start


= Test =

This application is to be test-driven, and regression bugs should gain a test when fixed. While we are not rock-hard on this rule, and committing code without tests is allowed, we very much encourage writing tests with code. We reserve the right to reject code that is not tested. Effectively, TDD is almost required.

We use jest, enzyme. See package.json and scripts/ .

 yarn run test

See the android logs from the shell:

 adb logcat

= Deploy =

== For Android ==
From: https://capacitorjs.com/docs/android
From: https://capacitor.ionicframework.com/docs/android/

 yarn run build
 npx cap sync android
 # npx cap open android

After running above commands, android studio will get open then you can build app from there

= Technical Implementation Details =

== Ethereum ==

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js --network ropsten
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix

hardhat run --network ropsten scripts/deploy.js

npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

== Facebook Login ==

From: https://ionicframework.com/docs/native/facebook

fb app id: 3016949928380365

ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="3016949928380365" --variable APP_NAME="Guyd"

keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

ionic cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="3016949928380365" --variable APP_NAME="Guyd"

== Metamask Login ==

From: https://medium.com/coinmonks/web3-react-connect-users-to-metamask-or-any-wallet-from-your-frontend-241fd538ed39


