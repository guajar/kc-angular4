import { InjectionToken, ValueProvider } from '@angular/core';

// Para hacer una inyección de un valor, necesitamos crear un token
// usando la clase 'InjectionToken'. No debemos usar como token un string
export const ApiUrl: InjectionToken<string> = new InjectionToken<string>('ApiUrl');

// Además necesitamos crear un 'ValueProvider' y registrarlo en el módulo
export const  ApiUrlProvider: ValueProvider = {
    // En 'provide' indicamos el token, que es lo que posteriormente
    // usaremos para solicitar la inyección de dependencias.
    provide: ApiUrl, 
    // En 'userValue' indicamos el valor a inyectar
    useValue: 'http://localhost:3004'
};

