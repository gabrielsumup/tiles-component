export default function rotatingCard({
  width = "double",
  height = "medium",
  backContent,
  frontContent
}) {
  return (
    <div className={`rotates container ${height} ${width}`}>
      <div className="front">{frontContent}</div>
      <div className="back">{backContent}</div>
    </div>
  );
}
