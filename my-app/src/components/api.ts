const baseurl = 'https://the-one-api.dev/v2/';

const headers = {
  Accept: 'application/json',
  Authorization: 'Bearer yLi1w8ZSQAGZLdOwXdgE',
};

export async function apiSearch() {
  const getBooks = await fetch(`${baseurl}book`, {
    headers: headers,
  });
  const books = await getBooks.json();
  console.log(books);
  return books;
}

export async function apiBook() {
  const book = await apiSearch();
  const getChapter = await fetch(`${baseurl}book/${book.docs[0]._id}/chapter`, {
    headers: headers,
  });
  const chapter = await getChapter.json();
  console.log(chapter, book);
}

export async function apiCharacters(p: number) {
  const page = p;
  const getCharacters = await fetch(`${baseurl}character?limit=10?page=${page}`, {
    headers: headers,
  });
  const characters = await getCharacters.json();
  console.log(characters);
  return characters.docs;
}

export async function apiCharacter(search: string) {
  const req = `character?name=${search}`;
  const getCharacter = await fetch(`${baseurl}${req}`, {
    headers: headers,
  });
  const character = await getCharacter.json();
  console.log(character);
  return character.docs;
}
