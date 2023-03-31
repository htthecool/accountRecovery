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

## Storing Private Key

Both Ios and Android devices offer Keychain service for secure storage of private keys. In this project I am storing private key in the OS offered Keychain. This is safe enough. Both Android and IOS have security mechanisms to prevent unauthorized access.

For added protection, we can always add a 2-tier authentication system to authorize any transactions. There are many web2 solutions, but I am not aware of any web3 2 tier auth password generators.
