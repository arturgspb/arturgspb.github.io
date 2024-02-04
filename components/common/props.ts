import { AnyType } from "./types";
import React from "react";

export interface IRefProps {
    ref: React.Ref<AnyType>;
}

export interface IChildrenProps {
    children?: React.ReactNode;
}