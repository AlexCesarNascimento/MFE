import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: 'bloco',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe-remotes',       // Nome tem que corresponder com Manifest
      exposedModule: './Module'
    })
      .then(m => m.BlocoModule)
  }
];
