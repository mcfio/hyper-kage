const backgroundColor = 'rgba(30, 30, 30, 0.95)'
const foregroundColor = '#a7a7a7'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = {
  black       : backgroundColor,
  red         : '#cf6a4c', // red
  green       : '#8f9d6a', // green
  yellow      : '#f9ee98', // yellow
  blue        : '#7587a6', // blue
  magenta     : '#9b859d', // pink
  cyan        : '#afc4db', // cyan
  white       : '#a7a7a7', // light gray
  lightBlack  : '#5f5a60', // medium gray
  lightRed    : '#cf6a4c', // red
  lightGreen  : '#8f9d6a', // green
  lightYellow : '#f9ee98', // yellow
  lightBlue   : '#7587a6', // blue
  lightMagenta: '#9b859d', // pink
  lightCyan   : '#afc4db', // cyan
  colorCubes  : '#ffffff', // white
  grayscale   : foregroundColor
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
        border-left-width: 2px;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: #181a1f !important;
      }
      .tab_tab {
        font-weight: 500;
        color: rgba(157, 165, 180, 0.6);
        border-width: 0 0 0 1px;
        border-image: linear-gradient(#21252b, #181a1f 1em) 0 0 0 1 stretch;
        border-style: solid;
      }
      .tab_tab:first-of-type {
        border-width: 0;
      }
      .tab_tab:hover {
        color: rgba(157, 165, 180, 0.6);
        transition: none;
      }
      .tab_tab::after {
        content: "";
        position: absolute;
        pointer-events: none;
        top: 0;
        bottom: -1px;
        left: 0;
        width: 2px;
        height: inherit;
        background: #528bff;
        opacity: 0;
        transition: opacity .16s;
        z-index: 1;
      }
      .tabs_title,
      .tab_tab.tab_active {
        font-weight: 500;
        color: #d7dae0;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active,
      .tab_tab.tab_active + .tab_tab {
        border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
      }
      .tab_tab.tab_active::before {
        content: "";
        z-index: 1;
        position: absolute;
        top: 0;
        left: -1px;
        bottom: -1px;
        right: 0;
        height: inherit;
        background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
        border: 1px solid #181a1f;
        border-bottom-color: ${backgroundColor};
        border-top: 0;
      }
      .tab_tab.tab_active:last-of-type::before {
        border-right-width: 0;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tab_icon {
        display: block;
        background: rgba(157, 165, 180, 0.6);
        -webkit-mask-image: url('${__dirname}/close.svg');
        mask-image: url('${__dirname}/close.svg');
        -webkit-mask-size: 7px;
        mask-size: 7px;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position-y: center;
        mask-position-y: center;
        -webkit-mask-position-x: 8px;
        mask-position-x: 8px;
        width: 26px;
        height: 100%;
        top: 0;
        right: 0;
        transform: scale(0);
        transition: transform .08s;
        opacity: 1;
        border-radius: 0;
        z-index: 2;
      }
      .tab_icon:hover {
        background: rgba(157, 165, 180, 0.6);
        opacity: .7;
      }
      .tab_tab.tab_active .tab_icon {
        background: #d7dae0;
      }
      .tab_tab.tab_active .tab_icon:hover {
        background: #d7dae0;
      }
      .tab_tab:hover .tab_icon {
        transform: scale(1);
        transition-duration: .16s;
      }
      .tab_icon svg {
        display: none;
      }
      .tab_icon::after {
        display: none;
      }
    `
  })
}
