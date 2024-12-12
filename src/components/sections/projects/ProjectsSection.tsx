import { ProjectTile } from "./elements";
// import project images from assets
import { communityScienceMuseumImg, rainyDaysImg, visitValdresImg, hikeBuddyImg, auctionHouseImg, onlineStoreImg, holidazeImg } from "../../../assets/screenshots";
// import project descriptions
import { holidazeDescription, stuffDescription, auctionHouseDescription, hikeBuddyDescription, visitValdresDescription, communityScienceMuseumDescription, rainyDaysDescription } from "./content";
// import project links
import { gitHubRainyDays, netlifyRainyDays, gitHubCSM, netlifyCSM, gitHubVisitValdres, netlifyVisitValdres, netlifyHikeBuddy, gitHubHikeBuddy, gitHubGetRidOfIt, netlifyGetRidOfIt, gitHubStuff, gitHubHolidaze, netlifyStuff, netlifyHolidaze } from "./content";

function ProjectsSection() {
  return (
    <section id="#projects-section" className="container text-center section-border">
      <div className="text-start">
        <h3 className="my-5 fs-2rem-to-3rem">Projects</h3>
      </div>
      <div className="row d-flex justify-content-between gap-3 px-3 px-md-0">
        <ProjectTile projectTitle="Holidaze" projectImg={holidazeImg} projectDescription={holidazeDescription} liveSiteLink={netlifyHolidaze} repositoryLink={gitHubHolidaze} />
        <ProjectTile projectTitle="Støff" projectImg={onlineStoreImg} projectDescription={stuffDescription} liveSiteLink={netlifyStuff} repositoryLink={gitHubStuff} />
        <ProjectTile projectTitle="Get rid of it" projectImg={auctionHouseImg} projectDescription={auctionHouseDescription} liveSiteLink={netlifyGetRidOfIt} repositoryLink={gitHubGetRidOfIt} />
        <ProjectTile projectTitle="HikeBuddy" projectImg={hikeBuddyImg} projectDescription={hikeBuddyDescription} liveSiteLink={netlifyHikeBuddy} repositoryLink={gitHubHikeBuddy} />
        <ProjectTile projectTitle="VisitValdres" projectImg={visitValdresImg} projectDescription={visitValdresDescription} liveSiteLink={netlifyVisitValdres} repositoryLink={gitHubVisitValdres} />
        <ProjectTile projectTitle="Community Science Museum" projectImg={communityScienceMuseumImg} projectDescription={communityScienceMuseumDescription} liveSiteLink={netlifyCSM} repositoryLink={gitHubCSM} />
        <ProjectTile projectTitle="RainyDays" projectImg={rainyDaysImg} projectDescription={rainyDaysDescription} liveSiteLink={netlifyRainyDays} repositoryLink={gitHubRainyDays} />
      </div>
    </section>
  );
}

export default ProjectsSection;
