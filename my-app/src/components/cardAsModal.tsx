import React from 'react';
import { ICharacterMod } from '../interfaces';

class CardAsModal extends React.Component<ICharacterMod> {
  constructor(props: ICharacterMod) {
    super(props);
  }

  render() {
    return (
      <div className="overlay">
        <div className="block-shadowed card-modal">
          <article className="card__info">
            <p className="card__name">{this.props.name}</p>
            <div className="card__content">
              <div className="card__img_mod"></div>
              <div>
                <p className="card__text_mod">
                  <span className="card__text_bold">Birth: </span>
                  {this.props.birth}
                </p>
                <p className="card__text_mod">
                  <span className="card__text_bold_mod">Death: </span>
                  {this.props.death}
                </p>
                <p className="card__text_mod">
                  <span className="card__text_bold_mod">Hair: </span>
                  {this.props.hair}
                </p>
                <p className="card__text_mod">
                  <span className="card__text_bold_mod">wikiUrl: </span>
                  <a href={this.props.wikiUrl}>{this.props.wikiUrl}</a>
                </p>
                <p className="card__text_mod">
                  <span className="card__text_bold_mod">Race: </span>
                  {this.props.race}
                </p>
              </div>
            </div>
            <div className="card__add-info_mod">
              <div>
                <p className="title_yellow card__add-info_title_mod">Gender</p>
                <p className="card__add-info_i_mod">{this.props.gender || 'Unknown'}</p>
              </div>
              <div>
                <p className="title_yellow card__add-info_title_mod">Realm</p>
                <p className="card__add-info_i_mod">{this.props.realm || 'Unknown'}</p>
              </div>
              <div>
                <p className="title_yellow card__add-info_title_mod">Height</p>
                <p className="card__add-info_i_mod">{this.props.height || 'Unknown'}</p>
              </div>
              <div>
                <p className="title_yellow card__add-info_title_mod">Spouse</p>
                <p className="card__add-info_i_mod">{this.props.spouse || 'None'}</p>
              </div>
            </div>
            <div className="card__buttons">
              <button className="button button_colored" onClick={this.props.cbCloseModal}>
                Less information
              </button>
            </div>
          </article>
          <div onClick={this.props.cbCloseModal} className="close-btn"></div>
        </div>
      </div>
    );
  }
}
export default CardAsModal;
