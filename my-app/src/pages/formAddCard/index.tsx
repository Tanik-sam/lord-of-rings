import React, { FormEvent } from 'react';
import { ICharacter, ICharacterNew } from '../../interfaces';
import Cards from '../../components/cards';

class FormAddCard extends React.Component<
  Record<string, unknown>,
  {
    position: number;
    birth: string;
    death: string;
    gender: string;
    hair: string;
    height: string;
    name: string;
    race: string;
    realm: string;
    spouse: string;
    wikiUrl: string;
    _id: string;
    nameError: string;
    _idError: string;
    birthError: string;
    realmError: string;
    genderError: string;
    raceError: string;
    wikiUrlError: string;
    cards: ICharacter[];
    submitButton: boolean;
  }
> {
  private form: React.RefObject<HTMLInputElement>;
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      position: 0,
      birth: '',
      death: '',
      gender: 'Choose the gender',
      hair: '',
      height: '',
      name: '',
      race: 'Choose the race',
      realm: '',
      spouse: '',
      wikiUrl: '',
      _id: '',
      nameError: '',
      _idError: '',
      birthError: '',
      realmError: '',
      genderError: '',
      raceError: '',
      wikiUrlError: '',
      cards: [],
      submitButton: true,
    };
    this.form = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
    this.checkValues = this.checkValues.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.birthChange = this.birthChange.bind(this);
    this.deathChange = this.deathChange.bind(this);
    this.genderChange = this.genderChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
    this.hairChange = this.hairChange.bind(this);
    this.raceChange = this.raceChange.bind(this);
    this.realmChange = this.realmChange.bind(this);
    this.spouseChange = this.spouseChange.bind(this);
    this.wikiUrlChange = this.wikiUrlChange.bind(this);
    this.idChange = this.idChange.bind(this);
  }
  nameRef = React.createRef<HTMLInputElement>();
  birthRef = React.createRef<HTMLInputElement>();
  deathRef = React.createRef<HTMLInputElement>();
  genderRef = React.createRef<HTMLSelectElement>();
  hairRef = React.createRef<HTMLInputElement>();
  heightRef = React.createRef<HTMLInputElement>();
  raceRef = React.createRef<HTMLSelectElement>();
  realmRef = React.createRef<HTMLInputElement>();
  spouseRef = React.createRef<HTMLInputElement>();
  wikiUrlRef = React.createRef<HTMLInputElement>();
  idRef = React.createRef<HTMLInputElement>();

  handleChange(event: React.FormEvent<HTMLFormElement>) {
    console.log(event);
    this.setState({ submitButton: false });
  }

  handleSubmit(event: FormEvent) {
    alert('A name was submitted:');
    event.preventDefault();
  }

  checkName(val: string): void {
    if (val === '' || val === ' ' || !val.match(/^[а-яё]{3,50}|[a-z]{3,50}$/iu)) {
      this.setState({ nameError: 'Enter name (3 - 50 symbols)!', name: '' });
    } else {
      this.setState({ nameError: '' });
    }
  }

  checkGender(val: string): void {
    if (val === 'Choose gender') {
      this.setState({ genderError: 'Choose gender!', gender: '' });
    } else {
      this.setState({ genderError: '' });
    }
  }

  checkRace(val: string): void {
    if (val === 'Choose race') {
      this.setState({ raceError: 'Choose race!', race: '' });
    } else {
      this.setState({ raceError: '' });
    }
  }
  checkId(val: string): void {
    if (val === '') {
      this.setState({ _idError: 'Enter ID!', _id: '' });
    } else {
      this.setState({ _idError: '' });
    }
  }
  checkBirth(val: string): void {
    if (val === '') {
      this.setState({ birthError: 'Enter birth!', birth: '' });
    } else {
      this.setState({ birthError: '' });
    }
  }
  checkRealm(val: string): void {
    if (val === '') {
      this.setState({ realmError: 'Enter birth!', realm: '' });
    } else {
      this.setState({ realmError: '' });
    }
  }

  checkWikiUrl(val: string): void {
    if (!val.match(/^https?:\/\/\S+$/)) {
      this.setState({ wikiUrlError: 'Enter wikiUrl correctly!', wikiUrl: '' });
    } else {
      this.setState({ wikiUrlError: '' });
    }
  }

  nameChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      name: e.currentTarget.value,
    });
  }

  idChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      _id: e.currentTarget.value,
    });
  }

  birthChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      birth: e.currentTarget.value,
    });
  }

  deathChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      death: e.currentTarget.value,
    });
  }

  raceChange(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      race: e.currentTarget.value,
    });
  }

  genderChange(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      gender: e.currentTarget.value,
    });
  }

  heightChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      height: e.currentTarget.value,
    });
  }

  hairChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      hair: e.currentTarget.value,
    });
  }

  realmChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      realm: e.currentTarget.value,
    });
  }

  spouseChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      spouse: e.currentTarget.value,
    });
  }
  wikiUrlChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      wikiUrl: e.currentTarget.value,
    });
  }

  clear() {
    this.setState({
      birth: '',
      death: '',
      gender: 'Choose the gender',
      hair: '',
      height: '',
      name: '',
      race: 'Choose the race',
      realm: '',
      spouse: '',
      wikiUrl: '',
      _id: '',
    });
  }

  checkValues() {
    this.checkName(String(this.nameRef.current?.value));
    this.checkId(String(this.idRef.current?.value));
    this.checkBirth(String(this.birthRef.current?.value));
    this.checkRace(String(this.raceRef.current?.value));
    this.checkRealm(String(this.realmRef.current?.value));
    this.checkGender(String(this.genderRef.current?.value));
    this.checkWikiUrl(String(this.wikiUrlRef.current?.value));
    if (
      this.state.nameError === '' &&
      this.state._idError === '' &&
      this.state.birthError === '' &&
      this.state.raceError === '' &&
      this.state.realmError === '' &&
      this.state.genderError === '' &&
      this.state.wikiUrlError === ''
    ) {
      const pos = this.state.position + 1;
      const newCard: ICharacterNew = {
        position: pos,
        birth: this.birthRef.current?.value || '',
        death: this.deathRef.current?.value || '',
        gender: this.genderRef.current?.value || '',
        hair: this.hairRef.current?.value || '',
        height: this.heightRef.current?.value || '',
        name: this.nameRef.current?.value || '',
        race: this.raceRef.current?.value || '',
        realm: this.realmRef.current?.value || '',
        spouse: this.spouseRef.current?.value || '',
        wikiUrl: this.wikiUrlRef.current?.value || '',
        _id: this.idRef.current?.value || '',
      };
      const newCardArr = [...this.state.cards];
      newCardArr.push(newCard);
      this.setState({ cards: newCardArr });
      this.setState({ submitButton: false });
    } else {
      this.setState({
        submitButton: true,
        birth: this.birthRef.current?.value || '',
        death: this.deathRef.current?.value || '',
        gender: this.genderRef.current?.value || '',
        hair: this.hairRef.current?.value || '',
        height: this.heightRef.current?.value || '',
        name: this.nameRef.current?.value || '',
        race: this.raceRef.current?.value || '',
        realm: this.realmRef.current?.value || '',
        spouse: this.spouseRef.current?.value || '',
        wikiUrl: this.wikiUrlRef.current?.value || '',
        _id: this.idRef.current?.value || '',
      });
    }
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Cards
        key={card._id}
        birth={card.birth}
        death={card.death}
        gender={card.gender}
        hair={card.hair}
        height={card.height}
        name={card.name}
        race={card.race}
        realm={card.realm}
        spouse={card.spouse}
        wikiUrl={card.wikiUrl}
        _id={card._id}
      />
    ));
    return (
      <div className="form form-add">
        <form className="form-add__table" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <p className="form-add__name">Creating of card</p>
          <label className="form-add__text">
            Name:
            <input
              className="textbox"
              type="text"
              ref={this.nameRef}
              value={this.state.name}
              onChange={this.nameChange}
            />
            <span className="incorrect incorrect_name">{this.state.nameError}</span>
          </label>
          <label className="form-add__text">
            Birth:
            <input
              className="textbox"
              type="text"
              ref={this.birthRef}
              value={this.state.birth}
              onChange={this.birthChange}
            />
            <span className="incorrect incorrect_birth">{this.state.birthError}</span>
          </label>
          <label className="form-add__text">
            Death:
            <input
              className="textbox"
              type="text"
              ref={this.deathRef}
              value={this.state.death}
              onChange={this.deathChange}
            />
          </label>
          <label className="form-add__text">
            Gender:
            <select
              className="textbox"
              ref={this.genderRef}
              value={this.state.gender}
              onChange={this.genderChange}
            >
              <option className="form-add__text">Female</option>
              <option className="form-add__text">Male</option>
              <option className="form-add__text">Unknown</option>
            </select>
            <span className="incorrect incorrect_gender">{this.state.genderError}</span>
          </label>
          <label className="form-add__text">
            Race:
            <select
              className="textbox"
              ref={this.raceRef}
              value={this.state.race}
              onChange={this.raceChange}
            >
              <option className="form-add__text">Elves</option>
              <option className="form-add__text">Men</option>
              <option className="form-add__text">Dwarves</option>
              <option className="form-add__text">Hobbits/Ель</option>
              <option className="form-add__text">Ents</option>
              <option className="form-add__text">Orcs</option>
              <option className="form-add__text">Trolls</option>
              <option className="form-add__text">Valar</option>
              <option className="form-add__text">Maiar</option>
              <option className="form-add__text">Other</option>
            </select>
            <span className="incorrect incorrect_race">{this.state.raceError}</span>
          </label>
          <label className="form-add__text">
            Hair:
            <input
              className="textbox"
              type="text"
              ref={this.hairRef}
              value={this.state.hair}
              onChange={this.hairChange}
            />
          </label>
          <label className="form-add__text">
            Height:
            <input
              className="textbox"
              type="text"
              ref={this.heightRef}
              value={this.state.height}
              onChange={this.heightChange}
            />
          </label>
          <label className="form-add__text">
            Realm:
            <input
              className="textbox"
              type="text"
              ref={this.realmRef}
              value={this.state.realm}
              onChange={this.realmChange}
            />
            <span className="incorrect incorrect_realm">{this.state.realmError}</span>
          </label>
          <label className="form-add__text">
            Spouse:
            <input
              className="textbox"
              type="text"
              ref={this.spouseRef}
              value={this.state.spouse}
              onChange={this.spouseChange}
            />
          </label>
          <label className="form-add__text">
            WikiUrl:
            <input
              className="textbox"
              type="text"
              ref={this.wikiUrlRef}
              value={this.state.wikiUrl}
              onChange={this.wikiUrlChange}
            />
            <span className="incorrect incorrect_wikiUrl">{this.state.wikiUrlError}</span>
          </label>
          <div className="about__buttons">
            <button
              type="submit"
              className="button button_colored"
              onClick={this.checkValues}
              disabled={this.state.submitButton}
            >
              Add Card
            </button>
            <button className="button button_white" type="submit" onClick={this.clear}>
              Reset
            </button>
          </div>
        </form>
        <section className="cards">
          <div className="wrapper cards_wrapper">
            <div className="layout-2-column cards-wrapper">{cards}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default FormAddCard;
