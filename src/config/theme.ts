import { color, breakpoint } from './variables';

export const theme = {
  token: {
    colorWarning: color.warning,
    colorError: color.error.default,
    colorSuccess: color.success.default,
    colorPrimary: color.accent.default,
    colorInfo: color.primary.default,
    colorTextBase: color.text.primary,
    colorLink: color.text.primary,
    screenXSMin: 1,
    screenXS: 1,
    screenXSMax: breakpoint.xs,
    screenSMMin: breakpoint.xs + 1,
    screenSM: breakpoint.xs + 1,
    screenSMMax: breakpoint.sm,
    screenMDMin: breakpoint.sm + 1,
    screenMD: breakpoint.sm + 1,
    screenMDMax: breakpoint.md,
    screenLGMin: breakpoint.md + 1,
    screenLG: breakpoint.md + 1,
    screenLGMax: breakpoint.lg,
    screenXLMin: breakpoint.lg + 1,
    screenXL: breakpoint.lg + 1,
    screenXLMax: breakpoint.xl,

    fontFamily: 'Gilroy',
  },

  components: {
    Button: {
      fontSize: 16,
      fontSizeSM: 14,
      contentFontSizeSM: 14,
      paddingInlineLG: 24,
      paddingInlineSM: 17,

      controlHeight: 48,
      controlHeightLG: 48,
      controlHeightSM: 40,

      borderRadius: 64,
      borderRadiusLG: 64,
      borderRadiusSM: 64,
      dangerShadow: 'unset',
      defaultShadow: 'unset',
      primaryShadow: 'unset',
      borderColorDisabled: 'none',
      // colorTextDisabled: color.text.quaternary,
      defaultBorderColor: color.accent.default,
      colorPrimaryBorder: color.accent.default,
      defaultBg: color.transparent,
      defaultHoverBg: color.transparent,
      defaultActiveBg: color.transparent,
      ghostBg: color.white,
      defaultColor: color.accent.default,
      colorLink: color.text.primary,
      colorLinkHover: color.link.hover,
      colorLinkActive: color.link.active,
    },
    Breadcrumb: {
      itemColor: color.text.tertiary,
      linkColor: color.text.tertiary,
      colorText: color.text.primary,
      lastItemColor: color.text.primary,
      colorBgTextHover: color.text.quinary,
      lineWidthFocus: 1,
      fontSize: 16,
      fontSizeSM: 14,
      fontHeight: 24,
      fontHeightSM: 22,
    },
    PromoCarousel: {
      colorBgContainer: color.accent.default,
      arrowOffset: 24,
      dotOffset: -16,
    },
    Divider: {
      colorSplit: color.text.quinary,
    },
    Pagination: {
      colorPrimary: color.accent.default,
      colorText: color.text.primary,
      colorPrimaryHover: color.accent.hover,
      colorTextDisabled: color.text.quaternary,
      borderRadius: 50,
      controlHeight: 40,
      fontSize: 16,
      fontHeight: 40,
      itemSize: 40,
    },
    Dropdown: {
      fontSize: 16,
      paddingBlock: 6,
    },
    Cascader: {
      optionSelectedBg: color.primary.bg,
      menuPadding: 4,
      optionPadding: 12,
      colorSplit: color.border.secondary,
      fontSize: 16,
      lineHeight: 1.5,
      lineWidth: 4,
      fontSizeIcon: 16,
      optionSelectedFontWeight: 400,
    },
    Menu: {
      activeBarBorderWidth: 0,
      fontSize: 16,
      itemHoverBg: color.primary.bg,
      itemSelectedBg: color.primary.bgHover,
      itemActiveBg: color.primary.bgHover,
      itemSelectedColor: color.text.primary,
    },
    Badge: {
      fontSize: 16,
      textFontSize: 16,
      textFontWeight: 500,
      fontSizeSM: 10,
      textFontSizeSM: 10,
      indicatorHeightSM: 16,
    },
    Segmented: {
      itemColor: color.text.secondary,
      itemSelectedBg: color.primary.default,
      itemSelectedColor: color.white,
      itemHoverBg: color.fill.secondary,
      controlHeight: 50,
      trackBg: color.bg.layout,
    },
    Collapse: {
      contentBg: color.white,
      headerBg: color.white,
      colorBorder: color.border.secondary,
      borderRadiusLG: 16,
      headerPadding: 24,
      headerPaddingXS: 16,
      contentPadding: '0 24px 24px',
      fontSizeIcon: 30,
    },
    Modal: {
      titleFontSize: 30,
      titleFontSizeSM: 10,
      fontWeightStrong: 500,
      boxShadow: '0px 4px 20px 0px rgba(64, 54, 49, 0.09)',
      fontFamily: 'Gilroy',
      fontHeight: 32,
    },
    Checkbox: {
      controlInteractiveSize: 24,
      colorPrimary: color.primary.default,
      colorPrimaryHover: color.primary.hover,
    },
    Input: {
      paddingInline: 12,
      paddingBlock: 7,
      colorError: color.error.default,
      addonBg: color.white,
      controlHeight: 48,
    },
    Form: {
      itemMarginBottom: 0,
      verticalLabelPadding: '0 0 4px',
    },
    Tabs: {
      inkBarColor: color.primary.default,
      itemHoverColor: color.primary.hover,
      itemSelectedColor: color.primary.default,
      itemActiveColor: color.primary.active,
      colorIcon: color.primary.default,
      margin: 24,
    },
    Radio: {
      colorPrimary: color.primary.default,
      fontSize: 16,
      radioSize: 24,
    },
    Timeline: {
      colorSuccess: color.success.default,
      fontSize: 16,
      fontSizeSM: 14,
    },
    Switch: {
      colorPrimary: color.primary.default,
      colorPrimaryHover: color.primary.hover,
    },
    DatePicker: {
      controlHeight: 48,
      cellHeight: 32,
      padding: 18,
    },
    Drawer: {
      boxShadowDrawerDown: 'none',
      boxShadowDrawerLeft: 'none',
      boxShadowDrawerRight: 'none',
      boxShadowDrawerUp: 'none',
      padding: 0,
      paddingLG: 0,
      paddingXS: 0,
    },
  },
};
