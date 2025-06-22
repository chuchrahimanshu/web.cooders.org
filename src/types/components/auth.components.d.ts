interface TextLabelInputPropsInterface {
  width?: string;
  title: string;
  required?: boolean;
  type?: string;
  placeholder: string;
  id: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AuthContainerPropsInterface {
  children: ReactNode;
  heading: string;
}

interface NavigationLabelPropsInterface {
  labelText: string;
  linkText: string;
  handleNavigation: () => void;
}

interface DividerWithTextPropsInterface {
  label?: string;
}

interface AuthFormButtonPropsInterface {
  title: string;
  buttonClickHandler?: () => void;
}
