import type Effect from '../../../types/effect'
import type Aether from '../../types/elements/aether'
import type Caelum from '../../types/elements/caelum'
import type Hydragenum from '../../types/elements/hydragenum'
import type Quebrith from '../../types/elements/quebrith'
import type Rebis from '../../types/elements/rebis'
import type Solon from '../../types/elements/solon'
import type Vermilion from '../../types/elements/vermilion'
import type Vitriol from '../../types/elements/vitriol'

export default interface Visitor {
    visitRebis(rebis: Rebis): Effect                      // Ребис
    visitHydragenum(hydragenum: Hydragenum): Effect       // Гидроген
    visitVitriol(vitriol: Vitriol): Effect                // Купорос
    visitCaelum(caelum: Caelum): Effect                   // Аэр
    visitQuebrith(quebrith: Quebrith): Effect             // Квебит
    visitVermilion(vermilion: Vermilion): Effect          // Киноварь
    visitAether(aether: Aether): Effect                   // Эфир
    visitSolon(solon: Solon): Effect                      // Солон
}