// Au lieu de "const { ipcRenderer } = require('electron');"
// Utilisez ce qui suit :
const electron2 = window.electron;


electron2.on('clipboard-data', (clipboardData) => {
    const tableBody = document.getElementById('clipboard-items');
    
    // Renverser le tableau pour afficher les éléments les plus récents en premier
    const reversedData = [...clipboardData].reverse();

    reversedData.forEach(item => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = item;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
});
electron2.on('clear-clipboard-history', () => {
    const tableBody = document.getElementById('clipboard-items');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
});
