const PG_ICONS_MAP = {
  "intercom-a-on": {
    "keywords": [],
    "path": "M6 3C6 1.89543 6.89543 1 8 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19V18C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2H12C11.4477 2 11 2.44772 11 3V17C11 17.5523 11.4477 18 12 18H14V19H9C9 20.6569 10.3432 22 12 22C13.6569 22 15 20.6569 15 19V17H13C12.4477 17 12 16.5523 12 16V4C12 3.44772 12.4477 3 13 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17V19C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19C6.89543 19 6 18.1046 6 17V3ZM8.5 6C9.32843 6 10 5.32843 10 4.5C10 3.67157 9.32843 3 8.5 3C7.67157 3 7 3.67157 7 4.5C7 5.32843 7.67157 6 8.5 6ZM8.5 5C8.77614 5 9 4.77614 9 4.5C9 4.22386 8.77614 4 8.5 4C8.22386 4 8 4.22386 8 4.5C8 4.77614 8.22386 5 8.5 5Z"
  },
  "intercom-a-off": {
    "keywords": [],
    "path": "M21.0329 21.104L3.15488 1L2 2.02701L5.00003 5.40057V17C5.00003 18.1046 5.89546 19 7.00003 19C7.00003 21.2091 8.79089 23 11 23C13.2091 23 15 21.2091 15 19V17C15.0972 17 15.1911 16.9862 15.2799 16.9603L16.1886 17.9822C16.1276 17.9939 16.0645 18 16 18V19C16.3248 19 16.6315 18.9226 16.9027 18.7852L19.878 22.131L21.0329 21.104ZM11 12.1476V16C11 16.5523 11.4477 17 12 17H14V19C14 20.6569 12.6569 22 11 22C9.34318 22 8.00003 20.6569 8.00003 19H13V18H11C10.4477 18 10 17.5523 10 17V11.0231L11 12.1476ZM7.80273 4.102L7.93084 4.24607C7.8978 4.19014 7.85418 4.14119 7.80273 4.102ZM9.00003 4.5C9.00003 4.76638 8.9306 5.01655 8.80883 5.23338L10 6.57289V3C10 2.44772 10.4477 2 11 2H16C16.5523 2 17 2.44772 17 3V14.4445L18 15.569V3C18 1.89543 17.1046 1 16 1H7.00003C6.44217 1 5.93766 1.2284 5.5749 1.59679L6.92447 3.11439C7.1017 3.04069 7.29611 3 7.50003 3C8.32846 3 9.00003 3.67157 9.00003 4.5ZM16 13.3199L11 7.6974V4C11 3.44772 11.4477 3 12 3H15C15.5523 3 16 3.44772 16 4V13.3199Z"
  },
  "convector-on": {
    "keywords": [],
    "path": "M4.35544 3.29749L4.11385 3.70358L4.37585 4.0968L5.12357 5.21904L4.34284 6.63856L5.65716 7.36144L6.65716 5.54326L6.87643 5.1446L6.62415 4.76596L5.88615 3.65831L6.64456 2.38345L5.35544 1.61655L4.35544 3.29749ZM3 9C2.44772 9 2 9.44772 2 10V20C2 20.5523 2.44772 21 3 21L3 22H4V21H20V22H21V21C21.5523 21 22 20.5523 22 20V10C22 9.44772 21.5523 9 21 9H3ZM13.01 10C13.0045 10 13 10.0045 13 10.01V10.99C13 10.9955 13.0045 11 13.01 11H20.99C20.9955 11 21 10.9955 21 10.99V10.01C21 10.0045 20.9955 10 20.99 10H13.01ZM13 12.01C13 12.0045 13.0045 12 13.01 12H19.99C19.9955 12 20 12.0045 20 12.01V12.99C20 12.9955 19.9955 13 19.99 13H13.01C13.0045 13 13 12.9955 13 12.99V12.01ZM13.01 14C13.0045 14 13 14.0045 13 14.01V14.99C13 14.9955 13.0045 15 13.01 15H18.99C18.9955 15 19 14.9955 19 14.99V14.01C19 14.0045 18.9955 14 18.99 14H13.01ZM5 14.01C5 14.0045 5.00448 14 5.01 14H10.99C10.9955 14 11 14.0045 11 14.01V14.99C11 14.9955 10.9955 15 10.99 15H5.01C5.00448 15 5 14.9955 5 14.99V14.01ZM4.01 12C4.00448 12 4 12.0045 4 12.01V12.99C4 12.9955 4.00448 13 4.01 13H10.99C10.9955 13 11 12.9955 11 12.99V12.01C11 12.0045 10.9955 12 10.99 12H4.01ZM3 10.01C3 10.0045 3.00448 10 3.01 10H10.99C10.9955 10 11 10.0045 11 10.01V10.99C11 10.9955 10.9955 11 10.99 11H3.01C3.00448 11 3 10.9955 3 10.99V10.01ZM10.1139 3.70358L10.3554 3.29749L11.3554 1.61655L12.6446 2.38345L11.8861 3.65831L12.6241 4.76596L12.8764 5.1446L12.6572 5.54326L11.6572 7.36144L10.3428 6.63856L11.1236 5.21904L10.3759 4.0968L10.1139 3.70358ZM16.3554 3.29749L16.1139 3.70358L16.3759 4.0968L17.1236 5.21904L16.3428 6.63856L17.6572 7.36144L18.6572 5.54326L18.8764 5.1446L18.6241 4.76596L17.8861 3.65831L18.6446 2.38345L17.3554 1.61655L16.3554 3.29749Z"
  },
  "convector-disabled": {
    "keywords": [],
    "path": "M2 10C2 9.44772 2.44772 9 3 9H21C21.5523 9 22 9.44772 22 10V20C22 20.5523 21.5523 21 21 21V22H20V21H4V22H3L3 21C2.44772 21 2 20.5523 2 20V10ZM13 10.01C13 10.0045 13.0045 10 13.01 10H20.99C20.9955 10 21 10.0045 21 10.01V10.99C21 10.9955 20.9955 11 20.99 11H13.01C13.0045 11 13 10.9955 13 10.99V10.01ZM13.01 12C13.0045 12 13 12.0045 13 12.01V12.99C13 12.9955 13.0045 13 13.01 13H19.99C19.9955 13 20 12.9955 20 12.99V12.01C20 12.0045 19.9955 12 19.99 12H13.01ZM13 14.01C13 14.0045 13.0045 14 13.01 14H18.99C18.9955 14 19 14.0045 19 14.01V14.99C19 14.9955 18.9955 15 18.99 15H13.01C13.0045 15 13 14.9955 13 14.99V14.01ZM5.01 14C5.00448 14 5 14.0045 5 14.01V14.99C5 14.9955 5.00448 15 5.01 15H10.99C10.9955 15 11 14.9955 11 14.99V14.01C11 14.0045 10.9955 14 10.99 14H5.01ZM4 12.01C4 12.0045 4.00448 12 4.01 12H10.99C10.9955 12 11 12.0045 11 12.01V12.99C11 12.9955 10.9955 13 10.99 13H4.01C4.00448 13 4 12.9955 4 12.99V12.01ZM3.01 10C3.00448 10 3 10.0045 3 10.01V10.99C3 10.9955 3.00448 11 3.01 11H10.99C10.9955 11 11 10.9955 11 10.99V10.01C11 10.0045 10.9955 10 10.99 10H3.01Z"
  },
  "convector-off": {
    "keywords": [],
    "path": "M4.99915 6.08627L4.364 7.1025L5.636 7.8975L6.08865 7.17325L7.91966 9H3C2.44772 9 2 9.44771 2 10V20C2 20.5523 2.44772 21 3 21L3 22H4V21H19.9476L20 21.0523V22H21V21.9382L22.0356 20.9001L3.09154 2L2 3.09408L4.99915 6.08627ZM13.9336 15L13 14.0686V15H13.9336ZM10.9266 12L11 12.0732V13H4V12H10.9266ZM9.92431 11L8.92198 10H3V11H9.92431ZM20 13H16.1195L17.1218 14H19V15H18.1241L22 18.8669V10C22 9.44771 21.5523 9 21 9H12.1102L13.1125 10H21V11H14.1148L15.1171 12H20V13ZM5.24367 2.14945L6.32497 3.22825L6.87134 2.42004L5.62866 1.57996L5.24367 2.14945ZM5 14H11V15H5V14ZM10.078 3.87375L10.3787 3.429L11.6287 1.57996L12.8713 2.42004L11.922 3.82432L12.8479 5.04727L13.1599 5.45928L12.886 5.8975L11.636 7.8975L10.364 7.1025L11.3401 5.54072L10.4021 4.30176L10.078 3.87375ZM16.3787 3.429L16.078 3.87375L16.4021 4.30176L17.3401 5.54072L16.364 7.1025L17.636 7.8975L18.886 5.8975L19.1599 5.45928L18.8479 5.04727L17.922 3.82432L18.8713 2.42004L17.6287 1.57996L16.3787 3.429Z"
  },
  "intercom-b-on": {
    "keywords": [],
    "path": "M4.35544 3.29749L4.11385 3.70358L4.37585 4.0968L5.12357 5.21904L4.34284 6.63856L5.65716 7.36144L6.65716 5.54326L6.87643 5.1446L6.62415 4.76596L5.88615 3.65831L6.64456 2.38345L5.35544 1.61655L4.35544 3.29749ZM10.3554 3.29749L10.1139 3.70358L10.3759 4.0968L11.1236 5.21904L10.3428 6.63856L11.6572 7.36144L12.6572 5.54326L12.8764 5.1446L12.6241 4.76596L11.8861 3.65831L12.6446 2.38345L11.3554 1.61655L10.3554 3.29749ZM16.1139 3.70358L16.3554 3.29749L17.3554 1.61655L18.6446 2.38345L17.8861 3.65831L18.6241 4.76596L18.8764 5.1446L18.6572 5.54326L17.6572 7.36144L16.3428 6.63856L17.1236 5.21904L16.3759 4.0968L16.1139 3.70358ZM3 9C2.44772 9 2 9.44771 2 10V20C2 20.5523 2.44772 21 3 21L3 22H4V21H20V22H21V21C21.5523 21 22 20.5523 22 20V10C22 9.44772 21.5523 9 21 9H3ZM13.01 10C13.0045 10 13 10.0045 13 10.01V10.99C13 10.9955 13.0045 11 13.01 11H20.99C20.9955 11 21 10.9955 21 10.99V10.01C21 10.0045 20.9955 10 20.99 10H13.01ZM13 12.01C13 12.0045 13.0045 12 13.01 12H19.99C19.9955 12 20 12.0045 20 12.01V12.99C20 12.9955 19.9955 13 19.99 13H13.01C13.0045 13 13 12.9955 13 12.99V12.01ZM13.01 14C13.0045 14 13 14.0045 13 14.01V14.99C13 14.9955 13.0045 15 13.01 15H18.99C18.9955 15 19 14.9955 19 14.99V14.01C19 14.0045 18.9955 14 18.99 14H13.01ZM5 14.01C5 14.0045 5.00448 14 5.01 14H10.99C10.9955 14 11 14.0045 11 14.01V14.99C11 14.9955 10.9955 15 10.99 15H5.01C5.00448 15 5 14.9955 5 14.99V14.01ZM4.01 12C4.00448 12 4 12.0045 4 12.01V12.99C4 12.9955 4.00448 13 4.01 13H10.99C10.9955 13 11 12.9955 11 12.99V12.01C11 12.0045 10.9955 12 10.99 12H4.01ZM3 10.01C3 10.0045 3.00448 10 3.01 10H10.99C10.9955 10 11 10.0045 11 10.01V10.99C11 10.9955 10.9955 11 10.99 11H3.01C3.00448 11 3 10.9955 3 10.99V10.01Z"
  },
  "intercom-b-off": {
    "keywords": [],
    "path": "M7 7.52505V18C7 19.1046 7.89543 20 9 20H10V19C8.89543 19 8 18.1046 8 17V8.64956L9 9.77407V17C9 17.5523 9.44772 18 10 18H11V19V20C11 20.9655 10.0309 22 8.5 22C6.96912 22 6 20.9655 6 20V15.5C6 15.2239 5.77614 15 5.5 15C5.22386 15 5 15.2239 5 15.5V20C5 21.6569 6.56701 23 8.5 23C10.433 23 12 21.6569 12 20V19V18H13C13.5523 18 14 17.5523 14 17V15.3966L15 16.5211V17C15 18.1046 14.1046 19 13 19V20H16C16.5951 20 17.1294 19.7401 17.4958 19.3277L20.878 23.131L22.0329 22.104L3.37106 1.11859L2.21618 2.1456L7 7.52505ZM9 5.32387L14 10.9464V4C14 3.44772 13.5523 3 13 3H10C9.44772 3 9 3.44772 9 4V5.32387ZM15 4V12.0709L18 15.4445V3C18 1.89543 17.1046 1 16 1H9C7.89543 1 7 1.89543 7 3V3.07486L8 4.19937V4C8 2.89543 8.89543 2 10 2H13C14.1046 2 15 2.89543 15 4Z"
  },
  "floor-lamp-on": {
    "keywords": [],
    "path": "M12.2454 1L9.30341 1.97619L11.5175 3.61536L14.6865 2.55109L12.2454 1ZM11.2392 3.82703L9.23921 2.32703V20.327L11.2392 21.827V3.82703ZM14.7392 2.82703L11.7392 3.82703V21.827L14.7392 20.827V11.827V2.82703ZM9.04668 20.3838L11.4489 22.1872L15.0238 20.9855L15.0047 21.4249L11.426 22.6999L9.0528 20.8849L9.04668 20.3838Z"
  },
  "floor-lamp-off": {
    "keywords": [],
    "path": "M9.23921 10.3165V20.327L11.2392 21.827V12.3118L11.7392 12.8107V21.827L14.7392 20.827V15.8037L20.9441 21.9942L22.0356 20.9001L3.09154 2L2 3.09408L9.23921 10.3165ZM11.7392 8.62759L14.7392 11.6206V2.82703L11.7392 3.82703V8.62759ZM9.23921 6.1334L11.2392 8.12875V3.82703L9.23921 2.32703V6.1334ZM12.2454 1L9.3034 1.97619L11.5175 3.61536L14.6865 2.55109L12.2454 1ZM9.04668 20.3838L11.4489 22.1872L15.0238 20.9855L15.0047 21.4249L11.426 22.6999L9.0528 20.8849L9.04668 20.3838Z"
  },
  "working-table-on": {
    "keywords": [],
    "path": "M7 2H17V10H13V11H14V12H19V22H18V14H6V22H5V12H10V11H11V10H7V2ZM8 3H16V8H8V3Z"
  },
  "working-table-off": {
    "keywords": [],
    "path": "M22.0357 20.9001L3.09156 2L2.00002 3.09408L7.00001 8.08247V10H8.922L10 11.0755V12H5.00001V22H6.00001V14H12.9313L18 19.0569V22H19V20.0546L20.9441 21.9942L22.0357 20.9001ZM16 8H11.1078L13.1125 10H17V2H7.00001V3.90171L8.00001 4.89939V3H16V8ZM17.1218 14L15.1171 12H19V15.8739L18 14.8762V14H17.1218Z"
  }
};

async function getIcon(name) {
  return {path: PG_ICONS_MAP[name]?.path};
}
async function getIconList() {
  return Object.entries(PG_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["pg"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["pg"] = getIcon;
