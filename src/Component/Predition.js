import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Store/Provider';

const Predition = () => {

    const {result} = useContext(Context)

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', height: '90vh', padding: 20 }}>
                {
                    (result).map((r, i) => (
                        <div className='res-predict' key={i}>
                            <img src={r.image} style={{ height: '200px', width: '200px', margin: 20, borderRadius: 2, border: '5px solid #eaeaea' }} alt='' />
                            <div style={{ margin: 20 }}>
                                <p >Kết quả: <p style={{ fontWeight: 'bolder' }}>{r.type}</p></p>
                                <Link className='link'>
                                    <p style={{ textDecoration: 'underline', color: 'blue' }}>Đi đến sản phẩm <i class="bi bi-arrow-right"></i></p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}


export default Predition;


