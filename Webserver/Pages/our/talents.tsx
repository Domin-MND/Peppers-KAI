// Configs
// Конфиги
import talentsConfig from "../../Configs/Pages/our/talents.json";

// Components
// Компоненты
import Carousel from "react-bootstrap/Carousel";

// SCSS/SASS
import styles from "../../Public/Styles/Imports/Pages/our/talents.module.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fsi from "@fortawesome/free-solid-svg-icons";

function Carousels(props: any) {
    let carousel: any = [];

    props.item.Carousel.forEach(function (item) {
        carousel.push((
            <Carousel.Item key={item["Full Name"]}>
                <img
                    src={item.Media}
                    alt={item["Full Name"]}
                    width={300}
                    height={300}
                />
                <Carousel.Caption>
                    <p>{item["Full Name"]}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ));
    });

    return (
        <Carousel className={styles.carousel}>
            {carousel}
        </Carousel>
    );
}

function Content(props: any) {
    let paragraphs: any = [];
    props.content.forEach(function (item) {
        paragraphs.push((
            <p key={item} dangerouslySetInnerHTML={{ __html: item }} />
        ))
    });
    return (
        <>
            {paragraphs}
        </>
    );
}

function Side(props: any) {
    if (talentsConfig.Sections.indexOf(props.item) % 2 == 1) {
        return (
            <>
                <FontAwesomeIcon icon={fsi[props.item.Attribute]} className={styles.fai} />
                <div className={styles.contentSide}>
                    <h3>
                        {props.item.Header}
                    </h3>
                    <Content content={props.item.Content} />
                </div>
                <div className={styles.carouselSide}>
                    <Carousels item={props.item} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <FontAwesomeIcon icon={fsi[props.item.Attribute]} className={styles.fai} />
                <div className={styles.carouselSide}>
                    <Carousels item={props.item} />
                </div>
                <div className={styles.contentSide}>
                    <h3>
                        {props.item.Header}
                    </h3>
                    <Content content={props.item.Content} />
                </div>
            </>
        )
    }
}

function Sections() {
    let sections: object[] = [];
    let classes: Array<string> = [];
    talentsConfig.Sections.forEach(function (item) {
        item.Classes.forEach(function (itemClass) {
            classes.push(styles[itemClass]);
        });
        sections.push((
            <section className={classes.join(' ')} key={item.Header}>
                <Side item={item} />
            </section>
        ));
        classes = [];
    });
    return (
        <>
            {sections}
        </>
    );
}

function Landing() {
    return (
        <div id={styles.landingContainer}>
            <span>
                {talentsConfig.Landing.Title}
            </span>
        </div>
    )
}

export default function Talents() {

    const end_section = {
        justifyContent: 'start'
    }

    return (
        <>
            <Landing />
            <Sections />
            <section
                className={[styles.lightGray, styles.box].join(' ')}
                style={end_section}
            >
                <h4>
                    Взгляни на сайт иначе, посмотри с десктоп версии!
                </h4>
            </section>
        </>
    )
}