import { createTheme } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import CategoryIcon from "@mui/icons-material/Category";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DescriptionIcon from "@mui/icons-material/Description";
import EventIcon from "@mui/icons-material/Event";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridViewIcon from "@mui/icons-material/GridView";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ImageIcon from "@mui/icons-material/Image";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LabelIcon from "@mui/icons-material/Label";
import LayersIcon from "@mui/icons-material/Layers";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import LinkIcon from "@mui/icons-material/Link";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavigationIcon from "@mui/icons-material/Navigation";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import NotificationsIcon from "@mui/icons-material/Notifications";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import OutboxIcon from "@mui/icons-material/Outbox";
import PersonIcon from "@mui/icons-material/Person";
import PushPinIcon from "@mui/icons-material/PushPin";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SearchIcon from "@mui/icons-material/Search";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import SpeedIcon from "@mui/icons-material/Speed";
import StarRateIcon from "@mui/icons-material/StarRate";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TabIcon from "@mui/icons-material/Tab";
import TableChartIcon from "@mui/icons-material/TableChart";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import TitleIcon from "@mui/icons-material/Title";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import TuneIcon from "@mui/icons-material/Tune";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import WarningIcon from "@mui/icons-material/Warning";

export const MUI_THEME = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#050505",
      paper: "#050505",
    },
  },
});

export const MUI_COMPONENTS = [
  { header: "Inputs" },
  { title: "Autocomplete", icon: SearchIcon },
  { title: "Button", icon: SmartButtonIcon },
  { title: "Button Group", icon: ViewWeekIcon },
  { title: "Checkbox", icon: CheckBoxIcon },
  { title: "Floating Action Button", icon: AddCircleIcon },
  { title: "Radio Group", icon: RadioButtonCheckedIcon },
  { title: "Rating", icon: StarRateIcon },
  { title: "Select", icon: ArrowDropDownCircleIcon },
  { title: "Slider", icon: TuneIcon },
  { title: "Switch", icon: ToggleOnIcon },
  { title: "Text Field", icon: TextFieldsIcon },
  { title: "Transfer List", icon: SwapHorizIcon },
  { title: "Toggle Button", icon: ToggleOffIcon },
  { header: "Data display" },
  { title: "Avatar", icon: PersonIcon },
  { title: "Badge", icon: NotificationsIcon },
  { title: "Chip", icon: LabelIcon },
  { title: "Divider", icon: HorizontalRuleIcon },
  { title: "Icons", icon: InsertEmoticonIcon },
  { title: "Material Icons", icon: CategoryIcon },
  { title: "List", icon: ListIcon },
  { title: "Table", icon: TableChartIcon },
  { title: "Tooltip", icon: HelpOutlineIcon },
  { title: "Typography", icon: TitleIcon },
  { header: "Feedback" },
  { title: "Alert", icon: WarningIcon },
  { title: "Backdrop", icon: BlurOnIcon },
  { title: "Dialog", icon: ChatBubbleIcon },
  { title: "Progress", icon: HourglassEmptyIcon },
  { title: "Skeleton", icon: ViewStreamIcon },
  { title: "Snackbar", icon: NotificationImportantIcon },
  { header: "Surfaces" },
  { title: "Accordion", icon: UnfoldMoreIcon },
  { title: "App Bar", icon: SpaceBarIcon },
  { title: "Card", icon: CreditCardIcon },
  { title: "Paper", icon: DescriptionIcon },
  { header: "Navigation" },
  { title: "Bottom Navigation", icon: NavigationIcon },
  { title: "Breadcrumbs", icon: MoreHorizIcon },
  { title: "Drawer", icon: MenuIcon },
  { title: "Link", icon: LinkIcon },
  { title: "Menu", icon: MenuOpenIcon },
  { title: "Pagination", icon: FormatListNumberedIcon },
  { title: "Speed Dial", icon: SpeedIcon },
  { title: "Stepper", icon: LinearScaleIcon },
  { title: "Tabs", icon: TabIcon },
  { header: "Layout" },
  { title: "Box", icon: CheckBoxOutlineBlankIcon },
  { title: "Container", icon: AllInboxIcon },
  { title: "Grid", icon: GridOnIcon },
  { title: "Stack", icon: LayersIcon },
  { title: "Image List", icon: ImageIcon },
  { header: "Utils" },
  { title: "Modal", icon: OpenInBrowserIcon },
  { title: "Popover", icon: FilterFramesIcon },
  { title: "Popper", icon: PushPinIcon },
  { title: "Portal", icon: OutboxIcon },
  { header: "MUI X" },
  { title: "Data Grid", icon: GridViewIcon },
  { title: "Date and Time Pickers", icon: EventIcon },
  { title: "Charts", icon: InsertChartIcon },
  { title: "Tree View", icon: AccountTreeIcon },
];
