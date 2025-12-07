import { VscFeedback } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { RiStarSLine } from "react-icons/ri";
const App = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    rating: "select rating",
    message: "",
  });

  const handleOption = (e) => {
    const { value } = e.target;
    console.log(`the value is ${value}`);
    setFeedback((prev)=>({...prev, rating: value}));
    setToggleArrow(!toggleArrow);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault()
    console.log(feedback)
  }
  return (
    <section className="bg-[#7f2525] w-screen h-screen flex justify-center items-center ">
      <div className="bg-[#fe4a49] w-[420px] p-[24px]  rounded-md shadow-lg flex flex-col gap-5 text-[#7f2525] ">
        <VscFeedback className="mx-auto font-bold" size={40} />
        <h1 className="text-[1.5rem] font-bold">submit your feedback</h1>
        <form onSubmit={handleForm} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">
              <FaRegUser size={20} />
            </label>
            <input
              className="outline-none border rounded-md p-2 font-medium"
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={handleInput}
              value={feedback.name}
            />
          </div>
          <div>
            <label htmlFor="button">
              <RiStarSLine size={20} />
            </label>
            <button
              id="button"
              type="button"
              className=" rounded-md flex border px-2 py-1  justify-center items-center font-bold mb-2 mt-2 w-40"
              onClick={() => setToggleArrow(!toggleArrow)}
            >
              {feedback.rating}
              <MdKeyboardArrowDown
                size={30}
                className={`mt-1 transition duration-300 ${
                  toggleArrow ? `rotate-180` : `rotate-0`
                }`}
              />
            </button>
            <div
              className={` border transition duration-300  bg-[#7f2525] w-40 shadow-md rounded-md border  ${
                toggleArrow ? `opacity-100 scale-y-100` : `opacity-0 scale-y-0`
              } absolute`}
            >
              <option
                className="text-[#fe4a49] hover:text-[#7f2525] hover:bg-[#fe4a49] font-bold  hover:shadow-md px-5 py-1 rounded-md flex justify-center"
                onClick={handleOption}
              >
                1
              </option>
              <option
                className="text-[#fe4a49] hover:text-[#7f2525] hover:bg-[#fe4a49] font-bold  hover:shadow-md px-5 py-1 rounded-md flex justify-center"
                onClick={handleOption}
              >
                2
              </option>
              <option
                className="text-[#fe4a49] hover:text-[#7f2525] hover:bg-[#fe4a49] font-bold  hover:shadow-md  px-5 py-1 rounded-md flex justify-center"
                onClick={handleOption}
              >
                3
              </option>
              <option
                className="text-[#fe4a49] hover:text-[#7f2525] hover:bg-[#fe4a49] font-bold  hover:shadow-md px-5 py-1 rounded-md flex justify-center"
                onClick={handleOption}
              >
                4
              </option>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">
              <MdOutlineMessage size={20} />
            </label>
            <textarea
              placeholder="type your feedback"
              name="message"
              id="message"
              className="border rounded-md p-2 w-full outline-none font-medium"
              rows={4}
              onChange={handleInput}
              value={feedback.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#7f2525] p-2 text-[#fe4a49] rounded-md font-bold"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};
export default App;
