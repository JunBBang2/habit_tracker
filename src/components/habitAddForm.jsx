import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef(); //입력 값을 받아오기 위하여 하는 작업 querySelector와 비슷

  const onSubmit = (event) => {
    event.preventDefault(); // submit이 실행 되었을대 REFRESH가 더이상 발생하지 않도록 하는 작업
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
