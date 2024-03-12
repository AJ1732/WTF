 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header"
import Home from "./components/Pages/Home";
import Review from "./components/Pages/Review";
import About from "./components/Pages/About";
import AllReviews from "./components/Pages/AllReviews";
import { ReviewContextProvider } from "./Context/ReviewContext";



function App() {

  return (
    <>
      <Header text="Review Application" />
      <Router>
        <ReviewContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
            <Route path="/allreviews" element={<AllReviews />} />
          </Routes>
        </ReviewContextProvider>
      </Router>

    </>
  )
}

export default App