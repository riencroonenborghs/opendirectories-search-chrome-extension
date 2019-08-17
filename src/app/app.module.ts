import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatSelectModule, MatCheckboxModule, MatMenuModule, MatListModule, MatSnackBarModule } from "@angular/material";

import { QueryBuilderComponent } from "./components/query-builder/query-builder.component";
import { BlacklistComponent } from "./components/blacklist/blacklist.component";
import { QueryTypesComponent } from "./components/query-types/query-types.component";
import { SavedQueriesComponent } from "./components/saved-queries/saved-queries.component";
import { NewBlacklistComponent } from './components/new-blacklist/new-blacklist.component';
import { NewQueryTypeComponent } from './components/new-query-type/new-query-type.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryBuilderComponent,
    BlacklistComponent,
    QueryTypesComponent,
    SavedQueriesComponent,
    NewBlacklistComponent,
    NewQueryTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatSelectModule, MatCheckboxModule, MatMenuModule, MatListModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
