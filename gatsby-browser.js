import React from 'react';
import { Layout } from './src/components/Layout/layout';
import { useRedux } from './src/helpers/useRedux';
import './src/static/styles/app.scss';
import './src/styles/global.css'
import wrapWithProvider from "./wrap-with-provider";

export const wrapRootElement = wrapWithProvider;

