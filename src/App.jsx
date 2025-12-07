import { VscFeedback } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
const App = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  return (
    <section className="bg-[#7f2525] w-screen h-screen flex justify-center items-center ">
      <div className="bg-[#fe4a49] w-[360px] p-[24px] rounded-md shadow-lg">
        <VscFeedback />
        <h1 className="text-[1.5rem]">submit your feedback</h1>
        <form>
          <label htmlFor="name">
            <CiUser />
          </label>
          <input type="text" name="name" placeholder="enter your name" />
          <label htmlFor="name">
            <MdOutlineMessage />
          </label>
          <div>
            <div
              className="flex border w-fit p-2  justify-center items-center font-bold"
              onClick={()=>setToggleArrow(!toggleArrow)}
            >
              Options
              <MdKeyboardArrowDown
                size={30}
                className={`mt-1 ${toggleArrow ? `rotate-180` : `rotate-0`}`}
              />
            </div>
            <div className="w-fit border ">
              <div className="hover:bg-gray-200 px-2 py-1">Option 1</div>
              <div className="hover:bg-gray-200 px-2 py-1">Option 1</div>
              <div className="hover:bg-gray-200 px-2 py-1">Option 1</div>
              <div className="hover:bg-gray-200 px-2 py-1">Option 1</div>
            </div>
          </div>
          <textarea
            placeholder="type your feedback"
            name="feedback"
            id=""
          ></textarea>
        </form>
      </div>
    </section>
  );
};
export default App;
