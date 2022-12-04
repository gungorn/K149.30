//multiple theme
import store from '~/redux';

import * as Palettes from '~/themes';

export const getColors = () => Palettes[store.getState().app.selectedTheme];
export const getColor = d => Palettes[store.getState().app.selectedTheme][d];

//single theme
// import { light } from '~/themes/palettes';

// export const getColor = c => light[c];
// export const getColors = () => light;
