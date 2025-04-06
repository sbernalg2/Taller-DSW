import { series } from './data.js';

console.log(series);  // Verifica que series sea un arreglo
if (Array.isArray(series)) {
  series.forEach(serie => {
    console.log(serie.name);  // Mostrar el nombre de cada serie
  });
} else {
  console.error("La variable 'series' no es un arreglo.");
}

document.addEventListener("DOMContentLoaded", function () {
    const seriesTable = document.getElementById('series');

    series.forEach(serie => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = serie.id.toString();

        const nameCell = document.createElement('td');
        nameCell.innerHTML = `<span style="color: blue;">${serie.name}</span>`;

        const channelCell = document.createElement('td');
        channelCell.textContent = serie.channel;

        const seasonsCell = document.createElement('td');
        seasonsCell.textContent = serie.seasons.toString();

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(channelCell);
        row.appendChild(seasonsCell);

        seriesTable.appendChild(row);
    });
});