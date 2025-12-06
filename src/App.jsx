import { VscFeedback } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
const App = () => {
  return (
    <section className="bg-[#7f2525] w-screen h-screen flex justify-center items-center ">
      <div className="bg-[#fe4a49] w-[360px] p-[24px] rounded-md shadow-lg">
        <VscFeedback />
        <h1 className="text-[1.5rem]">submit your feedback</h1>
        <form>
          <label htmlFor="name">
            <CiUser />
          </label>
          <input type="text" />
        </form>
      </div>
    </section>
  );
};
export default App;
