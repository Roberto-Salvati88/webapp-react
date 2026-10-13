function ReviewCard({ review }) {
  const { name, vote, text } = review;

  return (
    <div className="card mb-2">
      <div className="card-body">
        <p className="mb-1">{text}</p>
        <small className="text-muted">{name} · voto {vote}/5</small>
      </div>
    </div>
  );
}

export default ReviewCard;
