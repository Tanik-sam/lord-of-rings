import React, { useState } from 'react';
import { ICharacter, ICharterForm, ICharacterNew } from '../../interfaces';
import Cards from '../../components/cards';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function FormAddCard() {
  const { register, handleSubmit, reset, formState } = useForm<ICharterForm>({ mode: 'onChange' });
  const errors = formState.errors;
  const [position, setPosition] = useState(0);
  const [cards, setCards] = useState<ICharacter[]>([]);
  const { isDirty, isValid } = formState;
  const onSubmit: SubmitHandler<ICharterForm> = (data) => {
    const pos = position + 1;
    setPosition(pos);
    const newCard: ICharacterNew = {
      position: pos,
      birth: data.birth || '',
      death: data.death || '',
      gender: data.gender || '',
      hair: data.hair || '',
      height: data.height || '',
      name: data.name || '',
      race: data.race || '',
      realm: data.realm || '',
      spouse: data.spouse || '',
      wikiUrl: data.wikiUrl || '',
      _id: String(pos),
      image: URL.createObjectURL(data.file[0]),
    };
    const newCardArr = [...cards];
    newCardArr.push(newCard);
    setCards(newCardArr);
  };

  const cardsArr = cards.map((card) => (
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
      image={card.image}
    />
  ));
  return (
    <div className="form form-add">
      <form className="form-add__table" onSubmit={handleSubmit(onSubmit)}>
        <p className="form-add__name">Creating of card</p>
        <label className="form-add__text">
          Name:
          <input
            aria-label="name"
            className="textbox"
            type="text"
            {...register('name', { required: true, pattern: /^[а-яё]{3,50}|[a-z]{3,50}$/iu })}
          />
          {errors?.name?.type === 'required' && (
            <span className="incorrect">This field is required</span>
          )}
          {errors?.name?.type === 'pattern' && (
            <span className="incorrect">
              This name must be from 3 to 50 of alphabetical characters only!
            </span>
          )}
        </label>
        <label className="form-add__text">
          birth:
          <input className="textbox" type="text" {...register('birth', { required: true })} />
          {errors.birth && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Death:
          <input className="textbox" type="text" {...register('death', { required: true })} />
          {errors.death && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Gender:
          <select className="textbox" {...register('gender')}>
            <option className="form-add__text">Female</option>
            <option className="form-add__text">Male</option>
            <option className="form-add__text">Unknown</option>
          </select>
          {errors.gender && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Race:
          <select className="textbox" {...register('race')}>
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
          {errors.race && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Hair:
          <input className="textbox" type="text" {...register('hair', { required: true })} />
          {errors.hair && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Height:
          <input className="textbox" type="text" {...register('height', { required: true })} />
          {errors.height && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Realm:
          <input className="textbox" type="text" {...register('realm', { required: true })} />
          {errors.realm && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          Spouse:
          <input className="textbox" type="text" {...register('spouse', { required: true })} />
          {errors.spouse && <span className="incorrect">This field is required</span>}
        </label>
        <label className="form-add__text">
          WikiUrl:
          <input
            aria-label="wikiUrl"
            className="textbox"
            type="text"
            {...register('wikiUrl', { pattern: /^https?:\/\/\S+$/i })}
          />
          {errors?.wikiUrl?.type === 'required' && (
            <span className="incorrect">This field is required</span>
          )}
          {errors?.wikiUrl?.type === 'pattern' && (
            <span className="incorrect">WikiUrl must contain &quot;https://...!&quot;</span>
          )}
        </label>
        <label className="form-add__text">
          Select file:
          <input className="textbox" {...register('file')} type="file" />
          {errors.file && <span className="incorrect">{errors.file.message}</span>}
        </label>
        <div className="about__buttons">
          <button
            type="submit"
            aria-label="submit"
            className="button button_colored"
            disabled={!isDirty || !isValid}
          >
            Add Card
          </button>
          <button className="button button_white" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
      <section className="cards">
        <div className="wrapper cards_wrapper">
          <div className="layout-2-column cards-wrapper">{cardsArr}</div>
        </div>
      </section>
    </div>
  );
}
