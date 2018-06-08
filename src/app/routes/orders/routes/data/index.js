import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import DataTable from './Components/DataTable';

const DataTables = () => {
    return (
        <div className="row animated slideInUpTiny animation-duration-3">
            <CardBox styleName="col-12" cardStyle=" p-0" heading={<IntlMessages id="table.sortingTable"/>}
                     headerOutside>
                <DataTable/>
            </CardBox>
        </div>

    );
};

export default DataTables;

