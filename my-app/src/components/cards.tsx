import React from 'react';
import { ICharacter } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CardAsModal from './cardAsModal';

class Cards extends React.Component<ICharacter, { modal: boolean }> {
  constructor(props: ICharacter) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = { modal: false };
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modal: true });
  }
  closeModal() {
    this.setState({ modal: false });
  }
  render() {
    // const img = '../../assets/images/ring.jpg'
    const modal = (
      <CardAsModal
        key={this.props._id}
        birth={this.props.birth}
        death={this.props.death}
        gender={this.props.gender}
        hair={this.props.hair}
        height={this.props.height}
        name={this.props.name}
        race={this.props.race}
        realm={this.props.realm}
        spouse={this.props.spouse}
        wikiUrl={this.props.wikiUrl}
        _id={this.props._id}
        cbCloseModal={this.closeModal}
      />
    );
    return (
      <article className="block-shadowed card">
        <p className="card__name">{this.props.name}</p>
        <div>{this.state.modal ? modal : ''}</div>
        <div className="card__content">
          <div className="card__img"></div>
          <div>
            <p className="card__text">
              <span className="card__text_bold">Birth: </span>
              {this.props.birth}
            </p>
            <p className="card__text">
              <span className="card__text_bold">Death: </span>
              {this.props.death}
            </p>
            <p className="card__text">
              <span className="card__text_bold">wikiUrl: </span>
              <a href={this.props.wikiUrl}>{this.props.wikiUrl}</a>
            </p>
            <p className="card__text">
              <span className="card__text_bold">Race: </span>
              {this.props.race}
            </p>
          </div>
        </div>
        <div className="card__add-info">
          <div>
            <p className="title_yellow card__add-info_title">Gender</p>
            <p className="card__add-info_i">{this.props.gender || 'Unknown'}</p>
          </div>
          <div>
            <p className="title_yellow card__add-info_title">Spouse</p>
            <p className="card__add-info_i">{this.props.spouse || 'None'}</p>
          </div>
        </div>
        <div className="card__buttons">
          <button className="button button_white" onClick={this.openModal}>
            Read More
          </button>
          <div className="button button_colored">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: 'red', marginRight: '10px', fontSize: '30px' }}
            />
            ...
          </div>
        </div>
      </article>
    );
  }
}
export default Cards;
