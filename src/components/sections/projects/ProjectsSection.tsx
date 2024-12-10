import { ProjectTile } from "./elements";
// import project images from assets
import { communityScienceMuseumImg, rainyDaysImg, visitValdresImg, hikeBuddyImg, auctionHouseImg, onlineStoreImg, holidazeImg } from "../../../assets/screenshots";
// import project descriptions
import { holidazeDescription, stuffDescription, auctionHouseDescription, hikeBuddyDescription, visitValdresDescription, communityScienceMuseumDescription, rainyDaysDescription } from "./content";

function ProjectsSection() {
  return (
    <section id="#projects-section" className="container text-center section-border">
      <div className="text-start">
        <h3 className="my-5 fs-2rem-to-3rem">Projects</h3>
      </div>
      <div className="row d-flex justify-content-between gap-3 px-3 px-md-0">
        <ProjectTile projectTitle="Holidaze" projectImg={holidazeImg} projectDescription={holidazeDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
        <ProjectTile projectTitle="Støff" projectImg={onlineStoreImg} projectDescription={stuffDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
        <ProjectTile projectTitle="Get rid of it" projectImg={auctionHouseImg} projectDescription={auctionHouseDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
        <ProjectTile projectTitle="HikeBuddy" projectImg={hikeBuddyImg} projectDescription={hikeBuddyDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
        <ProjectTile projectTitle="VisitValdres" projectImg={visitValdresImg} projectDescription={visitValdresDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
        <ProjectTile projectTitle="Community Science Museum" projectImg={communityScienceMuseumImg} projectDescription={communityScienceMuseumDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
        <ProjectTile projectTitle="RainyDays" projectImg={rainyDaysImg} projectDescription={rainyDaysDescription} liveSiteLink={"https://www.google.com"} repositoryLink={"https://www.google.com"} />
      </div>
    </section>
  );
}

export default ProjectsSection;
