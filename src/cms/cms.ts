import CMS from "netlify-cms-app";

import MarkdownPagePreview from "./previews/MarkdownPagePreview";

CMS.registerPreviewTemplate("about", MarkdownPagePreview);
CMS.registerPreviewTemplate("nested", MarkdownPagePreview);
CMS.registerPreviewTemplate("nested_example", MarkdownPagePreview);

// @ts-ignore
window.IS_NETLIFY_CMS = true;
