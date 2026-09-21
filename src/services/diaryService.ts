import axios from 'axios';
import type { DiaryEntry, DiaryFormValues } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

const getAll = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then(response => response.data);
};

export default { getAll };