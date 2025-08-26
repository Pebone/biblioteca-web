export default function Pagination({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) {
  return (
    <div className="pagination" id="paginationControls">
      <button id="prevPage" onClick={onPrev} disabled={currentPage === 1}>
        Anterior
      </button>
      <span id="pageInfo">
        {currentPage} de {totalPages}
      </span>
      <button id="nextPage" onClick={onNext} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  );
}
