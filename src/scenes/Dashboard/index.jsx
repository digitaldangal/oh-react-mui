import React from 'react';
// import PropTypes from 'prop-types';
// import AppFrame from '../../components/AppFrame';
import PatientRegistration from '../PatientRegistration'

const Dashboard = props => (
    // <AppFrame username="Dr. Housee" hospitalName="Hospital St. Democrito" />
    //<AppFrame username={props.username} hospitalName={props.hospitalName} />
    <PatientRegistration username={props.username} hospitalName={props.hospitalName} />
);

export default Dashboard;