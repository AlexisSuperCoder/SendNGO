import {TripPoint} from './TripPoint';
import { TripDriver } from './TripDriver';

export class Trip {
   villeDepart: TripPoint;
   villeArrivee: TripPoint;
   tripDate: Date;
   cost: number;
   seats: number;
   driver: TripDriver;
}
