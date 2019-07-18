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
        initialLocale={this.locale}
        path={this.path}
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

  private get locale(): LocaleCode {
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

  private get path(): string {
    const path = this.props.collection.get("folder").replace("src/content", "");
    return `/${this.locale}${path};`;
  }

  private changeBodyDir = (direction: LocaleDirection) => {
    // This is used to properly set locale direction
    // for a preview inside an CMS iframe
    const node = findDOMNode(this);
    if (!node) {
      return;
    }
    // tslint:disable-next-line: no-non-null-assertion
    node.ownerDocument!.body.dir = direction;
  };
}

export default MarkdownPagePreview;
