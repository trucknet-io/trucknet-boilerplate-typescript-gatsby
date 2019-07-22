import { PreviewTemplateProps } from "netlify-cms-app";
import React from "react";
import { findDOMNode } from "react-dom";

import {
  DEFAULT_LOCALE,
  LocaleCode,
  LocaleDirection,
  SUPPORTED_LOCALES,
} from "@src/config/locales";
import { LocaleContextProvider } from "@src/contexts/LocaleContext";
import MainLayout from "@src/layouts/MainLayout";
import { MuiLocaleProvider } from "@src/layouts/RootLayout";
import { MarkdownTemplate } from "@src/templates/MarkdownPage";

class MarkdownPagePreview extends React.PureComponent<PreviewTemplateProps> {
  public render() {
    const { entry, widgetFor } = this.props;
    return (
      <LocaleContextProvider
        initialLocale={this.getLocale()}
        path={this.getPath()}
        changeBodyDir={this.changeBodyDir}>
        <MuiLocaleProvider>
          <MainLayout>
            <MarkdownTemplate
              title={entry.getIn(["data", "title"])}
              content={widgetFor("body")}
            />
          </MainLayout>
        </MuiLocaleProvider>
      </LocaleContextProvider>
    );
  }

  protected getLocale(): LocaleCode {
    const { entry } = this.props;
    const slug = entry.get("slug");
    if (!slug.includes(".")) {
      return DEFAULT_LOCALE.code;
    }

    const splitRes = slug.split(".");
    const locale = splitRes[splitRes.length - 1] as LocaleCode;
    if (!SUPPORTED_LOCALES.includes(locale)) {
      return DEFAULT_LOCALE.code;
    }

    return locale;
  }

  protected getPath(): string {
    const path = this.props.collection.get("folder").replace("src/content", "");
    return `/${this.getLocale}${path};`;
  }

  protected changeBodyDir = (direction: LocaleDirection) => {
    // This is used to properly set locale direction
    // for a preview inside a CMS iframe
    const node = findDOMNode(this);
    if (!node) {
      return;
    }
    // tslint:disable-next-line: no-non-null-assertion
    node.ownerDocument!.body.dir = direction;
  };
}

export default MarkdownPagePreview;
