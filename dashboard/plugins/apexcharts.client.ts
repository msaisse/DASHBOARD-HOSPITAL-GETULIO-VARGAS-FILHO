#Habilita:
#gráficos de evolução temporal
#séries de tempo (tempo médio, volume)
#visualização histórica dos deltas

import VueApexCharts from 'vue3-apexcharts';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueApexCharts);
});
