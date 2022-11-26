import { of } from "rxjs";
import FilmData from "../models/FilmData";


const data: FilmData[] = [
    {
        img: '',
        title: 'testowy1',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy2',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy3',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy4',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy5',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy6',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy7',
        rating: '8',
        short_description: ''
    },
    {
        img: '',
        title: 'testowy8',
        rating: '8',
        short_description: ''
    },
];

export default of(data);

