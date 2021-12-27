import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import Idays from "./DayList";

export default function CreateWord() {
  const [isLoading, setIsLoading] = useState(false);
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const days: Idays[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);
      const eng = engRef.current.value;
      const kor = korRef.current.value;
      const day = dayRef.current.value;
      console.log(eng);
      console.log(kor);
      console.log(day);

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("설정이 완료 되었습니다.");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="eng">Eng</label>
        <input type="text" id="eng" placeholder="Computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label htmlFor="kor">Kor</label>
        <input type="text" id="kor" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label htmlFor="day">Day</label>
        <select name="days" id="day" ref={dayRef}>
          {days.map(day => (
            <option value={day.day} key={day.id}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
