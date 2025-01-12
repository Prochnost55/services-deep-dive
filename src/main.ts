import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// You can also provide a service at the root level by passing it to the `bootstrapApplication` function
// like this: `bootstrapApplication(AppComponent, [TasksService])`
// This way, the service will be available to all components in the application. You need not to add @injectable({providedIn: 'root'}) in service.
// Note: When providing a service at the root level, then the tree shaking optimization will not work for that service.
// This means that the service will be included in the final bundle even if it's not used. 
bootstrapApplication(AppComponent).catch((err) => console.error(err));
