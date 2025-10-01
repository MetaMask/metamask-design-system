import { StyleSheet, Text, View } from 'react-native';

import StorybookUIRoot from './.rnstorybook';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Default App component
 *
 * @returns React component
 */
function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const AppEntryPoint =
  process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true' ? StorybookUIRoot : App;

export default AppEntryPoint;
