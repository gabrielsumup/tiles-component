export default function ({ width = "double", height = "medium", content }) {
  return <div className={`container ${width} ${height}`}>{content}</div>;
}
