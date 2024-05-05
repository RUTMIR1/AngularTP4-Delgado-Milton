import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import LocaleEsAr from '@angular/common/locales/es-AR'
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocaleEsAr);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
