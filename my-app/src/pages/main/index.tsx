import React from 'react';
import { ICharacter } from '../../interfaces';
import Cards from '../../components/cards';
import { apiCharacters } from '../../components/api';
import Search from '../../components/search';

class Main extends React.Component<
  Record<string, unknown>,
  { formAddShow: boolean; chartersState: ICharacter[] }
> {
  state = { formAddShow: false, chartersState: [] };

  componentDidMount(): void {
    (async () => {
      const data = await apiCharacters(1);
      this.setState({ chartersState: data });
    })();
  }

  search = (data: ICharacter[]) => {
    console.log('search', data);
    this.setState({ chartersState: data });
  };

  render() {
    const characters = this.state.chartersState.map((charter: ICharacter) => (
      <Cards
        key={charter._id}
        birth={charter.birth}
        death={charter.death}
        gender={charter.gender}
        hair={charter.hair}
        height={charter.height}
        name={charter.name}
        race={charter.race}
        realm={charter.realm}
        spouse={charter.spouse}
        wikiUrl={charter.wikiUrl}
        _id={charter._id}
      />
    ));
    const addCard = () => {
      this.setState({ formAddShow: true });
    };
    return (
      <div>
        <Search cbSearch={this.search} />
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <h1 className="cards__title title">
              Lord Of <span className="title_yellow"> The Rings </span>
            </h1>
            <p className="cards__text">
              All we have to decide is what to do with the time that is given to us.
            </p>
            <div className="about__buttons">
              <a className="header__link" href="/addForm">
                <div className="button" onClick={addCard}>
                  Add card
                </div>
              </a>
            </div>
            <div className="layout-2-column cards-wrapper">{characters}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
