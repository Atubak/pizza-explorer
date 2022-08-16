import { useState } from "react";
import { addPizza } from "../store/pizzas/slice";
import { useDispatch } from "react-redux";

export default function AddPizzaForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = (event) => {
    event.preventDefault();

    console.log("newpizza", name, description);

    dispatch(
      addPizza({
        name: name,
        description: description,
      })
    );

    setName("");
    setDescription("");
  };
  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
