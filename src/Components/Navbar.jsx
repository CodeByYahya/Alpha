import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const lists = ["Home", "About", "Services", "Contact"];
  return (
    <div className="flex items-center px-8">
      <div className="flex px-4 gap-5 w-1/2">
        {lists.map((list, index) => (
          <span key={index}>{list}</span>
        ))}
      </div>
      <div className=" w-1/2">
        <div className="flex items-center justify-end p-2 gap-3">
          <input
            type="text"
            className="pl-2 w-[38%] outline-gray-500 py-2 rounded-lg"
            placeholder="What are you looking for ?"
            name=""
            id=""
          />
          <CiSearch className="size-6" />
          <CiHeart className="size-6" />
          <CiShoppingCart className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
