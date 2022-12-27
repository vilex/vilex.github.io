import { createElement, css } from "vilex";

export const Row = createElement('div', css`
    display: flex;
    flex-direction: row;
    align-items: center;
`)

export const RowBetween = createElement(Row, css`
    justify-content: space-between;
`)