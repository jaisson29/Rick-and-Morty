import React from 'react'

const Paginator = () => {
  <div>

  </div>
}


// import React, { useState, useEffect } from 'react';

// const Paginator = () => {
//   const [characters, setCharacters] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
//       const data = await response.json();
//       setCharacters(data.results);
//       setTotalPages(data.info.pages);
//     };
//     fetchData();
//   }, [currentPage]);

//   const handleNextPage = () => {
//     if (currentPage >= totalPages) {
//       return;
//     }
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage <= 0) {
//       return;
//     }
//     setCurrentPage(currentPage -1);
//   }

//   return (
//     <div>
//       <button onClick={handlePrevPage}>Previous Page</button>
//       <button onClick={handleNextPage}>Next Page</button>
//       {characters.map((character) => (
//         <div key={character.id}>
//           <h2>{character.name}</h2>
//           <p>{character.species}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Paginator;