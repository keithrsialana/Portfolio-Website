import React from 'react'
import ProjectElement from '../components/projectElement'
const portfolio = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center display-2">Here are some projects I've done!</h1>
      <div class="card-group">
        <ProjectElement title="" description="" imgUrl="" gitHubUrl="" deployedUrl="" />
        <ProjectElement title="" description="" imgUrl="" gitHubUrl="" deployedUrl="" />
        <ProjectElement title="" description="" imgUrl="" gitHubUrl="" deployedUrl="" />
        <ProjectElement title="" description="" imgUrl="" gitHubUrl="" deployedUrl="" />
        <ProjectElement title="" description="" imgUrl="" gitHubUrl="" deployedUrl="" />
        <ProjectElement title="" description="" imgUrl="" gitHubUrl="" deployedUrl="" />
      </div>
    </div>
  )
}
export default portfolio