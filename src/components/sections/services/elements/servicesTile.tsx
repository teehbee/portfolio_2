interface servicesTileInterface {
  servicesIcon: string;
  servicesTitle: string;
}

const ServicesTile: React.FC<servicesTileInterface> = ({ servicesIcon, servicesTitle }) => {
  return (
    <div className="services-tile d-flex flex-column align-items-center justify-content-center">
      <img className="services-icon" src={servicesIcon} aria-label="service icon" />
      <p className="mb-0 dark-gray-font fs-0-75rem-to-1-25rem fw-medium">{servicesTitle}</p>
    </div>
  );
};

export default ServicesTile;
