import { useState } from "react";
import type { DiaryFormValues } from "../types";

interface AddDiaryFormProps {
  onSubmit: (values: DiaryFormValues) => void;
}