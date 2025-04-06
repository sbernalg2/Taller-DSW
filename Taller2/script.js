import { series } from './data.js';

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

        row.addEventListener('click', () => {
          const cardContainer = document.getElementById("serie-card-container");
          cardContainer.innerHTML = `
            <div class="card shadow">
              <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
              <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <p><a href="${serie.link}" target="_blank">${serie.link}</a><p>
              </div>
            </div>
          `;
        });        

        seriesTable.appendChild(row);
    });
});