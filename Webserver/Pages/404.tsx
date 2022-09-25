import box from "../Public/Styles/Imports/Global/box.module.scss";
import notFound from "../Public/Styles/Imports/Placeholders/NotFound.module.scss";

export default function NotFound() {
    return (
        <>
            <div className={[box.centerize, notFound.notFound].join(' ')}>
                <div>
                    <p>404!</p>
                    <p>Мы ничего не нашли...</p>
                </div>
            </div>
        </>
    )
}