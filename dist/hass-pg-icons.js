const PG_ICONS_MAP = {
  "convector-disabled": {
    "keywords": [],
    "path": "M3 9C2.44772 9 2 9.44772 2 10V20C2 20.5523 2.44772 21 3 21L3 22H4V21H20V22H21V21C21.5523 21 22 20.5523 22 20V10C22 9.44772 21.5523 9 21 9H3ZM3 10H11V11H3V10ZM13 10H21V11H13V10ZM13 12H20V13H13V12ZM19 14H13V15H19V14ZM5 14H11V15H5V14ZM11 12H4V13H11V12Z"
  },
  "convector-off": {
    "keywords": [],
    "path": "M 5,6.086 4.364,7.102 5.636,7.897 6.089,7.173 7.919,9 H 3 a 1,1 0 0 0 -1,1 v 10 a 1,1 0 0 0 1,1 v 1 H 4 V 21 H 19.948 L 20,21.052 V 22 h 1 V 21.938 L 22.036,20.9 3.092,2 2,3.094 Z M 13.933,15 13,14.069 V 15 h 0.934 z m -3.007,-3 0.073,0.073 V 13 H 4 v -1 h 6.927 z M 9.923,11 8.921,10 H 3 v 1 H 9.924 Z M 20,13 h -3.88 l 1.002,1 H 19 v 1 H 18.124 L 22,18.867 V 10 A 1,1 0 0 0 21,9 h -8.89 l 1.003,1 H 21 v 1 h -6.885 l 1.002,1 H 20 Z M 5.244,2.15 6.325,3.228 6.871,2.42 5.629,1.58 Z M 5,14 h 6 v 1 H 5 Z m 5.078,-10.126 0.3,-0.445 1.25,-1.849 1.243,0.84 -0.949,1.404 0.926,1.223 0.312,0.412 -0.274,0.439 -1.25,2 -1.272,-0.795 0.976,-1.562 -0.938,-1.24 z m 6.3,-0.445 -0.3,0.445 0.324,0.428 0.938,1.239 -0.976,1.561 1.272,0.795 1.25,-2 L 19.16,5.459 18.848,5.047 17.922,3.824 18.872,2.42 17.629,1.58 16.379,3.429 Z"
  },
  "convector-on": {
    "keywords": [],
    "path": "M4.35544 3.29749L4.11385 3.70358L4.37585 4.0968L5.12357 5.21904L4.34284 6.63856L5.65716 7.36144L6.65716 5.54326L6.87643 5.1446L6.62415 4.76596L5.88615 3.65831L6.64456 2.38345L5.35544 1.61655L4.35544 3.29749ZM10.3554 3.29749L10.1139 3.70358L10.3759 4.0968L11.1236 5.21904L10.3428 6.63856L11.6572 7.36144L12.6572 5.54326L12.8764 5.1446L12.6241 4.76596L11.8861 3.65831L12.6446 2.38345L11.3554 1.61655L10.3554 3.29749ZM16.1139 3.70358L16.3554 3.29749L17.3554 1.61655L18.6446 2.38345L17.8861 3.65831L18.6241 4.76596L18.8764 5.1446L18.6572 5.54326L17.6572 7.36144L16.3428 6.63856L17.1236 5.21904L16.3759 4.0968L16.1139 3.70358ZM3 9C2.44772 9 2 9.44771 2 10V20C2 20.5523 2.44772 21 3 21L3 22H4V21H20V22H21V21C21.5523 21 22 20.5523 22 20V10C22 9.44772 21.5523 9 21 9H13H11H3ZM3 10H11V11H3V10ZM13 10V11H21V10H13ZM4 12H11V13H4V12ZM13 12V13H20V12H13ZM5 14H11V15H5V14ZM13 14V15H19V14H13Z"
  },
  "floor-lamp-off": {
    "keywords": [],
    "path": "M9.23921 10.3165V20.327L11.2392 21.827V12.3118L11.7392 12.8107V21.827L14.7392 20.827V15.8037L20.9441 21.9942L22.0356 20.9001L3.09154 2L2 3.09408L9.23921 10.3165ZM11.7392 8.62759L14.7392 11.6206V2.82703L11.7392 3.82703V8.62759ZM9.23921 6.1334L11.2392 8.12875V3.82703L9.23921 2.32703V6.1334ZM12.2454 1L9.3034 1.97619L11.5175 3.61536L14.6865 2.55109L12.2454 1ZM9.04668 20.3838L11.4489 22.1872L15.0238 20.9855L15.0047 21.4249L11.426 22.6999L9.0528 20.8849L9.04668 20.3838Z"
  },
  "floor-lamp-on": {
    "keywords": [],
    "path": "M12.2454 1L9.30341 1.97619L11.5175 3.61536L14.6865 2.55109L12.2454 1ZM11.2392 3.82703L9.23921 2.32703V20.327L11.2392 21.827V3.82703ZM14.7392 2.82703L11.7392 3.82703V21.827L14.7392 20.827V11.827V2.82703ZM9.04668 20.3838L11.4489 22.1872L15.0238 20.9855L15.0047 21.4249L11.426 22.6999L9.0528 20.8849L9.04668 20.3838Z"
  },
  "intercom-a": {
    "keywords": [],
    "path": "M6 3C6 1.89543 6.89543 1 8 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19V18C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2H12C11.4477 2 11 2.44772 11 3V17C11 17.5523 11.4477 18 12 18H14V19H9C9 20.6569 10.3432 22 12 22C13.6569 22 15 20.6569 15 19V17H13C12.4477 17 12 16.5523 12 16V4C12 3.44772 12.4477 3 13 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17V19C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19C6.89543 19 6 18.1046 6 17V3ZM8.5 6C9.32843 6 10 5.32843 10 4.5C10 3.67157 9.32843 3 8.5 3C7.67157 3 7 3.67157 7 4.5C7 5.32843 7.67157 6 8.5 6ZM8.5 5C8.77614 5 9 4.77614 9 4.5C9 4.22386 8.77614 4 8.5 4C8.22386 4 8 4.22386 8 4.5C8 4.77614 8.22386 5 8.5 5Z"
  },
  "intercom-a-off": {
    "keywords": [],
    "path": "M21.0329 21.104L3.15488 1L2 2.02701L5.00003 5.40057V17C5.00003 18.1046 5.89546 19 7.00003 19C7.00003 21.2091 8.79089 23 11 23C13.2091 23 15 21.2091 15 19V17C15.0972 17 15.1911 16.9862 15.2799 16.9603L16.1886 17.9822C16.1276 17.9939 16.0645 18 16 18V19C16.3248 19 16.6315 18.9226 16.9027 18.7852L19.878 22.131L21.0329 21.104ZM11 12.1476V16C11 16.5523 11.4477 17 12 17H14V19C14 20.6569 12.6569 22 11 22C9.34318 22 8.00003 20.6569 8.00003 19H13V18H11C10.4477 18 10 17.5523 10 17V11.0231L11 12.1476ZM7.80273 4.102L7.93084 4.24607C7.8978 4.19014 7.85418 4.14119 7.80273 4.102ZM9.00003 4.5C9.00003 4.76638 8.9306 5.01655 8.80883 5.23338L10 6.57289V3C10 2.44772 10.4477 2 11 2H16C16.5523 2 17 2.44772 17 3V14.4445L18 15.569V3C18 1.89543 17.1046 1 16 1H7.00003C6.44217 1 5.93766 1.2284 5.5749 1.59679L6.92447 3.11439C7.1017 3.04069 7.29611 3 7.50003 3C8.32846 3 9.00003 3.67157 9.00003 4.5ZM16 13.3199L11 7.6974V4C11 3.44772 11.4477 3 12 3H15C15.5523 3 16 3.44772 16 4V13.3199Z"
  },
  "intercom-b": {
    "keywords": [],
    "path": "M9 1C7.89543 1 7 1.89543 7 3V18C7 19.1046 7.89543 20 9 20H10V19C8.89543 19 8 18.1046 8 17V4C8 2.89543 8.89543 2 10 2H13C14.1046 2 15 2.89543 15 4V17C15 18.1046 14.1046 19 13 19V20H16C17.1046 20 18 19.1046 18 18V3C18 1.89543 17.1046 1 16 1H9ZM5 15.5C5 15.2239 5.22386 15 5.5 15C5.77614 15 6 15.2239 6 15.5V20C6 20.9655 6.96911 22 8.5 22C10.0309 22 11 20.9655 11 20V19V18H10C9.44771 18 9 17.5523 9 17V4C9 3.44772 9.44771 3 10 3H13C13.5523 3 14 3.44772 14 4V17C14 17.5523 13.5523 18 13 18H12V19V20C12 21.6569 10.433 23 8.5 23C6.567 23 5 21.6569 5 20V15.5Z"
  },
  "intercom-b-off": {
    "keywords": [],
    "path": "M7 7.52505V18C7 19.1046 7.89543 20 9 20H10V19C8.89543 19 8 18.1046 8 17V8.64956L9 9.77407V17C9 17.5523 9.44772 18 10 18H11V19V20C11 20.9655 10.0309 22 8.5 22C6.96912 22 6 20.9655 6 20V15.5C6 15.2239 5.77614 15 5.5 15C5.22386 15 5 15.2239 5 15.5V20C5 21.6569 6.56701 23 8.5 23C10.433 23 12 21.6569 12 20V19V18H13C13.5523 18 14 17.5523 14 17V15.3966L15 16.5211V17C15 18.1046 14.1046 19 13 19V20H16C16.5951 20 17.1294 19.7401 17.4958 19.3277L20.878 23.131L22.0329 22.104L3.37106 1.11859L2.21618 2.1456L7 7.52505ZM9 5.32387L14 10.9464V4C14 3.44772 13.5523 3 13 3H10C9.44772 3 9 3.44772 9 4V5.32387ZM15 4V12.0709L18 15.4445V3C18 1.89543 17.1046 1 16 1H9C7.89543 1 7 1.89543 7 3V3.07486L8 4.19937V4C8 2.89543 8.89543 2 10 2H13C14.1046 2 15 2.89543 15 4Z"
  },
  "working-table-off": {
    "keywords": [],
    "path": "M22.0357 20.9001L3.09156 2L2.00002 3.09408L7.00001 8.08247V10H8.922L10 11.0755V12H5.00001V22H6.00001V14H12.9313L18 19.0569V22H19V20.0546L20.9441 21.9942L22.0357 20.9001ZM16 8H11.1078L13.1125 10H17V2H7.00001V3.90171L8.00001 4.89939V3H16V8ZM17.1218 14L15.1171 12H19V15.8739L18 14.8762V14H17.1218Z"
  },
  "working-table-on": {
    "keywords": [],
    "path": "M7 2H17V10H13V12H14V13H19V23H18V15H6V23H5V13H10V12H11V10H7V2ZM16 3H8V8H16V3Z"
  },
  "wall-lamp": {
    "keywords": [],
    "path": "M21 20.1328L20.1528 21L9.81825 10.6775C9.98324 10.5655 10.1397 10.4352 10.2847 10.2867C10.4298 10.1382 10.5567 9.97846 10.6654 9.81026L21 20.1328ZM5.9965 6.00354C5.85144 6.15204 5.72455 6.3118 5.61582 6.48L3 3.86725L3.84715 3L6.46297 5.61276C6.29798 5.72477 6.14156 5.85504 5.9965 6.00354ZM6.85415 6.86017C6.15234 7.57862 6.15939 8.73634 6.86988 9.446C7.58038 10.1557 8.72527 10.1485 9.42707 9.43009C10.1289 8.71164 10.1218 7.55392 9.41134 6.84426C8.70084 6.1346 7.55595 6.14172 6.85415 6.86017Z"
  }
  ,
  "wall-lamp-vertical": {
    "keywords": [],
    "path": "M12 2H13V14.05C12.8384 14.0172 12.6712 14 12.5 14C12.3288 14 12.1616 14.0172 12 14.05V2ZM12.5 19C12.6712 19 12.8384 18.9828 13 18.95V22H12V18.95C12.1616 18.9828 12.3288 19 12.5 19ZM12.5 18C13.3284 18 14 17.3284 14 16.5C14 15.6716 13.3284 15 12.5 15C11.6716 15 11 15.6716 11 16.5C11 17.3284 11.6716 18 12.5 18Z"
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
