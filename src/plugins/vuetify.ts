/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { ThemeDefinition, createVuetify } from "vuetify";
import { VStepperVertical } from "vuetify/labs/components";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#E6EBE0",
    surface: "#E6EBE0",
    primary: "#9BC1BC",
    "primary-darken-1": "#3700B3",
    secondary: "#ED6A5A",
    "secondary-darken-1": "#018786",
    accent: "#9BC1BC",
    accentLight: "#F4F1BB",
    accentDark: "#5D576B",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
export default createVuetify({
  components: {
    VStepperVertical,
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
