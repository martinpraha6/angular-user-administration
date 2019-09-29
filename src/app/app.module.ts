import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./container/app.component";
import { SharedModule } from "./shared/shared.module";
import { LOCATION_INITIALIZED } from "@angular/common";
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpLoaderFactory } from "./shared/helpers/http-loader-factory";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "./store";
import { environment } from "src/environments/environment";

export function appInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );
      locationInitialized.then(() => {
        const langToSet = "en";
        translate.setDefaultLang("en");
        translate.use(langToSet).subscribe(
          () => {
            console.info(`Successfully initialized '${langToSet}' language.'`);
          },
          err => {
            console.error(
              `Problem with '${langToSet}' language initialization.'`
            );
          },
          () => {
            resolve(null);
          }
        );
      });
    });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: "angular-user-administration"
        }),
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
