export default function SubGrid(
  { width = "double", height = "triple" },
  content
) {
  return <div className={`subgrid ${width} ${height}`}>{content}</div>;
}
