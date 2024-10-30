import React from 'react'

const projectElement = () => {
  const { title, description, imgUrl, gitHubUrl, deployedUrl } = props;
  return (
    <div class="card">
      <img src={imgUrl} class="card-img-top" alt={`${title} - Project Image`} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={gitHubUrl} className="btn btn-primary">Check the Code!</a>
        {deployedUrl && (
          <a href={deployedUrl} className="btn btn-primary">View the site!</a>
        )}
      </div>
    </div>
  )
}

export default projectElement