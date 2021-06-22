import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  feedbackData = this.props

  onclickFeedback = () => {
    this.setState({isEmojiClicked: true})
  }

  renderEmojis = emoji => (
    <li className="emoji" key={emoji.id} onClick={this.onclickFeedback}>
      <img src={emoji.imageUrl} alt={emoji.name} />
      <p className="emoji-name">{emoji.name}</p>
    </li>
  )

  getEmojiList = () => {
    const {feedbackData} = this.feedbackData
    const {emojis} = feedbackData

    return (
      <div className="content-div">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-div">
          {emojis.map(eachEmoji => this.renderEmojis(eachEmoji))}
        </ul>
      </div>
    )
  }

  renderFeedback = () => {
    const {feedbackData} = this.feedbackData
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="content-div">
        <img src={loveEmojiUrl} alt="loveEmoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="feedback-text">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="bg-div">
        {isEmojiClicked ? this.renderFeedback() : this.getEmojiList()}
      </div>
    )
  }
}

export default Feedback
