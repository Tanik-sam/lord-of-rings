import React from 'react';
import { apiCharacters, apiCharacter } from '../components/api';
import { ISearch } from '../interfaces';

class Search extends React.Component<ISearch, { input: string; isLoaded: boolean }> {
  constructor(props: ISearch) {
    super(props);
    this.state = { input: localStorage.value || '', isLoaded: true };
  }

  searchRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    console.log('didMount');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount()');
    localStorage.setItem('value', this.state.input);
  }
  handleSearch = () => {
    if (!this.searchRef.current?.value) {
      (async () => {
        const data = await apiCharacters(1);
        this.props.cbSearch(data);
      })();
    }
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.setState({ isLoaded: false });
      const input = String(this.searchRef.current?.value);
      this.setState({ input }, () => {
        localStorage.setItem('value', input);
      });
      (async () => {
        const data = await apiCharacter(input);
        this.props.cbSearch(data);
        this.setState({ isLoaded: true });
      })();
    }
  };
  render() {
    const value = this.state.input || '';
    const { isLoaded } = this.state;
    return (
      <div className="header__search">
        {!isLoaded ? <div className="overlay"><div className ="search__loading"><p >Loading...</p></div></div> : ''}
        <input
          id="search"
          type="text"
          name="text"
          title="Gandalf, Frodo Baggins, Glorfindel, etc."
          placeholder="Search"
          defaultValue={value}
          className="search"
          ref={this.searchRef}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default Search;
