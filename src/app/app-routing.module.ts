import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QueryBuilderComponent } from "./components/query-builder/query-builder.component";
import { BlacklistComponent } from "./components/blacklist/blacklist.component";
import { NewBlacklistComponent } from "./components/new-blacklist/new-blacklist.component";
import { QueryTypesComponent } from "./components/query-types/query-types.component";
import { NewQueryTypeComponent } from "./components/new-query-type/new-query-type.component";
import { SavedQueriesComponent } from "./components/saved-queries/saved-queries.component";

const routes: Routes = [
  { path: "settings/query-types", component: QueryTypesComponent },
  { path: "settings/query-types/new", component: NewQueryTypeComponent },
  { path: "settings/blacklist", component: BlacklistComponent },
  { path: "settings/blacklist/new", component: NewBlacklistComponent },
  { path: "settings/saved-queries", component: SavedQueriesComponent },
  { path: "", component: QueryBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
