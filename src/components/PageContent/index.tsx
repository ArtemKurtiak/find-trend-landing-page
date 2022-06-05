import React from "react";

import { PageContentWrapper } from "./styled";
import { PageContentProps } from "./types";

const PageContent: React.FC<PageContentProps> = ({ children, backgroundImage, backgroundColor }) => {
    return <PageContentWrapper
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
    >
        {children}
    </PageContentWrapper>
}

export default PageContent;