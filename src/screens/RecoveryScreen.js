import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import Web3 from "web3";
import { decode } from "base-64";
import * as Keychain from "react-native-keychain";

const KEYCHAIN_SERVICE_NAME = "alturaAppKeychain";

export default function RecoveryScreen() {
  const [recoveredAccount, setRecoveredAccount] = React.useState(null);
  const [seedWords, setSeedWords] = React.useState(Array(12).fill(""));
  const { width } = useWindowDimensions();

  const handleWordChange = (id, value) => {
    const words = [...seedWords];
    words[id] = value?.trim();
    console.log("words: ", words);
    setSeedWords([...words]);
  };

  const recoverAccount = async () => {
    const mnemonic = seedWords;
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider(
        "wss://ropsten.infura.io/ws/v3/393e1073c89543f18d2490bb052d7180"
      )
    );

    const privateKey = Buffer.from(decode(mnemonic), "hex");

    // add private key to keychain
    await Keychain.setGenericPassword("eth_wallet_private_key", privateKey, {
      service: KEYCHAIN_SERVICE_NAME,
    });

    const account = web3.eth.accounts.privateKeyToAccount(
      "0x" + privateKey.toString("hex")
    );

    const weiBalance = web3.eth.getBalance(account.address);

    const balance = web3.utils.fromWei(weiBalance, "ether");

    setRecoveredAccount({
      account,
      balance,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {recoveredAccount && (
          <View>
            <Text>Recovered Account Address:</Text>
            <Text>{recoveredAccount?.account}</Text>
            <Text>Account Balance:</Text>
            <Text>{recoveredAccount?.balance} ETH</Text>
          </View>
        )}
        <Text style={styles.title} variant="titleMedium">
          Please enter your recovery seed phrase to access you account
        </Text>
        <Text style={styles.title} variant="bodyMedium">
          Your recovery seed phrase is a unique set of words that you get when
          you open your wallet account. Please make sure you enter the words in
          the right order.
        </Text>
        <View style={styles.formContainer}>
          {seedWords.map((word, idx) => (
            <View
              key={idx}
              style={[styles.inputContainer, { width: width / 2 - 20 }]}
            >
              <TextInput
                label={`Word ${idx + 1}`}
                value={word}
                onChangeText={(text) => handleWordChange(idx, text)}
              />
            </View>
          ))}
        </View>
        <Button
          style={styles.actionContainer}
          icon="key"
          mode="contained"
          onPress={recoverAccount}
        >
          Recover Account
        </Button>
        <Button onPress={handleCreateNewAccount}>Create new account</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputContainer: {
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  actionContainer: {
    marginTop: 20,
  },
});
