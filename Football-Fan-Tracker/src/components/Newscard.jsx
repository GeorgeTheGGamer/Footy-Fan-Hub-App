const Newscard = ({article}) => {
  // Format the published date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Handle missing image
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-103 transition-shadow duration-300 mb-4 overflow-hidden m-8">
      {/* Image */}
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title}
          onError={handleImageError}
          className="w-full h-48 object-cover object-top"
        />
      )}
      
      {/* Content */}
      <div className="p-6"> 
        {/* Source and Date */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-blue-600">
            {article.source.name}
          </span>
          <span className="text-sm text-gray-500">
            {formatDate(article.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Author */}
        {article.author && (
          <p className="text-sm text-gray-500 mb-4">
            By {article.author}
          </p>
        )}

        {/* Read More Button */}
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="button-style"
        >
          Read Full Article
        </a>
      </div>
    </div>
  )
}

export default Newscard