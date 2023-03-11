import { Routes } from "@angular/router";
import { PlaceOfConsultationComponent } from "../pages/place-of-consultation/place-of-consultation.component";
import { SettingsComponent } from "../pages/settings/settings.component";
import { NewUtilisateurComponent } from "../pages/utilisateurs/new-utilisateur/new-utilisateur.component";
import { UtilisateursComponent } from "../pages/utilisateurs/utilisateurs.component";

export const settingRoutes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        data: {
            title: "Paramétres",
        }
    },
    {
        path: 'place-of-consultation',
        component: PlaceOfConsultationComponent,
        data: {
            title: "Lieux de consultation"
        }
    },
    {
      path: 'users',
      component: UtilisateursComponent,
      data: {
          title: "Utilisateurs"
      }
  },
  {
    path: 'new-user',
    component: NewUtilisateurComponent,
    data: {
        title: "nouveau utilisateur"
    }
}
]