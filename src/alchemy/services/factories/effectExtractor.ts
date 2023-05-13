import type Effect from "../../../types/effect";
import type { Element } from "../../types/elements/element";
import type Visitor from "../visitors/visitor";
import { GetAcceptMethod } from "./visitorFactory";

export function Extract(elements: Element[]): Effect[]
{
    if (elements.length === 0)
    {
        return [];
    }

    const result: Effect[] = [];
    let visitor: Visitor = elements[0].getVisitor();

    for (let i = 1; i < elements.length; i++)
    {
        const element: Element = elements[i];
        const acceptFunction: any = GetAcceptMethod(element);
        result.push(acceptFunction(element))
        visitor = element.getVisitor();
    }
    return result;
}