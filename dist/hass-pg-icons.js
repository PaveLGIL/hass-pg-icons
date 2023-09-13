const PG_ICONS_MAP = {
  "intercom-a-on": {
    "keywords": [],
    "path": "M6 3C6 1.89543 6.89543 1 8 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19V18C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2H12C11.4477 2 11 2.44772 11 3V17C11 17.5523 11.4477 18 12 18H14V19H9C9 20.6569 10.3432 22 12 22C13.6569 22 15 20.6569 15 19V17H13C12.4477 17 12 16.5523 12 16V4C12 3.44772 12.4477 3 13 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17V19C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19C6.89543 19 6 18.1046 6 17V3ZM8.5 6C9.32843 6 10 5.32843 10 4.5C10 3.67157 9.32843 3 8.5 3C7.67157 3 7 3.67157 7 4.5C7 5.32843 7.67157 6 8.5 6ZM8.5 5C8.77614 5 9 4.77614 9 4.5C9 4.22386 8.77614 4 8.5 4C8.22386 4 8 4.22386 8 4.5C8 4.77614 8.22386 5 8.5 5Z"
  },
  "intercom-a-off": {
    "keywords": [],
    "path": "M21.0329 21.104L3.15488 1L2 2.02701L5.00003 5.40057V17C5.00003 18.1046 5.89546 19 7.00003 19C7.00003 21.2091 8.79089 23 11 23C13.2091 23 15 21.2091 15 19V17C15.0972 17 15.1911 16.9862 15.2799 16.9603L16.1886 17.9822C16.1276 17.9939 16.0645 18 16 18V19C16.3248 19 16.6315 18.9226 16.9027 18.7852L19.878 22.131L21.0329 21.104ZM11 12.1476V16C11 16.5523 11.4477 17 12 17H14V19C14 20.6569 12.6569 22 11 22C9.34318 22 8.00003 20.6569 8.00003 19H13V18H11C10.4477 18 10 17.5523 10 17V11.0231L11 12.1476ZM7.80273 4.102L7.93084 4.24607C7.8978 4.19014 7.85418 4.14119 7.80273 4.102ZM9.00003 4.5C9.00003 4.76638 8.9306 5.01655 8.80883 5.23338L10 6.57289V3C10 2.44772 10.4477 2 11 2H16C16.5523 2 17 2.44772 17 3V14.4445L18 15.569V3C18 1.89543 17.1046 1 16 1H7.00003C6.44217 1 5.93766 1.2284 5.5749 1.59679L6.92447 3.11439C7.1017 3.04069 7.29611 3 7.50003 3C8.32846 3 9.00003 3.67157 9.00003 4.5ZM16 13.3199L11 7.6974V4C11 3.44772 11.4477 3 12 3H15C15.5523 3 16 3.44772 16 4V13.3199Z"
  },
  "intercom-b-on": {
    "keywords": [],
    "path": "M9 1C7.89543 1 7 1.89543 7 3V18C7 19.1046 7.89543 20 9 20H10V19C8.89543 19 8 18.1046 8 17V4C8 2.89543 8.89543 2 10 2H13C14.1046 2 15 2.89543 15 4V17C15 18.1046 14.1046 19 13 19V20H16C17.1046 20 18 19.1046 18 18V3C18 1.89543 17.1046 1 16 1H9ZM5 15.5C5 15.2239 5.22386 15 5.5 15C5.77614 15 6 15.2239 6 15.5V20C6 20.9655 6.96911 22 8.5 22C10.0309 22 11 20.9655 11 20V19V18H10C9.44771 18 9 17.5523 9 17V4C9 3.44772 9.44771 3 10 3H13C13.5523 3 14 3.44772 14 4V17C14 17.5523 13.5523 18 13 18H12V19V20C12 21.6569 10.433 23 8.5 23C6.567 23 5 21.6569 5 20V15.5Z"
  },
  "intercom-b-off": {
    "keywords": [],
    "path": "M7 7.52505V18C7 19.1046 7.89543 20 9 20H10V19C8.89543 19 8 18.1046 8 17V8.64956L9 9.77407V17C9 17.5523 9.44772 18 10 18H11V19V20C11 20.9655 10.0309 22 8.5 22C6.96912 22 6 20.9655 6 20V15.5C6 15.2239 5.77614 15 5.5 15C5.22386 15 5 15.2239 5 15.5V20C5 21.6569 6.56701 23 8.5 23C10.433 23 12 21.6569 12 20V19V18H13C13.5523 18 14 17.5523 14 17V15.3966L15 16.5211V17C15 18.1046 14.1046 19 13 19V20H16C16.5951 20 17.1294 19.7401 17.4958 19.3277L20.878 23.131L22.0329 22.104L3.37106 1.11859L2.21618 2.1456L7 7.52505ZM9 5.32387L14 10.9464V4C14 3.44772 13.5523 3 13 3H10C9.44772 3 9 3.44772 9 4V5.32387ZM15 4V12.0709L18 15.4445V3C18 1.89543 17.1046 1 16 1H9C7.89543 1 7 1.89543 7 3V3.07486L8 4.19937V4C8 2.89543 8.89543 2 10 2H13C14.1046 2 15 2.89543 15 4Z"
  },
  "convector-on": {
    "keywords": [],
    "path": "M2.38,1.85l-.3,.44,.32,.43,.94,1.24-.98,1.56,1.27,.8,1.25-2,.27-.44-.31-.41-.93-1.22,.95-1.4-1.24-.84-1.25,1.85ZM1,7.42c-.55,0-1,.45-1,1v10c0,.55,.45,1,1,1v1h1v-1H18v1h1v-1c.55,0,1-.45,1-1V8.42c0-.55-.45-1-1-1H1Zm10.01,1s-.01,0-.01,.01v.98s0,.01,.01,.01h7.98s.01,0,.01-.01v-.98s0-.01-.01-.01h-7.98Zm-.01,2.01s0-.01,.01-.01h6.98s.01,0,.01,.01v.98s0,.01-.01,.01h-6.98s-.01,0-.01-.01v-.98Zm.01,1.99s-.01,0-.01,.01v.98s0,.01,.01,.01h5.98s.01,0,.01-.01v-.98s0-.01-.01-.01h-5.98Zm-8.01,.01s0-.01,.01-.01h5.98s.01,0,.01,.01v.98s0,.01-.01,.01H3.01s-.01,0-.01-.01v-.98Zm-.99-2.01s-.01,0-.01,.01v.98s0,.01,.01,.01h6.98s.01,0,.01-.01v-.98s0-.01-.01-.01H2.01Zm-1.01-1.99s0,0,0,0h7.98s.01,0,.01,0v.97s0,0-.01,0H1.01s0,0,0,0v-.97ZM8.08,2.29l.3-.44,1.25-1.85,1.24,.84-.95,1.4,.93,1.22,.31,.41-.27,.44-1.25,2-1.27-.8,.98-1.56-.94-1.24-.32-.43Zm6.3-.44l-.3,.44,.32,.43,.94,1.24-.98,1.56,1.27,.8,1.25-2,.27-.44-.31-.41-.93-1.22,.95-1.4-1.24-.84-1.25,1.85Z"
  },
  "convector-off": {
    "keywords": [],
    "path": "M4.99915 6.08627L4.364 7.1025L5.636 7.8975L6.08865 7.17325L7.91966 9H3C2.44772 9 2 9.44771 2 10V20C2 20.5523 2.44772 21 3 21L3 22H4V21H19.9476L20 21.0523V22H21V21.9382L22.0356 20.9001L3.09154 2L2 3.09408L4.99915 6.08627ZM13.9336 15L13 14.0686V15H13.9336ZM10.9266 12L11 12.0732V13H4V12H10.9266ZM9.92431 11L8.92198 10H3V11H9.92431ZM20 13H16.1195L17.1218 14H19V15H18.1241L22 18.8669V10C22 9.44771 21.5523 9 21 9H12.1102L13.1125 10H21V11H14.1148L15.1171 12H20V13ZM5.24367 2.14945L6.32497 3.22825L6.87134 2.42004L5.62866 1.57996L5.24367 2.14945ZM5 14H11V15H5V14ZM10.078 3.87375L10.3787 3.429L11.6287 1.57996L12.8713 2.42004L11.922 3.82432L12.8479 5.04727L13.1599 5.45928L12.886 5.8975L11.636 7.8975L10.364 7.1025L11.3401 5.54072L10.4021 4.30176L10.078 3.87375ZM16.3787 3.429L16.078 3.87375L16.4021 4.30176L17.3401 5.54072L16.364 7.1025L17.636 7.8975L18.886 5.8975L19.1599 5.45928L18.8479 5.04727L17.922 3.82432L18.8713 2.42004L17.6287 1.57996L16.3787 3.429Z"
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
