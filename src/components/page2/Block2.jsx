import img1 from '../photos/App1.jpeg';
import img2 from '../photos/App2.jpeg';
import img3 from '../photos/App3.jpeg';

import styleBlock2 from './block2.module.css';

const Block2 = () => {
    return (
        <div className={styleBlock2.mainBlock}>
            <h4 className={styleBlock2.headText}>Общий план здания</h4>
            {/* First block */}
            <div className={styleBlock2.firstBlock}>
                <div className={styleBlock2.firstBlockPict}>
                    <img
                        src={img1}
                        alt="Pict1"
                        className={styleBlock2.firstBlockPictSize}
                    />
                </div>
                <div className={styleBlock2.firstBlockText}>
                    <p className={styleBlock2.textStyle}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Здание 4-х этажное, плюс подземный этаж, где находятся
                        паркинг с одним машиноместом под каждую квартиру,
                        бассейн, сауны, хамам. Также в подземном помещении есть
                        бомбоубежище. В комплексе всего 42 квартиры, площадью
                        180-270 кв. метров, большая часть которых - дуплексы,
                        площадью от 220 кв.м, с окнами на обе стороны здания и
                        двумя террасами. При каждой квартире есть кладовое
                        помещение с отдельным входом рядом с квартирой.
                        Общественные зоны (ресепшн, салон красоты, магазин,
                        кафе, офисы) расположены на нулевом этаже.
                    </p>
                </div>
            </div>
            <h4 className={styleBlock2.headText}>
                План размещения помещений в дуплексах
            </h4>
            {/* Second block */}
            <div className={styleBlock2.secondBlock}>
                <div className={styleBlock2.secondBlockText}>
                    <p className={styleBlock2.textStyle}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Основные помещения, как и входы в квартиры, расположены
                        на 1 и 2 этажах. На данном уровне находятся кухня, зал,
                        кабинет, гостевой туалет и малая терраса. В квартирах
                        первого этажа уровень спален находится на нулевом этаже
                        (наземный уровень), в квартирах второго уровня - на
                        уровне 3 этажа.
                    </p>
                </div>
                <div className={styleBlock2.secondBlockPict}>
                    <img
                        src={img3}
                        alt="Pict1"
                        className={styleBlock2.secondBlockPictSize}
                    />
                    <h6 className={styleBlock2.titlePict}>
                        Спальни (нулевой и 3 этажи)
                    </h6>
                </div>
            </div>
            {/* Third block */}
            <div className={styleBlock2.thirdBlock}>
                <div className={styleBlock2.thirdBlockPict}>
                    <img
                        src={img2}
                        alt="Pict1"
                        className={styleBlock2.thirdBlockPictSize}
                    />
                    <h6 className={styleBlock2.titlePict}>
                        Основные помещения (1 и 2 этажи)
                    </h6>
                </div>
                <div className={styleBlock2.thirdBlockText}>
                    <p className={styleBlock2.textStyle}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Второй
                        уровень квартир (нулевой этаж квартир 1-го этажа и 3
                        уровень квартир 2-го этажа) включает 3 спальни, с
                        выходом на большую террасу, 2 туалета, постирочный блок
                        (стиральная и сушильная машины), гардеробную в хозяйской
                        спальне и сауну. Площадь помещений спален на нулевом
                        уровне больше, чем в спальнях 3-го уровня, также, больше
                        плошадь (наземной) террасы (40 кв.м).
                        <br />
                        <i>Примечание. Террасы на рисунке не показаны.</i>
                    </p>
                </div>
            </div>
            {/* Fourth block */}
            <h4 className={styleBlock2.headText}>Уровень готовности квартир</h4>
            <div className={styleBlock2.fourthBlockText}>
                <p className={styleBlock2.textStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    При продаже квартиры имеют следующую готовность.
                    <br />
                    <ins>Кухня.</ins> Потолок, пол (керамика) - полностью
                    готовы. Стены подготовлены под чистовую отделку. Выполнены
                    выводы под слив и воду. После оформления договора
                    купли-продажи устанавливается кухонный блок, предлагаемый в
                    2-х стандартных вариантах, включающий сантехнику,
                    посудомоечную машину и духовой шкаф. Стены окрашиваются под
                    выбранный покупателем цвет.
                    <br />
                    <ins>Туалеты.</ins> Пол, потолок, стены полностью готовы.
                    Выполнены выводы под слив и воду. После оформления договора
                    купли-продажи устанавливаются тумба под мойку, унитаз,
                    душевая кабина. При желании покупателя вместо душевой кабины
                    может быть установлена ванная (джакузи). <br />
                    <ins>
                        Жилые помещения (комнаты, коридоры, гардеробная).
                    </ins>{' '}
                    Потолок полностью готов, стены, пол подготовлены под
                    чистовую отделку. После оформления договора купли-продажи
                    выполняется разводка электрики, установка розеток и
                    выключателей, по выбранному покрытию пола (вид ламината,
                    керамика) застилается пол, по выбранным цветам производится
                    покраска стен.
                    <br />
                    <ins>Лестница.</ins>Подготовленный каркас. По желанию
                    заказчика выполнятся либо из дерева, либо из керамики.
                    <br />
                    <ins>Сауна.</ins>Подготовлена под отделку по желанию
                    заказчика.
                    <br />
                    <ins>Постирочный блок.</ins> Подготовленная ниша под
                    установку стиральной и сушильной машин. Устанавливаются
                    после определения заказчиком оформления ниши (вариант
                    шкафа).
                    <br />
                    <ins>Террасы.</ins>Террасы 3-го этажа полностью готовы:
                    стены окрашены, на полу - керамическая плитка, светильники,
                    выключатели - установлены. Террасы 0-го этажа - без
                    напольного покрытия. По желанию покупателя покрытие
                    выполняется либо в варианте полного керамического покрытия,
                    либо комбинации частичного покрытия керамической плиткой,
                    остальное грунт под зеленые насаждения. Также на терассе
                    устанавливается джакузи.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Все
                    перечисленные выше работы выполняются продавцом. Стоимость
                    приобретения всего перечисленного оборудования, включая его
                    установку, также относится к застройщику. Стандартный срок
                    выпонения работ - 45 дней. Стоимость выбранных материалов и
                    оборудования заказчиком должна примерно соответствовать
                    материалам, используемым при стандартной отделке,
                    примененной в здании. Выбор каких-либо особых материалов или
                    оборудования, стоимость которых значительно выше
                    стандартных, нестандартное решение кухонного блока (шкафы с
                    островом), перепланировка помещений, все это потребует
                    доплаты заказчика. Следует отметить, что стандартный уровень
                    используемых материалов и оборудования сам по себе высок:
                    используемые ламинат, краски и керамика выше среднего
                    диапазона цен, марки оборудования и сантехники - Samsung,
                    VitrA.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Таким образом, при отсутствии особых пожеланий заказчика,
                    через 45 дней после покупки, квартира сдается полность
                    подготовленной под проживание с отделкой под индивидуальный
                    дизайн. Как видно, для этого предоставлены достаточно
                    широкие возможности, которые редко предоставляются на рынке
                    продажи квартир.
                </p>
            </div>
        </div>
    );
};

export default Block2;
