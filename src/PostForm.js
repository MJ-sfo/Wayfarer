import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      date: '',
      showModal: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.name} said "${this.state.text}"`)
    let name = this.state.name.trim();
    let text = this.state.text.trim();
    let date = Date.now();
    if (! text || ! name) {
      return;
    }
    this.props.onPostSubmit({name: name, text: text, date:date})
    this.setState({name: '', text: ''})
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onClose(){
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className="post-form">
        <a onClick={() => this.setState({ showModal: !this.state.showModal})}> Add New Post </a>
        { (this.state.showModal)
          ? (<form className="form" onSubmit={ this.handleSubmit }>
              <input
                type='text'
                placeholder='Update name...'
                value={ this.state.name }
                onChange={ this.handleNameChange } />
              <input
                type='text'
                placeholder='Update your comment...'
                value={ this.state.text }
                onChange={ this.handleTextChange } />
              <input
                type='submit'
                value='Update' />
              <a onClick={()=> this.onClose}> Cancel </a>
            </form>)
          : null}
      </div>
    )
  }
}

export default PostForm;
