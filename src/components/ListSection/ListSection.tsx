import "./ListSection.scss";

type ListSectionProps = {
  items: string[];
};

export default function ListSection({ items }: Readonly<ListSectionProps>) {
  return (
    <div className="ListSection">
      <h2>List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
