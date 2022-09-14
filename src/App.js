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

function App() {
  return (
    <div className="App">
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
      />
  */}

      <ClassTypeTest />
    </div>
  );
}

export default App;
