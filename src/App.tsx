import { useState, useEffect } from 'react'
import type { DiaryEntry } from './types'
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