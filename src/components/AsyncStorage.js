import AsyncStorage from '@react-native-community/async-storage';

storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
}

getData = async (key, value) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
  }
}

module.exports = { storeData, getData };