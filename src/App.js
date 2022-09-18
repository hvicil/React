import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/01-hello-world";
import JsxPractice from "./components/03-jsx/jsx-practice";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Clock1 from "./components/05-clock-1/clock1";
import Greetings from "./components/06-props/greetings";
import Clock2 from "./components/07-clock-2/clock2";
import ImageGallery from "./components/08-images/image-gallery";
import ProfileCard from "./components/09-profile-card/profile-card";
import ReactIcons from "./components/11-icons/react-icons";
import Shop from "./components/12-shop/shop";
import State from "./components/13-state/state";
import Stateless from "./components/13-state/stateless";
import Counter from "./components/14-counter/counter";
import Birthday from "./components/15-birthday/birthday";
import UseEffect from "./components/16-useeffect/use-effect";
import Clock3 from "./components/17-clock-3/clock3";
import Useeffect2 from "./components/18-useeffect/useeffect";
import RandomImages from "./components/19-random-images/random-images";
import Useref from "./components/20-useref/useref";
import ClassTypeTest from "./components/21-class-type/class-type";
import UserCards from "./components/22-user-cards/usercards";
import Countries from "./components/23-countries/countries";
import AxiosCrud from "./components/24-axios-crud/axios-crud";
import Form1 from "./components/25-forms/form1";
import Form2 from "./components/25-forms/form2";
import Form3 from "./components/25-forms/form3";
import Form4 from "./components/25-forms/form4";
import Form5 from "./components/25-forms/form5";
import Form6 from "./components/25-forms/form6";
import Exchange from "./components/26-exchange/exchange";
import StoreContext from "./store";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [color, setColor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const loadData = async () => {
    try {
      const resp = await axios.get(
        "https://api.frankfurter.app/latest?from=TRY"
      );
      console.log(resp.data);
      setCurrencies(resp.data.rates);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={{ currencies, color, darkMode, setDarkMode }}>
      <div className={`app ${darkMode && "dark-mode"}`}>
        <BrowserRouter>
          <Header />
          <Container fluid>
            <Row>
              <Col sm={2}>
                <Menu />
              </Col>
              <Col sm={10} className="p-5">
                <Routes>
                  <Route path="/hello-world" element={<HelloWorld />} />

                  <Route path="/jsx2" element={<Jsx2 />} />
                  <Route path="/jsx3" element={<Jsx3 />} />
                  <Route path="/jsx4" element={<Jsx4 />} />
                  <Route path="/jsx5" element={<Jsx5 />} />
                  <Route path="/jsx-practise" element={<JsxPractice />} />
                  <Route path="/style1" element={<Style1 />} />
                  <Route path="/style2" element={<Style2 />} />
                  <Route path="/style3" element={<Style3 />} />
                  <Route path="exchange" element={<Exchange />} />
                </Routes>
              </Col>
            </Row>
          </Container>

          {/*
       <HelloWorld />
      <Jsx2 />
      <Jsx3 />
      <Jsx4 />
      <Jsx5 />
      <JsxPractice />
      <Style1 />
      <Style2 />
      <Style3 />

      <ImageGallery />
       <ProfileCard
        name="Ece Metin"
        location="Istanbul, Turkey"
        shot="91"
        followers="12"
        following="15"
        avatar="profile.jpg"
        <ReactIcons />
        <Shop />
        <Stateless />
        <State />
        <Counter />
        <Birthday />
        <UseEffect />
        <Clock3 />
        <Clock1 />
        <Greetings />
        <Clock2 />
        <Useeffect2/>
        <RandomImages />
         <ClassTypeTest />
         <UserCards />
         <Countries />
         <AxiosCrud />
          <Form1 />
          <Form2 />
          <Form3 />
          <Form4 />
          <Form5 />
           <Form6 />
      />
  */}
        </BrowserRouter>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
