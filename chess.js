const squares = document.querySelectorAll('.chessboard div');
let draggedPiece = null;
let sourceSquare = null;

squares.forEach(square => {
    square.addEventListener('dragstart', handleDragStart);
    square.addEventListener('dragover', handleDragOver);
    square.addEventListener('drop', handleDrop);
});

function handleDragStart(event) {
    draggedPiece = event.target.innerHTML;
    sourceSquare = event.target;
    event.dataTransfer.setData('text/html', draggedPiece);
    event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
    event.preventDefault();
    const targetSquare = event.target;

    // Ensure the piece is not dropped on itself
    if (sourceSquare !== targetSquare) {
        sourceSquare.innerHTML = '';
        targetSquare.innerHTML = draggedPiece;
    }
}