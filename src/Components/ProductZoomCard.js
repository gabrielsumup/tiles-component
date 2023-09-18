import Button from "./Button";

export default function ProductZoom({
  imagesource,
  URL = "https://sumup.co.uk",
  buttonLabel = "Discover XXX",
  width = "triple",
  height = "tall"
}) {
  /* FUNCTIONS*/

  const hoverZoom = function () {
    const productZoomBack = document.querySelector(".productZoomBack");
    const productZoomFore = document.querySelector(".productZoomFore");
    const productButton = document.querySelector(".productZoom .button");
    console.log("hovered");
    productZoomBack.style.transform = "scale(0.90)";
    productZoomFore.style.transform = "scale(1)";
    productButton.classList.add("visible");
  };
  const hoverDezoom = function () {
    const productZoomBack = document.querySelector(".productZoomBack");
    const productZoomFore = document.querySelector(".productZoomFore");
    const productButton = document.querySelector(".productZoom .button");
    console.log("exit");
    productZoomBack.style.transform = "scale(1)";
    productZoomFore.style.transform = "scale(0.90)";
    productButton.classList.remove("visible");
  };

  /* COMPONENT */
  return (
    <div
      style={{ backgroundColor: "white" }}
      className={`container ${height} ${width} productZoom`}
      onMouseEnter={hoverZoom}
      onMouseLeave={hoverDezoom}
    >
      <a href={URL}>
        <img
          className="productZoomFore"
          alt="the SumUp POS Lite"
          src={imagesource}
        ></img>
      </a>
      <div className="productZoomBack"></div>
      <Button label={buttonLabel} />
    </div>
  );
}
