import { Routes } from "@angular/router";
import { PlaceOfConsultationComponent } from "../pages/place-of-consultation/place-of-consultation.component";
import { SettingsComponent } from "../pages/settings/settings.component";

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
    }
]