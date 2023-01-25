import React from 'react';
let currentPage = 1;
let totalPages = null;

async function getPage(page) {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  totalPages = data.info.pages;
  return data.results;
}

async function nextPage() {
  if (currentPage >= totalPages) {
    return;
  }
  currentPage += 1;
  const characters = await getPage(currentPage);
  console.log(characters);
}
const CharacterCard = () => (
  <div className="characterContainer">
    

  </div>
)

export default CharacterCard