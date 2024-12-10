import { ProjectTile } from "./elements";
import { communityScienceMuseumImg, rainyDaysImg, visitValdresImg, hikeBuddyImg, auctionHouseImg, onlineStoreImg, holidazeImg } from "../../../assets/screenshots";

function ProjectsSection() {
  const holidazeDescription = "Venue booking site and final exam. Built with React, TypeScript and Bootstrap. Users may book, post and administer venues.";

  const stuffDescription = "Frameworks task built with React where users may add products to shopping cart, search individual products and checkout cart.";

  const auctionHouseDescription = "Auction site where users may post items and bid on other items. Built with Vanilla JS and Bootstrap";

  const hikeBuddyDescription = "Styling frameworks task built with Vanilla JS BootStrap. Users may post social media posts visible to other registered users.";

  const visitValdresDescription = "First project exam. Blog site built with Vanilla JS and Wordpress for creating blog posts.";

  const communityScienceMuseumDescription = "First semester project. Static website for a technical museum. Built with HTML and CSS.";

  const rainyDaysDescription = "First task during my studies. Static online store expanded into fetching products from an API and displaying. Built with HTML, CSS and Vanilla JS.";

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
