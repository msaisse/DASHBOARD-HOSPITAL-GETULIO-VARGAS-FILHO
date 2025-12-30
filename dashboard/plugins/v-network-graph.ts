#Habilita:
#visualização do fluxo de pacientes
#interação com nós e arestas
#leitura sistêmica do atendimento


// plugins/v-network-graph.ts
import { defineNuxtPlugin } from "#app"
import VNetworkGraph from "v-network-graph"

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VNetworkGraph)
})
