import axios from 'axios';
import type { DiaryEntry, DiaryFormValues } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

const getAll = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then(response => response.data);
};

const create = (newDiary: DiaryFormValues) => {

  try {
    const response = axios.post<DiaryEntry>(baseUrl, newDiary);
    return response.then(response => response.data);
  } catch (error) {
    throw new Error('Failed to create diary entry');
  }
};

export default { getAll, create };