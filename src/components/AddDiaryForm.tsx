import { useState } from "react";
import type { DiaryFormValues } from "../types";

interface AddDiaryFormProps {
  onSubmit: (values: DiaryFormValues) => void;
}

const AddDiaryForm = ({ onSubmit }: AddDiaryFormProps) => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");

    const AddDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit({ date, weather, visibility, comment });
    setDate("");
    setWeather("");
    setVisibility("");
    setComment("");
  }

    return (
    <form onSubmit={AddDiary}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weather">Weather:</label>
        <select
          id="weather"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        >
          <option value="sunny">Sunny</option>
          <option value="rainy">Rainy</option>
          <option value="cloudy">Cloudy</option>
          <option value="stormy">Stormy</option>
        </select>
      </div>
      <div>
        <label htmlFor="visibility">Visibility:</label>
        <select
          id="visibility"
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        >
          <option value="great">Great</option>
          <option value="good">Good</option>
          <option value="ok">Ok</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit">Add Diary Entry</button>
    </form>
  );
};

export default AddDiaryForm;