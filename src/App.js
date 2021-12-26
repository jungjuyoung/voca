import Header from "./Components/Header";
import DayList from "./Components/DayList";
import Day from "./Components/Day";
import Error from "./Components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateWord from "./Components/CreateWord";
import CreateDay from "./Components/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/createWord" element={<CreateWord />} />
          <Route path="/createDay" element={<CreateDay />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
