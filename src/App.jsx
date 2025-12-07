import { VscFeedback } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
const App = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  
  return (
    <section className="bg-[#7f2525] w-screen h-screen flex justify-center items-center ">
      <div className="bg-[#fe4a49] w-[360px] p-[24px] rounded-md shadow-lg flex flex-col gap-5">
        <VscFeedback />
        <h1 className="text-[1.5rem]">submit your feedback</h1>
        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="name">
              <CiUser />
            </label>
            <input type="text" name="name" placeholder="enter your name" />
          </div>
          <div>
            <button type="button"
              className="flex border w-fit p-2  justify-center items-center font-bold"
              onClick={() => setToggleArrow(!toggleArrow)}
            >
              Options
              <MdKeyboardArrowDown
                size={30}
                className={`mt-1 transition duration-300 ${
                  toggleArrow ? `rotate-180` : `rotate-0`
                }`}
              />
            </button>
            <div
              className={` border transition duration-300 ${
                toggleArrow ? `visible` : `hidden`
              } absolute`}
            >
              <div className="hover:bg-gray-200 px-5 py-1">Option 1</div>
              <div className="hover:bg-gray-200 px-5 py-1">Option 1</div>
              <div className="hover:bg-gray-200 px-5 py-1">Option 1</div>
              <div className="hover:bg-gray-200 px-5 py-1">Option 1</div>
            </div>
          </div>
          <div>
            <label htmlFor="name">
              <MdOutlineMessage />
            </label>
            <textarea
              placeholder="type your feedback"
              name="feedback"
              id=""
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};
export default App;
