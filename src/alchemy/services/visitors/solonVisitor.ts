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

export class SolonVisitor implements Visitor {

    visitRebis(rebis: Rebis): Effect {
        return rebis.acceptSolon();
    }

    visitHydragenum(hydragenum: Hydragenum): Effect {
        return hydragenum.acceptSolon();
    }

    visitVitriol(vitriol: Vitriol): Effect {
        return vitriol.acceptSolon();
    }

    visitCaelum(caelum: Caelum): Effect {
        return caelum.acceptSolon();
    }

    visitQuebrith(quebrith: Quebrith): Effect {
        return quebrith.acceptSolon();
    }

    visitVermilion(vermilion: Vermilion): Effect {
        return vermilion.acceptSolon();
    }

    visitAether(aether: Aether): Effect {
        return aether.acceptSolon();
    }

    visitSolon(solon: Solon): Effect {
        return solon.acceptSolon();
    }
}