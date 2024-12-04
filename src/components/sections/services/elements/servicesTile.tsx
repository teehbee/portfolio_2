interface servicesTileInterface {
  servicesIcon: string;
  servicesTitle: string;
}

const ServicesTile: React.FC<servicesTileInterface> = ({ servicesIcon, servicesTitle }) => {
  return (
    <div className="text-center d-flex justify-content-center justify-content-lg-start">
      <div className="services-tile d-flex flex-column align-items-center justify-content-center">
        <img className="services-icon" src={servicesIcon} aria-label="service icon" />
        <p className="mb-0 dark-gray-font fs-0-75rem-to-1-25rem">{servicesTitle}</p>
      </div>
    </div>
  );
};

export default ServicesTile;
