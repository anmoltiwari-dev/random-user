import axios from 'axios';
import { UserResults } from '../types';

export const fetchRandomUser = async () => {
   try {
      const userRes = await axios.get(`https://randomuser.me/api`);
      const userData: UserResults = userRes.data;
      return userData.results[0];
   } catch (err) {
      console.error('Error from the API');
   }
}