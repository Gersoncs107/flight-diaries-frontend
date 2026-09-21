import { useState, useEffect } from 'react'
import type { DiaryEntry, DiaryFormValues } from './types'
import diaryService from './services/diaryService'
import AddDiaryForm from './components/AddDiaryForm'

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([])

  useEffect(() => {
    diaryService.getAll().then(data => {
      setDiaries(data)
    })
  }, [])

  return (
    <div>

      <AddDiaryForm onSubmit={(values) => {
        // Here you would typically send the new diary entry to your backend
        // and then update the state with the new entry. For now, we'll just log it.
        console.log('New diary entry:', values);
      }} />

      <h1>Flight Diaries</h1>
      <p>Welcome to the Flight Diaries app! Here you can add and view your flight experiences.</p>
      <p>Use the form above to add a new diary entry.</p>
      <h2>Flight Diaries</h2>
      {diaries.map(diary => (
        <div key={diary.id}>
          <h3>{diary.date}</h3>
          <p>visibility: {diary.visibility}</p>
          <p>weather: {diary.weather}</p>
        </div>
      ))}
    </div>
  )
}

export default App