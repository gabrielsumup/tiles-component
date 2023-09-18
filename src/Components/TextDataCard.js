export default function TextDataCard({
  headline = "Headline",
  description = "description lorem ipsum dolor",
  additionalContent
}) {
  return (
    <div className="textData">
      <p className="textDataHeadline">{headline}</p>
      <p className="textDataBody">{description}</p>
      <div>{additionalContent}</div>
    </div>
  );
}
