import { delay, of } from 'rxjs';

export function getRemoteServer() {
  return new RemoteServer();
}

class RemoteServer {
  validatePlate(plate: string) {
    // here we simulate to go to the server to check if the plate is valid
    return of(plate.trim().length > 3).pipe(delay(1000));
  }
}
