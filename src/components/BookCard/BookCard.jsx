export default function BookCard({ book, onClick }) {
  return (
    <div className="cardBook">
      <button className="modalBtn" onClick={onClick}>
        <img src={book.img} alt={book.nome} />
      </button>
    </div>
  );
}