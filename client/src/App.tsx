import Login from "./components/Login";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage<string | null>("id", null);

  return (
    <div className="border-solid border-2 border-red-800 flex justify-center items-center h-full w-full">
      <p>{id}</p>
      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
