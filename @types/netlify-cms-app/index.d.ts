declare module "netlify-cms-app" {
  import { List, Map } from "immutable";
  import React from "react";

  interface ToImmutableMap<T> extends Immutable.Map<string, unknown> {
    toJS(): T;
    get<K extends keyof T>(key: K): T[K];
    getIn<K extends keyof T>(key: [K]): T[K];
    getIn<K extends keyof T, L extends keyof T[K]>(path: [K, L]): T[K][L];
    getIn(path: string[]): unknown;
  }

  export type PreviewData = {
    body: string;
    templateKey: string;
    title: string;
  };

  export type PreviewWidget = {
    label: string;
    name: string;
    widget: string;
    default?: string;
  };

  export type PreviewCollection = {
    create: boolean;
    fields: PreviewWidget[];
    folder: string;
    label: string;
    name: string;
    type: string;
  };

  export type PreviewEntry<D extends Object = PreviewData> = {
    collection: string;
    data: D;
    isModification: boolean | null;
    label: string | null;
    metaData: Object | null;
    newRecord: boolean;
    partial: boolean;
    path: string;
    raw: string;
    slug: string;
  };

  export type ImmutablePreviewEntry<
    D extends Object = PreviewData
  > = ToImmutableMap<PreviewEntry<D>>;

  export type ImmutablePreviewCollection = ToImmutableMap<PreviewCollection>;

  export type PreviewTemplateProps<D extends Object = PreviewData> = {
    collection: ImmutablePreviewCollection;
    entry: ImmutablePreviewEntry<D>;
    fields: List<PreviewWidget>;
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
