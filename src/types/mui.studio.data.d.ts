interface MUIComponentItemDataInerface {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface MUIComponentGroupDataInterface {
  header: string;
  contents: MUIComponentItemDataInerface[];
}
