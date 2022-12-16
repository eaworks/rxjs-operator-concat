import { of, map, Observable, concat } from 'rxjs';
concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(console.log);
// concat bitmis verilerle calisir. eger veri surekliyse birlestirme islemini yapamaz