import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import i18nextHttpBackend from 'i18next-http-backend'
import {Provider} from "react-redux";
import store from "./redux/store";


i18n
    .use(initReactI18next)
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .init({
        supportedLngs: ['en', 'am', 'ru'],
        fallbackLng: 'en',
        detection: {
            order: ['cookie'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    })

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={true}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
