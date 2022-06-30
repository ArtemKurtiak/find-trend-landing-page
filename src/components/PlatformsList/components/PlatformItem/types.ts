
export interface IPlatformItemProps {
    image: string;
    activePlatform: string;
    setActivePlatform: (image: string) => void;
}

export interface IPlatformItemWrapperProps {
    active: boolean;
}