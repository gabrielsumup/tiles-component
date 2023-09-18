export default function Button({
  href = "https://google.com",
  style,
  label = "default"
}) {
  return (
    <a href={href} className="button">
      {label}
    </a>
  );
}
