import React from "react";
import ReactHelmet from "react-helmet";
import { withLocale, WithLocale } from "react-targem";

import trucknetLogoJpeg from "@src/assets/images/trucknet_logo.jpeg";
import { LocaleCode } from "@src/config/locales";
import { description, title } from "@src/utils/content/site";

export type HeadProps = {
  initialLocale?: LocaleCode;
  siteUrl: string;
};

export class Head extends React.PureComponent<WithLocale & HeadProps> {
  public render() {
    const { initialLocale, siteUrl, t } = this.props;
    const translatedTitle = t(title);

    return (
      <ReactHelmet>
        <html lang={initialLocale} />
        <title>{translatedTitle}</title>

        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta property="og:url" content={siteUrl} />
        <meta name="description" content={t(description)} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={initialLocale} />
        <meta property="og:site_name" content={translatedTitle} />
        <meta property="og:image" content={`${siteUrl}${trucknetLogoJpeg}`} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-768831641"
        />
        <script>
          {`
          window.dataLayer = []; function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'AW-768831641');
        `}
        </script>
      </ReactHelmet>
    );
  }
}

export default withLocale(Head);
