import React, { useEffect, useReducer, useRef } from 'react';
import styles from './GeopositionStyled.module.css';


const Geoposition = () => {

  const geoPositionReducer = (state, action) => {
    switch (action.type) {
      case "success":
        return {
          ...state,
          positions: action.payload,
        };
      case "error":
        return {
          ...state,
          error: action.payload,
        };
      default:
        throw new Error(`Action not Found!`);
    }
  }

  const useGeoPosition = () => {
    const ref = useRef(null);
    const [state, dispatch] = useReducer(geoPositionReducer, {
      loading: true,
      positions: null,
      error: null,
    });

    useEffect(() => {
      if (!navigator.geolocation) {
        dispatch({ type: "error", payload: "Browser not supported yet!" });
      } else {
        ref.current = navigator.geolocation.watchPosition(
          (position) => {
            dispatch({
              type: "success",
              payload: position.coords,
            });
          },
          (error) =>
            dispatch({
              type: "error",
              payload: error,
            })
        );
      }

      return () => {
        navigator.geolocation.clearWatch(ref.current);
      };
    }, []);

    return state;
  }

  const { positions } = useGeoPosition();

  return (
    <>
      <h2 className={styles.geopositionTitle}>Geoposition</h2>
      <p className={styles.position}>
        Longitude: {positions?.longitude} Latitude: {positions?.latitude}
      </p>
    </>

  );
}

export default Geoposition;