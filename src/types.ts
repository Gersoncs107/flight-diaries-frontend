export interface DiaryEntry {
  id: SVGAnimatedNumber;
  date: string;
  weather: string;
  visibility: string;
  comment?: string;
}

export type DiaryFormValues = Omit<DiaryEntry, 'id'>;