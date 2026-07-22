import { addons } from "storybook/manager-api";

addons.setConfig({
  toolbar: {
    // Storybook 10.5.3's built-in zoom popover omits its upcoming required
    // ariaLabel. Hide only that control until the upstream manager is fixed.
    zoom: false,
  },
});
