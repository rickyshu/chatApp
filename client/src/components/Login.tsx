import { useRef, FormEvent } from "react";
//uuid의 경우 npm i @types/uuid을 추가적으로 import 해줘야 한다.
import { v4 as uuidv4 } from "uuid";

interface LoginProps {
  onIdSubmit: (value: string | null) => void;
}

const Login: React.FC<LoginProps> = ({ onIdSubmit }) => {
  //ref의 타입은 삽입한 htmlElement의 타입을 입력해줘야 한다.
  const idRef = useRef<HTMLFormElement | null>(null);
  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(idRef.current?.value, "idref");
    onIdSubmit(idRef.current?.value || null);
  };

  const createNewId = () => {
    onIdSubmit(uuidv4());
  };

  return (
    <div className="p-4 border-solid border-2 border-slate-900 w-[550px] h-[300px] flex flex-col space-y-5 rounded-xl">
      <p className="capitalize">enter your id</p>
      <form
        action=""
        ref={idRef}
        className="flex flex-col space-y-4"
        onSubmit={handlesubmit}
      >
        <input
          type="text"
          className="rounded border-solid border-2 w-full p-2"
        />
        <div className="flex space-x-2">
          <button className="bg-blue-500 rounded w-28 h-10 capitalize">
            login
          </button>
          <button
            className="bg-slate-500 rounded w-36 h-10 capitalize"
            onClick={createNewId}
          >
            create a new id
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
