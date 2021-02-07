import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';
export default class SearchBar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {
    imageName: '',
    }

 handleNameChange = (event) => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase()});
  };
  handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.imageName.trim() === '') {
          toast.info('Введите что-нибудь в строку поиска');
          return;
      }
      this.props.onSubmit(this.state.imageName);
      this.setState({ imageName: '' });
    };
 render() {
    return (
        <header className={s.Searchbar}>
            <form onSubmit={this.handleSubmit}
                className={s.SearchForm}
            >
                <button type="submit" className={s.SearchForm_button}>
                    <span className={s.SearchForm_button_label}>Search</span>
                </button>

                <input
                    className={s.SearchForm_input}
                    type="text"
                    value={this.state.imageName}
                    onChange={this.handleNameChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header >
    );
 }
}