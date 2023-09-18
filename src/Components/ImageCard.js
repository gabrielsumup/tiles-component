export default function ImageCard(
  { width = "double", height = "medium", alt = "default" },
  imageSource = "https://i.imgur.com/t0nEKMj_d.webp?maxwidth=520&shape=thumb&fidelity=high"
) {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource})` }}
      className={`container ${width} ${height}`}
    ></div>
  );
}
