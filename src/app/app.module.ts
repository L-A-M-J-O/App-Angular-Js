import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './shared/components/card/card.component';
import { ItemsComponent } from './shared/components/items/items.component';
import { ListasModule } from './modules/listas/listas.module';
import { ListasBasicasComponent } from './modules/listas/listas-basicas/listas-basicas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    ListasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
