import { useSelector } from "react-redux";
import {
  selectListOfPizzas,
  selectMostBoughtPizzas,
  selectNumberOfPizzas,
} from "../store/pizzas/selectors";

import { selectUser } from "../store/user/selectors";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectListOfPizzas);
  const pizzaAmount = useSelector(selectNumberOfPizzas);

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
              <strong>{pizza.name}</strong>
              <br />
              {pizza.description}
              <br />
              times bought: <strong>{pizza.bought}</strong>
            </p>
          </li>
        ))}
      </ul>
      <p>total number of pizzas: {pizzaAmount}</p>
    </div>
  );
}
