# Getting Started with Account recovery

This project lets you recover your ETH account using your recovery seed phrase

## How to run the application?

Download this project.

In the root directory run:

### `yarn`

This may take a few minutes. After this operation is successfull. Run the following command to start the dev server:

### `yarn expo start`

Expo will start and once successfull you can open the app in respective emulators

### Running on Android emulator

After the previous step is successfull, press 'a' key to open android emulator

### Running on IOS emulator

After the previous step is successfull, press 'i' key to open android emulator

## Important files to check out

### App.js

UI Kit - For this project, I am using an external UI kit React Native Paper https://callstack.github.io/react-native-paper/

Navigation - For navigation I am using React Navigation https://reactnavigation.org/

I have created a routes component that handles all screens. Currently, I have put logic to check if user's device keychain already has private key. If key exists then I directly show the Dashboard, else the user can recover account using mnemonic key.

### RecoverScreen.js

Contains logic to recover account using mnemonic key.
