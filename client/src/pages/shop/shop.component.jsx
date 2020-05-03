import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(
    () => {
      fetchCollectionsStart();
    },
    [ fetchCollectionsStart ]
  );

  return (
    <Suspense fallback={Spinner}>
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
