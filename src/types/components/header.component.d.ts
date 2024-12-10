interface HeaderProps {
  handleSidebarToggle: () => void;
  sidebarToggle: boolean;
}

interface HeaderIconProps {
  Icon: IconType;
  size: string;
  handleIconClick?: () => void;
}
