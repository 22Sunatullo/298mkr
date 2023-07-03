import React, { useState } from 'react';
import OurAdvantagesCard from "./OurAdvantagesCard/OurAdvantagesCard";
import { OurData } from "./OurAdvantagesData";
import style from './OurAdvantages.module.scss';

const OurAdvantages = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.container} id="advantages">
            <div className={style.title}>
                <h1>Наши преимущества</h1>
            </div>
            <div className={style.cardGrid}>
                {OurData.map(el => {
                    return <OurAdvantagesCard key={el.id} {...el} />;
                })}
            </div>

        </div>
    );
};

export default OurAdvantages;