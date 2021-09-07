import React from 'react';
import Cart from './Cart';

const news = [
    {
        title: 'Bangladesh reports 275 dengue cases in 24 hrs',
        img: 'https://images.prothomalo.com/prothomalo-english%2F2021-07%2F989e8eec-8115-4e1d-ba4a-e2478afed489%2F75159dd91fe5421db5df7b96dbf44f62_11.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.1',
        description: 'Although no death from dengue was reported in the past 24 hours till early Monday, 275 more people were hospitalised with the mosquito-borne disease, said the Directorate General of Health Services (DGHS), reports UNB. '
    },
    {
        title: 'Bangladesh reports 275 dengue cases in 24 hrs',
        img: 'https://images.prothomalo.com/prothomalo-english%2F2021-07%2F989e8eec-8115-4e1d-ba4a-e2478afed489%2F75159dd91fe5421db5df7b96dbf44f62_11.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.1',
        description: 'Although no death from dengue was reported in the past 24 hours till early Monday, 275 more people were hospitalised with the mosquito-borne disease, said the Directorate General of Health Services (DGHS), reports UNB. '
    },
    {
        title: 'Bangladesh reports 275 dengue cases in 24 hrs',
        img: 'https://images.prothomalo.com/prothomalo-english%2F2021-07%2F989e8eec-8115-4e1d-ba4a-e2478afed489%2F75159dd91fe5421db5df7b96dbf44f62_11.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.1',
        description: 'Although no death from dengue was reported in the past 24 hours till early Monday, 275 more people were hospitalised with the mosquito-borne disease, said the Directorate General of Health Services (DGHS), reports UNB. '
    },
    {
        title: 'Bangladesh reports 275 dengue cases in 24 hrs',
        img: 'https://images.prothomalo.com/prothomalo-english%2F2021-07%2F989e8eec-8115-4e1d-ba4a-e2478afed489%2F75159dd91fe5421db5df7b96dbf44f62_11.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.1',
        description: 'Although no death from dengue was reported in the past 24 hours till early Monday, 275 more people were hospitalised with the mosquito-borne disease, said the Directorate General of Health Services (DGHS), reports UNB. '
    },
    {
        title: 'Bangladesh reports 275 dengue cases in 24 hrs',
        img: 'https://images.prothomalo.com/prothomalo-english%2F2021-07%2F989e8eec-8115-4e1d-ba4a-e2478afed489%2F75159dd91fe5421db5df7b96dbf44f62_11.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.1',
        description: 'Although no death from dengue was reported in the past 24 hours till early Monday, 275 more people were hospitalised with the mosquito-borne disease, said the Directorate General of Health Services (DGHS), reports UNB. '
    },
    {
        title: 'Bangladesh reports 275 dengue cases in 24 hrs',
        img: 'https://images.prothomalo.com/prothomalo-english%2F2021-07%2F989e8eec-8115-4e1d-ba4a-e2478afed489%2F75159dd91fe5421db5df7b96dbf44f62_11.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.1',
        description: 'Although no death from dengue was reported in the past 24 hours till early Monday, 275 more people were hospitalised with the mosquito-borne disease, said the Directorate General of Health Services (DGHS), reports UNB. '
    },
]

const News = () => {
    return (
        <div className='lg:mr-80 mr-10 ml-20'>
            <h2 className='text-xl font-semibold uppercase underline mb-5'>News By Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {news.map(news => (<Cart news={news} />))}
            </div>
        </div>
    );
};

export default News;