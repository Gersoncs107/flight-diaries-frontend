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
}  