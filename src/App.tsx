import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Home from "pages/EmployeeApp/Home/Home";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import About from "pages/EmployeeApp/About/About";
import Clients from "pages/Clients/Clients";
import DeutscheTelekom from "pages/Clients/DeutscheTelekom/DeutscheTelekom";
import Siemens from "pages/Clients/Siemens/Siemens";
import Volkswagen from "pages/Clients/Volkswagen/Volkswagen";

import GlobalStyles from "styles/GlobalStyles";

// Lessons
// import Lesson_06 from "lessons/lesson_06/Lesson_06";
// import Lesson_07 from "lessons/lesson_07/Lesson_07";
// import Lesson_08 from "lessons/lesson_08/Lesson_08";
// import Lesson_09 from "lessons/lesson_09/Lesson_09";
// import Playground from "components/consultation/Playground/Playground";
// import Lesson_10 from "lessons/lesson_10/Lesson_10";
// import {Lesson_11} from "lessons/lesson_11/Lesson_11";
// import Lesson_12 from "lessons/lesson_12/Lesson_12";
// import Lesson_13 from "lessons/lesson_13/Lesson_13";

// Homeworks
// import Homerwork_06 from "homeworks/Homework_06/Homework_06";
// import Homework_07 from "homeworks/Homework_07/Homework_07";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Homework_09 from "homeworks/Homework_09/Homework_09";
// import Homework_10 from "homeworks/Homework_10/Homework_10";
// import Homework_12 from "homeworks/Homework_12/Homework_12";

function App() {
  return (
    <BrowserRouter>
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/clients" element={<Clients />}>
            <Route path="siemens" element={<Siemens />} />
            <Route path="volkswagen" element={<Volkswagen />} />
            <Route path="deutscheTelekom" element={<DeutscheTelekom />} />
          </Route>

          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Lesson_08 />  */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_12 /> */}
      {/* <Lesson_13 /> */}
      {/* <Homerwork_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_10 /> */}
      {/* <Homework_12 /> */}

      {/* <Playground /> */}
    </BrowserRouter>
  );
}
export default App;
