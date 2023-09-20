import AsyncStorage from '@react-native-async-storage/async-storage';

// Сохранение объекта
export const storeObject = async (key: string, value: object) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
    }
  };
  
  // Получение объекта
export const getObject = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  export const removeObject = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };
  
