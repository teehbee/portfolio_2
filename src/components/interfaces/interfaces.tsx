// Services section

// Interface for tiles displaying services offered

export interface servicesTileInterface {
  servicesIcon: string;
  servicesTitle: string;
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
