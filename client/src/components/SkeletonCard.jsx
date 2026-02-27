function SkeletonCard() {
  return (
    <div className="movie-card" style={{ cursor: 'default' }}>
      <div className="skeleton skeleton-img" />
      <div className="movie-card-body">
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text-short" />
      </div>
    </div>
  );
}

export default SkeletonCard;
