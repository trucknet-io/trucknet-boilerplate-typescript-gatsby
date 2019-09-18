declare namespace React {
  interface MetaHTMLAttributes<HTMLMetaElement>
    extends HTMLAttributes<HTMLMetaElement> {
    content?: React.ReactNode;
  }
}
