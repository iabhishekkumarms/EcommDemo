import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const token_storage = new MMKV({
  id: 'user_storage',
  encryptionKey: 'RSA_KEY',
});

const reduxStorage = {
  setItem: async (key: string, val: any): Promise<boolean> => {
    try {
      await storage.set(key, val); //MMKV supports async, use await
      return true;
    } catch (error) {
      console.error('Error saving to MMKV:', error);
      return false;
    }
  },

  getItem: async (key: string): Promise<any | null> => {
    try {
      const value = await storage.getString(key); // Await to make sure it completes
      return value; // Returns the value if found, otherwise null
    } catch (error) {
      console.error('Error retrieving from MMKV:', error);
      return null; // Returns null in case of error or if item doesn't exist
    }
  },

  removeItem: async (key: string): Promise<void> => {
    try {
      await storage.delete(key); // Await for delete to complete
    } catch (error) {
      console.error('Error deleting from MMKV:', error);
    }
  },
};

export default reduxStorage;
