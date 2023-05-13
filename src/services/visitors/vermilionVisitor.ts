import type Effect from "../../types/effect";
import type Aether from "../../types/elements/aether";
import type Caelum from "../../types/elements/caelum";
import type Hydragenum from "../../types/elements/hydragenum";
import type Quebrith from "../../types/elements/quebrith";
import type Rebis from "../../types/elements/rebis";
import type Solon from "../../types/elements/solon";
import type Vermilion from "../../types/elements/vermilion";
import type Vitriol from "../../types/elements/vitriol";
import type Visitor from "./visitor";

export class VermilionVisitor implements Visitor {

    visitRebis(rebis: Rebis): Effect {
        return rebis.acceptVermilion();
    }

    visitHydragenum(hydragenum: Hydragenum): Effect {
        return hydragenum.acceptVermilion();
    }

    visitVitriol(vitriol: Vitriol): Effect {
        return vitriol.acceptVermilion();
    }

    visitCaelum(caelum: Caelum): Effect {
        return caelum.acceptVermilion();
    }

    visitQuebrith(quebrith: Quebrith): Effect {
        return quebrith.acceptVermilion();
    }

    visitVermilion(vermilion: Vermilion): Effect {
        return vermilion.acceptVermilion();
    }

    visitAether(aether: Aether): Effect {
        return aether.acceptVermilion();
    }

    visitSolon(solon: Solon): Effect {
        return solon.acceptVermilion();
    }
}