import Card from './shared/Card'

function FeedbackForm() {
  return (
    <Card>
      <form>
        <h2>How would you rate out service with us?</h2>
        {/* @todo - rating select compo */}
        <div className="input-group">
          <input type="text" placeholder='Write a review'/>
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
