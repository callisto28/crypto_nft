import { convert } from "../lib/api";
import React, { useState, useEffect } from "react";



export default function Convert({ data }) {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Convert</h1>
                        <div className='form-group'>
                            <label htmlFor='from'>From</label>
                            <select className='form-control' id='from'>
                                <option value='USD'>USD</option>
                                <option value='EUR'>EUR</option>
                                <option value='GBP'>GBP</option>
                                <option value='JPY'>JPY</option>
                                <option value='CAD'>CAD</option>
                                <option value='AUD'>AUD</option>
                                <option value='CHF'>CHF</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='to'>To</label>
                            <select className='form-control' id='to'>
                                <option value='USD'>USD</option>
                                <option value='EUR'>EUR</option>
                                <option value='GBP'>GBP</option>
                                <option value='JPY'>JPY</option>
                                <option value='CAD'>CAD</option>
                                <option value='AUD'>AUD</option>
                                <option value='CHF'>CHF</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='amount'>Amount</label>
                            <input type='number' className='form-control' id='amount' placeholder='Amount' />
                        </div>
                        <button className='btn btn-primary'>Convert</button>
                    </div>
                </div>
            </div>


        </>

    )



}


export async function getStaticProps() {
    const data = await convert();
    return {
        props: {
            data
        }
    }
}