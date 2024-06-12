//import {useRef} from 'react';
//import Submit from "./Submit.jsx";
//
//async function actionDelay(ref) {
//    await new Promise((resolve) => {
//        setTimeout(() => {
//            resolve();
//        }, 1000);
//    });
//    ref.current.reset();
//}
//export default function Submited() {
//
//    const ref = useRef(null);
//
//    return (
//        <form ref={ref} action={actionDelay}>
//            <Submit/>
//        </form>
//    );
//}