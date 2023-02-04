import React, {useState} from "react";

const SearchBar = ({setQuery}) => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        setQuery(e.target.value)
    }

  return (
    <div>
      <section>
        <form>
          <input
            className="form-control"
            placeholder="Search characters..."
            autofocus
            type="text"
            name="search"
            value={text}
            onChange={handleChange}
            id="search"
          />
        </form>
      </section>
    </div>
  );
};

export default SearchBar;
