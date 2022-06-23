import React from "react";

export type PageContentProps = {
    children?: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    maxHeight?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    gap?: string;
    height?: string;
};

export type PageContentWrapperProps = Omit<PageContentProps, 'children'>