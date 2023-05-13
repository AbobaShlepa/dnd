import type Effect from "../../../types/effect";
import type Aether from "../../types/elements/aether";
import type Caelum from "../../types/elements/caelum";
import type Hydragenum from "../../types/elements/hydragenum";
import type Quebrith from "../../types/elements/quebrith";
import type Rebis from "../../types/elements/rebis";
import type Solon from "../../types/elements/solon";
import type Vermilion from "../../types/elements/vermilion";
import type Vitriol from "../../types/elements/vitriol";
import type Visitor from "./visitor";

export class RebisVisitor implements Visitor {

    visitRebis(rebis: Rebis): Effect {
        return rebis.acceptRebis();
    }

    visitHydragenum(hydragenum: Hydragenum): Effect {
        return hydragenum.acceptRebis();
    }

    visitVitriol(vitriol: Vitriol): Effect {
        return vitriol.acceptRebis();
    }

    visitCaelum(caelum: Caelum): Effect {
        return caelum.acceptRebis();
    }

    visitQuebrith(quebrith: Quebrith): Effect {
        return quebrith.acceptRebis();
    }

    visitVermilion(vermilion: Vermilion): Effect {
        return vermilion.acceptRebis();
    }

    visitAether(aether: Aether): Effect {
        return aether.acceptRebis();
    }

    visitSolon(solon: Solon): Effect {
        return solon.acceptRebis();
    }
}