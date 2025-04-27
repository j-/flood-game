interface DataLayerObject extends Record<string, string> {}

interface DataLayer extends Array<DataLayerObject> {
  /** A method to update the data layer with new or updated key/value pairs. */
  push(...items: DataLayerObject[]): number;
};

interface Window {
  dataLayer: DataLayer;
}

/**
 * The dataLayer is a global object of key/value pairs passed to Google Tag
 * Manager. It can be used to describe information that isn't available as part
 * of a page DOM or other JavaScript variables. The dataLayer object needs to be
 * initialized.
 */
const dataLayer: DataLayer;
