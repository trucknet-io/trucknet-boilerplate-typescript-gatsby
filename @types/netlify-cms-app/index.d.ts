declare module "netlify-cms-app" {
  import { List, Map } from "immutable";
  import React from "react";

  export type PreviewTemplateProps = {
    collection: Map<string, string | number | Object | undefined>;
    entry: Map<string, string | number | Object | undefined>;
    fields: List<string | number | Object | undefined>;
    getAsset(name: string): string;
    widgetFor(name: string): React.ReactNode;
  };

  type CMS = {
    registerPreviewTemplate<T extends PreviewTemplateProps>(
      name: string,
      component: React.ComponentType<T>,
    ): void;
  };

  const cms: CMS;
  export default cms;
}
