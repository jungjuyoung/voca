import React from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();
  const addDay = () => {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("설정이 완료 되었습니다.");
        navigate("/");
      }
    });
  };
  return (
    <div>
      <h2>현재 일수 : {days.length}일</h2>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
