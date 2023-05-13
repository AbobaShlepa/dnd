import type { AlchemicState } from "./elements/alchemicState";
import type AlchemicElement from "../types/elements/alchemicElement";

export interface Ingredient {
    id: number;
    name: string;
    element: AlchemicElement;
    state: AlchemicState;
}