// src/App.tsx
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import ThemeContext from "./context/theme";
import router from "./routes";

const App = () => {
  const currentTheme = useContext(ThemeContext);
  console.log(currentTheme);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
