import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type : ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type    : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload : collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type    : ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload : errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    // // Observable pattern
    // collectionRef.onSnapshot(
    //   async (snapShot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //     console.log(collectionsMap);
    //     fetchCollectionsSuccess(collectionsMap);
    //   },
    //   (error) => dispatch(fetchCollectionsFailure(error.message))
    // );

    // Promise pattern
    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));

    // // Fetch/API pattern
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/e-commerce-react-8120b/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json)
    //   .then((collections) => console.log(collections));
  };
};
