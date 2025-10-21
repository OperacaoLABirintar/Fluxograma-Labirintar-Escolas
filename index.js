import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

console.log('index.js carregado (debug)');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    let AppComponent;
    // tenta importar o JS compilado em dist/ primeiro
    try {
      const mod = await import('./dist/src/app.component.js');
      AppComponent = mod.AppComponent ?? mod.default;
      console.log('Importado ./dist/src/app.component.js');
    } catch (e1) {
      // fallback para ./src/app.component.js (quando já foi convertido para .js)
      try {
        const mod2 = await import('./src/app.component.js');
        AppComponent = mod2.AppComponent ?? mod2.default;
        console.log('Importado ./src/app.component.js');
      } catch (e2) {
        console.error('Não foi possível importar AppComponent. Gere o JS (tsc) ou use bundler.', e1, e2);
        return;
      }
    }

    if (!AppComponent) {
      console.error('AppComponent indefinido após import.');
      return;
    }

    await bootstrapApplication(AppComponent, {
      providers: [provideZonelessChangeDetection()],
    });
    console.log('BootstrapApplication executado com sucesso');
  } catch (err) {
    console.error('Erro no bootstrapApplication:', err);
  }
});
