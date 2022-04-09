import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

//======================================================================================================================
// Subject

// document.addEventListener('click', () => {
// 	const stream$ = new Subject();
//
// 	stream$.next('Hello');
// 	stream$.next('Rx');
// 	stream$.next('JS');
//
//     stream$.subscribe((v) => console.log(v));
// });

//======================================================================================================================
// BehaviorSubject

// document.addEventListener('click', () => {
// 	const behaviourStream$ = new BehaviorSubject('first');
//
// 	behaviourStream$.next('Hello');
// 	behaviourStream$.next('Rx');
// 	behaviourStream$.next('JS');
//
// 	behaviourStream$.subscribe((v) => console.log('behaviourStream$', v));
// });

//======================================================================================================================
// ReplaySubject

document.addEventListener('click', () => {
    const replayStream$ = new ReplaySubject(2);

    replayStream$.next('Hello');
    replayStream$.next('Rx');
    replayStream$.next('JS');

    replayStream$.subscribe((v) => console.log('replayStream$', v));
});