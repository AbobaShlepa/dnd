import type Effect from "../../types/effect";
import Aether from "../../types/elements/aether";
import Caelum from "../../types/elements/caelum";
import type { Element } from "../../types/elements/element";
import Hydragenum from "../../types/elements/hydragenum";
import Quebrith from "../../types/elements/quebrith";
import Rebis from "../../types/elements/rebis";
import Solon from "../../types/elements/solon";
import Vermilion from "../../types/elements/vermilion";
import Vitriol from "../../types/elements/vitriol";

export function GetAcceptMethod(element: Element) : () => Effect
{
    if (element instanceof Rebis)
    {
        return element.acceptRebis;
    }

    if (element instanceof Hydragenum)
    {
        return element.acceptHydragenum;
    }

    if (element instanceof Vitriol)
    {
        return element.acceptVitriol;
    }

    if (element instanceof Caelum)
    {
        return element.acceptCaelum;
    }

    if (element instanceof Quebrith)
    {
        return element.acceptQuebrith;
    }

    if (element instanceof Vermilion)
    {
        return element.acceptVermilion;
    }

    if (element instanceof Aether)
    {
        return element.acceptAether;
    }

    if (element instanceof Solon)
    {
        return element.acceptSolon;
    }

    throw Error;
}