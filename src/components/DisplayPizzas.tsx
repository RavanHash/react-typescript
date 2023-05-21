import Pizza from "../models/Pizza";
import { FC } from "react";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            key={pizza.id}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
            pizza={pizza}
          />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
