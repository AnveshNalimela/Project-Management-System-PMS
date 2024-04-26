// src/App.tsx
import { Suspense, useContext } from "react";

import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";
import router from "./routes";

// To do that, first I'll import the `ProjectsProvider` in the `App` component.

import { MembersProvider } from "./context/members/context";
import { ProjectsProvider } from "./context/projects/context";

// Then I'll wrap the RouterProvider component with the <ProjectsProvider> component.

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-full w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <Suspense fallback={<>Loading...</>}>
            <RouterProvider router={router} />
          </Suspense>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;
