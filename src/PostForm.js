import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      date: '',
      showModal: false,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`new post title: ${this.state.title} and text: ${this.state.text}`)
    let title = this.state.title.trim();
    let text = this.state.text.trim();
    let date = Date.now();
    if (!text || !title) {
      return;
    }
    this.props.onPostSubmit({title: title, text: text, date:date, city: this.props.cityName})
    this.setState({title: '', text: ''})
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onClose(){
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className="post-form">
        <button type="button" className="btn btn-outline-success" onClick={() => this.setState({ showModal: !this.state.showModal})}> Add New Post </button>
        { (this.state.showModal)
          ? (<form className="form" onSubmit={ this.handleSubmit }>
              <input
                type='text'
                placeholder='Title'
                value={ this.state.name }
                onChange={ this.handleTitleChange } />
              <input
                type='text'
                placeholder='Text'
                value={ this.state.text }
                onChange={ this.handleTextChange } />
              <input
                className="myButton"
                type='submit'
                value='Update' />
              <span> </span>
              <a className="myButtonCancel" onClick={()=> this.onClose}> Cancel </a>
            </form>)
          : null}
      </div>
    )
  }
}

export default PostForm;
