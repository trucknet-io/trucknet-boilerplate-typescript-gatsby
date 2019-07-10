declare module "netlify-cms-app" {
  import { List, Map } from "immutable";
  import React from "react";

  export type PreviewTemplateProps = {
    collection: Map<string, unknown>;
    entry: Map<string, unknown>;
    fields: List<unknown>;
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
