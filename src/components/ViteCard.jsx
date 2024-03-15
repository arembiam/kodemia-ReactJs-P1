export default function ViteCard(props) {
  return (
    <div className="vite-card">
      <div className="vite-card-emoji">{props.emoji}</div>
      <p className="vite-card-title">{props.title}</p>
      <p className="vite-card-txt">{props.txt}</p>
    </div>
  );
}
