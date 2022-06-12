import React from "react";

import { PageContentWrapper } from "./styled";
import { PageContentProps } from "./types";

const PageContent: React.FC<PageContentProps> = ({ children, ...props }) => {
    return <PageContentWrapper
        {...props}
    >
        {children}
    </PageContentWrapper>
}

export default PageContent;