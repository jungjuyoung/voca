import dummy from "../db/data.json";

export default function Day() {
  const wordList = dummy.words.filter(word => word.day === 3);

  return (
    <table>
      <tbody>
        {wordList.map(word => (
          <tr key={word.id}>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
