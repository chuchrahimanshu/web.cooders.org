interface StudioComponentItemInterface {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface StudioComponentDataInterface {
  header: string;
  contents: StudioComponentItemInterface[];
}
