import "./styles.css";
import image_pos from "./assets/POS_Lite.webp";
import image_soloBundle from "./assets/solo_bundle_cradle.webp";
import image_SUCard from "./assets/SU_card.png";
import merchant1 from "./assets/merchant1.png";
import merchant2 from "./assets/merchant2.png";
import merchant3 from "./assets/merchant3.png";
import merchant4 from "./assets/merchant4.png";
import merchant5 from "./assets/merchant5.png";
import merchant6 from "./assets/merchant6.png";
import ProductZoomCard from "./Components/ProductZoomCard.js";
import RotatingCard from "./Components/RotatingCard";
import TextDataCard from "./Components/TextDataCard";
import ImageCard from "./Components/ImageCard";
import GenericCard from "./Components/GenericCard";
import SubGrid from "./Components/SubGrid";

export default function App() {
  return (
    <div className="App">
      {/* <ProductZoom imagesource={image_pos} buttonLabel="Discover POS Lite" /> */}
      <ProductZoomCard
        imagesource={image_pos}
        buttonLabel="Discover POS Lite"
        width="triple"
        height="tall"
      />
      <div className="subgrid tall double">
        <GenericCard
          width="single"
          height="short"
          content={
            <img
              alt="a young bartender cleaning and inspecting glasses in a restaurant"
              src={merchant5}
            ></img>
          }
        />
        <GenericCard
          width="single"
          height="short"
          content={
            <img
              alt="close-up shot of a baker pickung up a tray of frwshly bake bread loaves"
              src={merchant6}
            ></img>
          }
        />
        <RotatingCard
          frontContent={
            <TextDataCard
              headline="4 million"
              description="businesses trust SumUp across the globe"
            />
          }
          backContent={
            <img
              alt="a woman behidn a counter serving coffee, smiling"
              src={merchant2}
            ></img>
          }
        />
      </div>
      <GenericCard
        height="tall"
        content={
          <img
            alt="a chef posing in his kitchen looking at the camera and smiling"
            src={merchant4}
          ></img>
        }
      />
      <RotatingCard
        height="tall"
        backContent={
          <TextDataCard
            headline="100%"
            description={`free prepaid debit Mastercard`}
            additionalContent={
              <img
                alt="a front view of the SumUp Business Card"
                src={image_SUCard}
              ></img>
            }
          />
        }
        frontContent={
          <img
            alt="close-up shot of a cook in a professional kitchen making a sauce in a pan"
            src={merchant3}
          ></img>
        }
      />
    </div>
  );
}
