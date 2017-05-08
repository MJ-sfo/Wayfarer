import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit was clicked!')
    // let name = this.state.name.trim();
    // let text = this.state.text.trim();
    // if (! text || ! name) {
      // return;
    // }
    // this.props.onPostSubmit({name: name, text: text})
    // this.setState({name: '', text: ''})
  }


  handleTextChange(e) {
    this.setState({ text: e.target.value });
    console.log('text is changing');
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
    console.log('name is changing');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Your name...'
          value={ this.state.name }
          onChange={ this.handleNameChange } />
        <input
          type='text'
          placeholder='Enter your travel summary'
          value={ this.state.text }
          onChange={ this.handleTextChange } />
        <input
          type='submit'
          value='Post' />
      </form>
    )
  }
}

export default PostForm;