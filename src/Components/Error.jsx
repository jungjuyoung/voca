import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div>잘못된 페이지 입니다.</div>
      <Link to="/">돌악가기</Link>
    </>
  );
}
