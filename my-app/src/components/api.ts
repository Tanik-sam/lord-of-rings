const baseurl = 'https://the-one-api.dev/v2/';

const headers = {
  Accept: 'application/json',
  Authorization: 'Bearer yLi1w8ZSQAGZLdOwXdgE',
};

export async function apiSearch() {
  try {
    const getBooks = await fetch(`${baseurl}book`, {
      headers: headers,
    });
    const books = await getBooks.json();
    console.log(books);
    return books;
  } catch (e) {
    console.log('error', e);
  }
}

export async function apiBook() {
  try {
    const book = await apiSearch();
    const getChapter = await fetch(`${baseurl}book/${book.docs[0]._id}/chapter`, {
      headers: headers,
    });
    const chapter = await getChapter.json();
    console.log(chapter, book);
  } catch (e) {
    console.log('error', e);
  }
}

export async function apiCharacters(p: number) {
  const page = p;
  try {
    const getCharacters = await fetch(`${baseurl}character?limit=10?page=${page}`, {
      headers: headers,
    });
    const characters = await getCharacters.json();
    console.log(characters);
    return characters.docs;
  } catch (e) {
    console.log('error', e);
  }
}

export async function apiCharacter(search: string) {
  const req = `character?name=${search}`;
  try {
    const getCharacter = await fetch(`${baseurl}${req}`, {
      headers: headers,
    });
    const character = await getCharacter.json();
    console.log(character);
    return character.docs;
  } catch (e) {
    console.log('error', e);
  }
}
