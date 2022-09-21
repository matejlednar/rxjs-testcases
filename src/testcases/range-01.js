import { range } from "rxjs";
import { map, filter } from "rxjs/operators";


export function run() {

    range(1, 200)
        .pipe(
            filter(x => x % 2 === 1),
            map(x => x + x)
        )
        .subscribe(x => console.log(x));
};
