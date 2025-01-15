import { categories } from "../data/category";
import { useState } from "react";

export default function Form() {
  const [activity, setActivity] = useState({
    category: "",
    name: "",
    calories: 0,
  });

  return (
    <form className="space-y-2 bg-white shadow p-10 rounded-lg  max-w-3xl mx-auto">
      <p>Formulario</p>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categorias:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded lg"
          placeholder="Ej. Comida: jugo de naranja, ensalada, Ejercicio: pesas, bicicleta"
          value={activity.name}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 p-2 rounded lg"
          placeholder="Calorias: Ej: 300 o 500"
          value={activity.calories}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bolt uppercase text-white cursor-pointer"
        value="Guardar Comida o Ejercicio"
      />
    </form>
  );
}
