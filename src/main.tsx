import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./css/style.css";
import "./css/satoshi.css";
import router from "./Routes/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store/store";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
