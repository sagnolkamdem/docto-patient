import { Routes } from "@angular/router";
import { AccountComponent } from "../pages/account/account.component";
import { AgendaComponent } from "../pages/agenda/agenda.component";
import { PlaceOfConsultationComponent } from "../pages/place-of-consultation/place-of-consultation.component";
import { SecurityLogComponent } from "../pages/security-log/security-log.component";
import { SettingsComponent } from "../pages/settings/settings.component";
import { SignatureComponent } from "../pages/signature/signature.component";

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
    }
]