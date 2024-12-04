// Project section

// Future Interface for project tile

export interface projectTileInterface {}

// Services section

// Interface for tiles displaying services offered

export interface servicesTileInterface {
  servicesIcon: string;
  servicesTitle: string;
}

// Resume section

// Interface for resume tile

export interface resumeTileInterface {
  resumeIcon: string;
  fromYear: string;
  toYear: string;
  nameOfStudyorPosition: string;
  nameOfSchoolOrEmployer: string;
}

// Contact section

// Interface for link bubbles

export interface contactBubbleInterface {
  icon: string;
  description: string;
  href: string;
  linkText: string;
}

// Interface for contact form

export interface contactDataInterface {
  name: string;
  email: string;
  message: string;
}

// Interface for skill tile

export interface skillTileInterface {
  skillIcon: string;
  skillTitle: string;
}
