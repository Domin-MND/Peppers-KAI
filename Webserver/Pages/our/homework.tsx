import box from "../Public/Styles/Imports/Global/box.module.scss";
import inDevelopment from "../Public/Styles/Imports/Placeholders/InDevelopment.module.scss";

export default function Homework() {
    return (
        <>
            <div className={[inDevelopment.inDevelopment, box.centerize].join(' ')}>
                В разработке!
            </div>
        </>
    )
}