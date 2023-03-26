import axios from 'axios';
import { UserResults } from '../types';

export const fetchRandomUser = async () => {
   const userRes = await axios.get(`https://randomuser.me/api`);
   const userData: UserResults = userRes.data;
   return userData.results[0];
}