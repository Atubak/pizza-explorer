import { useSelector } from "react-redux";
import {
  selectListOfPizzas,
  selectMostBoughtPizzas,
  selectNumberOfPizzas,
} from "../store/pizzas/selectors";

import { selectUser } from "../store/user/selectors";

import { useDispatch } from "react-redux";
import { toggleFavorites } from "../store/user/slice";
import { deletePizza } from "../store/pizzas/slice";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectListOfPizzas);
  const pizzaAmount = useSelector(selectNumberOfPizzas);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <p>TODO: the list of pizzas</p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <p>
              <strong>{pizza.name}</strong>{" "}
              <button onClick={() => dispatch(deletePizza(pizza.id))}>X</button>
              <br />
              {pizza.description}
              <br />
              times bought: <strong>{pizza.bought}</strong>
              <br />
              <button onClick={() => dispatch(toggleFavorites(pizza.id))}>
                {user.favorites.find((favId) => {
                  return favId === pizza.id;
                })
                  ? "♥"
                  : "♡"}
              </button>
            </p>
          </li>
        ))}
      </ul>
      <p>total number of pizzas: {pizzaAmount}</p>
    </div>
  );
}
// ♡♥
