interface AnimatedButtonPropsInterface {
  content: string;
  classNames?: string;
  handleButtonClick?: () => void;
}

interface SidebarItemPropsInterface {
  icon: React.ReactNode;
  label: string;
  path: string;
}
