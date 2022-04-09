import { fromEvent, interval, reduce, switchMap, takeLast, takeWhile, tap } from 'rxjs';
import { filter, map, scan, take } from 'rxjs/operators';

fromEvent(document, 'click')
	.pipe(
		switchMap((event) => {
			return interval(1000).pipe(
				take(5),
				reduce((acc, v) => (acc += v), 0)
			);
		})
	)
	.subscribe({
		next: (v) => console.log('Next: ', v),
		complete: () => console.log('Complete'),
	});

// const stream$ = interval(1000).pipe(
// 	// tap(v => console.log('tap', v)),
// 	take(5),
// 	// map((v) => v * 3),
// 	// filter(v => v % 2 === 0),
// 	// take(15),
// 	// takeLast(5)
// 	// takeWhile(v => v < 7)
// 	// scan((acc, v) => acc += v, 0),
// 	reduce((acc, v) => (acc += v), 0)
// );
//
// stream$.subscribe({ next: (v) => console.log('Next: ', v), complete: () => console.log('Complete') });
