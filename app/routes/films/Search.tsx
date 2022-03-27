import searchIcon from "../../assets/search.svg";

export default function Search() {
  return (
    <div className="my-5 ">
      <form className="flex flex-row items-center justify-center">
        <label htmlFor="title" className="font-bold mx-2">
          Search
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Type a title"
            className="border-2 mx-2 rounded py-2 px-3 bg-slate-600"
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700  font-bold py-2 px-4 rounded"
        >
          <img src={searchIcon} alt="searchicon" />
        </button>
      </form>
    </div>
  );
}
