import React from "react";
import Navbar from "../Home/Page/Navbar/Navbar";
import SearchBar from "../Home/Page/SearchBar/SearchBar";
import Main from "./Page/Section/Blog/Main";
import Middle from "./Page/Section/Blog/Middle";
import Last from "./Page/Section/Blog/Last";
import SignUp from "./Page/Contact/SignUp";
import Contact from "./Page/Contact/Contact";
import Footer from "../Home/Page/Footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Main />
      <Middle />
      <Last />
      <Contact />
      <SignUp />
      <Footer />
    </div>
  );
}

export default Home;
