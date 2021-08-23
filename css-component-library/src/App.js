import "./App.css";
import { Toast } from "./lib/index";

export const App = () => {
  return (
    <div>
      <Toast
        message="This is Warning"
        toastType="toastWarning"
        toastPosition="topRight"
        toastTime={10000}
      />
      <Toast
        message="This is Success"
        toastType="toastSuccess"
        toastPosition="topRight"
        toastTime={4000}
      />
      <h1>Hello</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum id
        quaerat magni esse perferendis. Velit necessitatibus fuga ipsum magnam
        inventore delectus, itaque voluptatibus odit eos nihil quod maiores
        reprehenderit voluptate quam, maxime sint dicta quasi laudantium iure ex
        officia laborum numquam ratione? Veniam impedit asperiores modi officia
        minima, corporis non.
      </p>
    </div>
  );
};
