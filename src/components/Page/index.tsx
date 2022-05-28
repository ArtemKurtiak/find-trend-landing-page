import React from "react";

import { PageWrapper } from "./styled";
import {PageProps} from "./types";

const Page: React.FC<PageProps> = ({ children }) => {
    return <PageWrapper>
        {children}
    </PageWrapper>
}

export default Page;