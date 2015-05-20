setTimeout(function(){

    var network_state = navigator.connection.type;

    console.log('Connection Type');

    var states = {};

    states[Connection.UNKNOWN] = 'Unknow';
    states[Connection.ETHERNET] = 'ETHERNET';
    states[Connection.WIFI] = 'WI-FI';
    states[Connection.CELL_2G] = 'CELL 2G';
    states[Connection.CELL_3G] = 'CELL 3G';
    states[Connection.CELL_4G] = 'CELL 4G';
    states[Connection.NONE] = 'NONE';

    document.getElementById('network-information').innerHTML = '<h2> Se conecta con: ' + states[network_state] + '</h2>';

}, 500);

