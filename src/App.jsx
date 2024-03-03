import RootLayout from "./layouts/RootLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DecoratePage from "./pages/DecoratePage";
import CartPage from "./pages/CartPage";
import IntroducePage from "./pages/IntroducePage";
import NewsPage from "./pages/NewsPage";
import ReturnPolicy from "./pages/ReturnPolicy";
import DeliPolicyPage from "./pages/DeliPolicyPage";
import FAQPage from "./pages/FAQPage";
import ItemPage from "./pages/ItemPage";
import RegisterPage from "./pages/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "decorate",
        element: <DecoratePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "introduce",
        element: <IntroducePage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "return-policy",
        element: <ReturnPolicy />,
      },
      {
        path: "delivery-policy",
        element: <DeliPolicyPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "item",
        element: <ItemPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
