import { inject, IRouter, IRouteViewModel, route, Routeable } from 'aurelia';
@inject()
export class MyApp implements IRouteViewModel {
    static routes: Routeable[] = [
        { 
            id: 'ShowParam', 
            path: ['/show/:id'], 
            component: import('./show-param'), 
            title: 'ShowParameter' 
        },
        { 
            id: 'default', 
            path: ['', '/welcome'], 
            component: import('./welcome-page'), 
            title: 'Welcome' 
        },
        { 
            id: 'about', 
            path: ['/about'], 
            component: import('./about-page'), 
            title: 'About' 
        },
        
        {
            id: 'Missing Page',
            path: ['/missing-page'],
            component: import('./missing-page'),
            title: 'Missing Page'
        }
    ]

    constructor(@IRouter private router: IRouter) {}

    loadComponent(route: string, param: number) {
        console.log(this.router);
        if(param) {
            this.router.load(`${route}/${param}`);
        } else {
            this.router.load(route);
        }
    }
}
