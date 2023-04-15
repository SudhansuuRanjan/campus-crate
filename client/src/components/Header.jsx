import { FaEthereum } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Heading } from "./Heading";



const Header = () => {

    const handleClick = () => {
        console.log("clicked");
    }
  return (
    <div className="pt-24">
      <h1 className="font-bold lg:text-8xl md:text-7xl text-6xl text-center lg:my-20 md:my-16 my-16 mb-10 flex items-center justify-center flex-wrap gap-5 m-auto  max-w-[80%]">
        <div className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600  to-pink-600  flex">
          Accelerate your{" "}
        </div>
        <div className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-purple-700   flex">
          Blockchain Club{" "}
        </div>
        <div className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 to-red-600  flex">
          With CampusCrate
        </div>
      </h1>

      <p className="text-center font-light lg:text-2xl md:text-2xl text-xl  max-w-[80%] m-auto">
        Easy, one tap access to{" "}
        <span className="font-bold text-2xl md:text-3xl lg:text-3xl">
          DAO
        </span>{" "}
        Blockchain.
      </p>
      <div className="flex">
        <p className="text-center font-light text-xl py-12 pb-5 flex items-center m-auto">
          <span>Built on </span>
          <FaEthereum className="dark:text-gray-400 text-gray-600 text-2xl" />
          <span className="dark:text-gray-400 text-gray-600 font-semibold">
            Filecoin
          </span>
        </p>
      </div>

      <div className="m-auto flex mt-3">
        <button
          className="text-white  bg-gradient-to-r  from-pink-500 to-purple-700 px-[4rem] font-semibold py-[0.7rem] rounded-3xl  hover:from-purple-700 hover:to-pink-500 dark:hover:bg-[#0F1221]  m-auto"
          onClick={() => handleClick()}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Header;
