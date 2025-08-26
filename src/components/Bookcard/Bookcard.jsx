export default function BookCard({ book, onClick }) {
  return (
    <div className="cardBook">
      <button type="button" className="modalBtn" onClick={onClick}>
        <img src={book.image_url} alt={book.title} />
      </button>
    </div>
  );
}
