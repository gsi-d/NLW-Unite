import { AttendeeList } from "./components/Attendee-list";
import { Header } from "./components/Header";
import "./index.css";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  );
}
