import type { ReactNode } from "react";

export interface btnProps {
    onClick: ()=>void;
    label: string,
    className: string;
    children?: ReactNode;
    disabled?: boolean;




}

