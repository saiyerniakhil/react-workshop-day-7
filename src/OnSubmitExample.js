import { useState } from "react";

const OnSubmitExample = () => {
  /* OnSubmit and OnChange Example */
  const [name, setName] = useState("");
  const [option, setOption] = useState(0);

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSelect = (event) => {
    setOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(option);
    console.log("submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>The name you entered is - {name}</h4> <br />
        <input
          onChange={handleInput}
          type="text"
          placeholder="Enter your name"
        />{" "}
        <br />
        <span>
          Are you familiar with programming?
          <h4>Option you selected - {option} </h4>
          <select
            onChange={handleSelect}
            default={0}
            name="skill"
            id="skill-select"
          >
            <option value={0}>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>{" "}
          <br />
          <button type="submit">Submit your response</button>
        </span>
      </form>
    </div>
  );
};

export default OnSubmitExample;
