import { createBrowserRouter } from "react-router-dom";
import Products from "../Components/Products";
import Product from "../Components/Product";

const router = createBrowserRouter([
  {
    path: "products",
    element: <Products />,
    children: [
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

export default router;
