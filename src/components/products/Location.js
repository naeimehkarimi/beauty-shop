import React, { Fragment, useState, useRef, useCallback } from 'react';
import {
    Marker,
    GoogleMap,
    withScriptjs,
    withGoogleMap,
} from 'react-google-maps';

import { useEffect } from 'react';
import { map } from 'lodash';
import { NavLink } from 'react-router-dom';

const Location1 = () => {
    const [center, setCenter] = useState({ lat: 35.6892, lng: 51.389 });
    const refMap = useRef(null);
    const handleBoundsChanged = () => {
        const mapCenter = refMap.current.getCenter(); //get map center
        setCenter(mapCenter);
        var b = JSON.stringify(center);
        console.log('22222');
        console.log(b);
        var c = JSON.parse(b);
        console.log(c.lat);
        console.log(c.lng);
    };
    useEffect(() => {}, []);
    return (
        <GoogleMap
            ref={refMap}
            defaultZoom={12}
            defaultCenter={center}
            onBoundsChanged={useCallback(handleBoundsChanged)}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};
const WrappedMap = withScriptjs(withGoogleMap(Location1));
export default function PickLocation() {
    return (
        <div className='container'>
            <div className='row w-100 my-5 justify-content-center '>
                <div className='col-8 py-4 px-2 mb-4 payment  text-right'>
                    <h2>آدرس جدید</h2>
                    <p className=''>
                        لطفا موقعیت مکانی را بر روی نقشه وارد کنید
                    </p>
                    <div className='row payment-location justify-content-center'>
                        <div className='col-md-10 payment-location w-100'>
                            <WrappedMap
                                googleMapURL={
                                    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBcdvjVTWIRRVt7AykQRGkp_7y1X2AB-20'
                                }
                                loadingElement={
                                    <div style={{ height: `100%` }} />
                                }
                                containerElement={
                                    <div style={{ height: `400px` }} />
                                }
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>
                    <div className='row w-100 p-0 m-0 location-submit justify-content-center'>
                        <div className='col-md-8 text-center pt-3 d-flex justify-content-center '>
                            <NavLink
                                to='/paymentinfo'
                                type='button'
                                className='w-50 text-white  btn btn-danger'
                            >
                                ثبت و افزودن جزئیات
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
