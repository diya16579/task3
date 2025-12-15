import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Card } from './card/card';
import { Carosol } from './carosol/carosol';
import { About } from './pages/about/about';
import { Cloud } from './pages/cloud/cloud';
import { Cyber } from './pages/cyber/cyber';
import { Eng } from './pages/eng/eng';
import { Devops } from './pages/devops/devops';
import { Gis } from './pages/gis/gis';

export const routes: Routes = [
    {path:'contact',component:Contact},
    {path:'card',component:Card},
    {path:'carosol',component:Carosol},
    {path:'about',component:About},
    {path:'cloud',component:Cloud},
    {path:'cyber',component:Cyber},
    {path:'eng',component:Eng},
    {path:'devops',component:Devops},
    {path:'gis',component:Gis}
];
