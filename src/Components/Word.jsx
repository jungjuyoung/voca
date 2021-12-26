import React, { useState, useCallback } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = useCallback(() => {
    setIsShow(isShow => !isShow);
  }, []);

  const toggleDone = useCallback(() => {
    setIsDone(isDone => !isDone);
  }, []);

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "숨기기" : "뜻보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
