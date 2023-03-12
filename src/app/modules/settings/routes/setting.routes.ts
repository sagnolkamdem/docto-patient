import { ReasonConsultationComponent } from './../pages/reason-consultation/reason-consultation.component';
import { Routes } from "@angular/router";
import { AccountComponent } from "../pages/account/account.component";
import { AgendaComponent } from "../pages/agenda/agenda.component";
import { PlaceOfConsultationComponent } from "../pages/place-of-consultation/place-of-consultation.component";
import { SecurityLogComponent } from "../pages/security-log/security-log.component";
import { SettingsComponent } from "../pages/settings/settings.component";
import { SignatureComponent } from "../pages/signature/signature.component";
import { NewSubstituteComponent } from "../pages/substitutes/new-substitute/new-substitute.component";
import { SubstitutesComponent } from "../pages/substitutes/substitutes.component";
import { NewUtilisateurComponent } from "../pages/utilisateurs/new-utilisateur/new-utilisateur.component";
import { UtilisateursComponent } from "../pages/utilisateurs/utilisateurs.component";

export const settingRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    data: {
        title: "Paramètres",
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
    path: 'agenda',
    component: AgendaComponent,
    data: {
        title: "Agenda"
    }
  },

  {
    path: 'account/me',
    component: AccountComponent,
    data: {
        title: "Mon compte",
    }
  },

  {
    path: 'account/security-log',
    component: SecurityLogComponent,
    data: {
      title: "Journal de sécurité",
    }
  },

  {
    path: 'account/signature',
    component: SignatureComponent,
    data: {
      title: "Signature",
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
    path: 'user/new-user',
    component: NewUtilisateurComponent,
    data: {
      title: "Nouveau utilisateur"
    }
  },
  {
    path: 'substitutes',
    component: SubstitutesComponent ,
    data: {
      title: "Remplaçant"
    }
  },
  {
    path: 'substitutes/new-substitute',
    component: NewSubstituteComponent ,
    data: {
      title: "Nouveau  remplaçant"
    }
  },
  {
    path: 'reason-consultation',
    component: ReasonConsultationComponent ,
    data: {
      title: "Motif de consultation"
    }
  }
]
