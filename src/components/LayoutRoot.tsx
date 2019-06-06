import styled from "@emotion/styled";
import * as React from "react";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <>
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
