import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "resume",
        Component: Resume,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "case-study/:id",
        Component: CaseStudy,
      },
    ],
  },
]);
