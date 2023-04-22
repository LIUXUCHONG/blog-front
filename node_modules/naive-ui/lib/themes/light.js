"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = void 0;
// The file is for internal usage, do not export it, since all the components
// have default light theme.
const common_1 = require("../_styles/common");
const styles_1 = require("../alert/styles");
const styles_2 = require("../anchor/styles");
const styles_3 = require("../auto-complete/styles");
const styles_4 = require("../avatar/styles");
const styles_5 = require("../avatar-group/styles");
const styles_6 = require("../back-top/styles");
const styles_7 = require("../badge/styles");
const styles_8 = require("../breadcrumb/styles");
const styles_9 = require("../button/styles");
const styles_10 = require("../button-group/styles");
const styles_11 = require("../calendar/styles");
const styles_12 = require("../card/styles");
const styles_13 = require("../carousel/styles");
const styles_14 = require("../cascader/styles");
const styles_15 = require("../checkbox/styles");
const styles_16 = require("../code/styles");
const styles_17 = require("../collapse/styles");
const styles_18 = require("../collapse-transition/styles");
const styles_19 = require("../color-picker/styles");
const styles_20 = require("../data-table/styles");
const styles_21 = require("../date-picker/styles");
const styles_22 = require("../descriptions/styles");
const styles_23 = require("../dialog/styles");
const styles_24 = require("../divider/styles");
const styles_25 = require("../drawer/styles");
const styles_26 = require("../dropdown/styles");
const styles_27 = require("../dynamic-input/styles");
const styles_28 = require("../dynamic-tags/styles");
const styles_29 = require("../element/styles");
const styles_30 = require("../ellipsis/styles");
const styles_31 = require("../empty/styles");
const styles_32 = require("../form/styles");
const styles_33 = require("../gradient-text/styles");
const styles_34 = require("../icon/styles");
const styles_35 = require("../icon-wrapper/styles");
const styles_36 = require("../image/styles");
const styles_37 = require("../input/styles");
const styles_38 = require("../input-number/styles");
const styles_39 = require("../layout/styles");
const styles_40 = require("../list/styles");
const styles_41 = require("../loading-bar/styles");
const styles_42 = require("../log/styles");
const styles_43 = require("../menu/styles");
const styles_44 = require("../mention/styles");
const styles_45 = require("../message/styles");
const styles_46 = require("../modal/styles");
const styles_47 = require("../notification/styles");
const styles_48 = require("../page-header/styles");
const styles_49 = require("../pagination/styles");
const styles_50 = require("../popconfirm/styles");
const styles_51 = require("../popover/styles");
const styles_52 = require("../popselect/styles");
const styles_53 = require("../progress/styles");
const styles_54 = require("../radio/styles");
const styles_55 = require("../rate/styles");
const styles_56 = require("../result/styles");
const styles_57 = require("../_internal/scrollbar/styles");
const styles_58 = require("../select/styles");
const styles_59 = require("../skeleton/styles");
const styles_60 = require("../slider/styles");
const styles_61 = require("../space/styles");
const styles_62 = require("../spin/styles");
const styles_63 = require("../statistic/styles");
const styles_64 = require("../steps/styles");
const styles_65 = require("../switch/styles");
const styles_66 = require("../table/styles");
const styles_67 = require("../tabs/styles");
const styles_68 = require("../tag/styles");
const styles_69 = require("../thing/styles");
const styles_70 = require("../time-picker/styles");
const styles_71 = require("../timeline/styles");
const styles_72 = require("../tooltip/styles");
const styles_73 = require("../transfer/styles");
const styles_74 = require("../typography/styles");
const styles_75 = require("../tree/styles");
const styles_76 = require("../tree-select/styles");
const styles_77 = require("../upload/styles");
const styles_78 = require("../watermark/styles");
exports.lightTheme = {
    name: 'light',
    common: common_1.commonLight,
    Alert: styles_1.alertLight,
    Anchor: styles_2.anchorLight,
    AutoComplete: styles_3.autoCompleteLight,
    Avatar: styles_4.avatarLight,
    AvatarGroup: styles_5.avatarGroupLight,
    BackTop: styles_6.backTopLight,
    Badge: styles_7.badgeLight,
    Breadcrumb: styles_8.breadcrumbLight,
    Button: styles_9.buttonLight,
    ButtonGroup: styles_10.buttonGroupLight,
    Calendar: styles_11.calendarLight,
    Card: styles_12.cardLight,
    Carousel: styles_13.carouselLight,
    Cascader: styles_14.cascaderLight,
    Checkbox: styles_15.checkboxLight,
    Code: styles_16.codeLight,
    Collapse: styles_17.collapseLight,
    CollapseTransition: styles_18.collapseTransitionLight,
    ColorPicker: styles_19.colorPickerLight,
    DataTable: styles_20.dataTableLight,
    DatePicker: styles_21.datePickerLight,
    Descriptions: styles_22.descriptionsLight,
    Dialog: styles_23.dialogLight,
    Divider: styles_24.dividerLight,
    Drawer: styles_25.drawerLight,
    Dropdown: styles_26.dropdownLight,
    DynamicInput: styles_27.dynamicInputLight,
    DynamicTags: styles_28.dynamicTagsLight,
    Element: styles_29.elementLight,
    Empty: styles_31.emptyLight,
    Ellipsis: styles_30.ellipsisLight,
    Form: styles_32.formLight,
    GradientText: styles_33.gradientTextLight,
    Icon: styles_34.iconLight,
    IconWrapper: styles_35.iconWrapperLight,
    Image: styles_36.imageLight,
    Input: styles_37.inputLight,
    InputNumber: styles_38.inputNumberLight,
    Layout: styles_39.layoutLight,
    List: styles_40.listLight,
    LoadingBar: styles_41.loadingBarLight,
    Log: styles_42.logLight,
    Menu: styles_43.menuLight,
    Mention: styles_44.mentionLight,
    Message: styles_45.messageLight,
    Modal: styles_46.modalLight,
    Notification: styles_47.notificationLight,
    PageHeader: styles_48.pageHeaderLight,
    Pagination: styles_49.paginationLight,
    Popconfirm: styles_50.popconfirmLight,
    Popover: styles_51.popoverLight,
    Popselect: styles_52.popselectLight,
    Progress: styles_53.progressLight,
    Radio: styles_54.radioLight,
    Rate: styles_55.rateLight,
    Result: styles_56.resultLight,
    Scrollbar: styles_57.scrollbarLight,
    Skeleton: styles_59.skeletonLight,
    Select: styles_58.selectLight,
    Slider: styles_60.sliderLight,
    Space: styles_61.spaceLight,
    Spin: styles_62.spinLight,
    Statistic: styles_63.statisticLight,
    Steps: styles_64.stepsLight,
    Switch: styles_65.switchLight,
    Table: styles_66.tableLight,
    Tabs: styles_67.tabsLight,
    Tag: styles_68.tagLight,
    Thing: styles_69.thingLight,
    TimePicker: styles_70.timePickerLight,
    Timeline: styles_71.timelineLight,
    Tooltip: styles_72.tooltipLight,
    Transfer: styles_73.transferLight,
    Tree: styles_75.treeLight,
    TreeSelect: styles_76.treeSelectLight,
    Typography: styles_74.typographyLight,
    Upload: styles_77.uploadLight,
    Watermark: styles_78.watermarkLight
};
