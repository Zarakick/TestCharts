# TestCharts
Code To create charts from json Objects
$(function () {
    
    params=[{tarea:'Radicar Back Office',
             proceso:'', estado:'TRA'},
            {tarea:'Radicar Back Office',
             proceso:'', estado:'TRA'},
     
            {tarea:'Supervisar Operación 2',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Supervisar Operación 2',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Supervisar Operación 2',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Supervisar Operación 2',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Supervisar Operación 2',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Supervisar Operación 2',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},

            {tarea:'Visar y Confirmar Operación',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Visar y Confirmar Operación',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Visar y Confirmar Operación',
             proceso:'Cheque Gerencia Otras Oficinas', estado:'TRA'},
            {tarea:'Visar y Confirmar Operación',
             proceso:'Traslado Sebra Bajando', estado:'TRA'},
            {tarea:'Visar y Confirmar Operación',
             proceso:'Traslado Sebra Bajando', estado:'TRA'},
            {tarea:'Visar y Confirmar Operación',
             proceso:'Traslado Sebra Bajando', estado:'TRA'}];
    
  
    
     function myFunction(dataFromServer){
       var parsedJSON =dataFromServer ;
       for (var i=0;i<parsedJSON.length;i++) {
           // Validar que las tareas sean iguales para agregar contador
            alert(parsedJSON[i].tarea);
         }
 };
    
    myFunction(params);
    
    //Lectura del array de objetos 
    
    
    $('#container').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Tota de radicados'
        },

        xAxis: {
            categories: ['Radicar Back Office', 'Supervisar Operación 2', 'Visar y Confirmar Operación']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Numero de radicados'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Traslado Sebra Bajando',
            data: [0,0,3],
            stack: 'male'
        }, {
            name: 'Cheque Gerencia Otras Oficinas',
            data: [0, 6, 3],
            stack: 'male'
        }, {
            name: 'Operacion no definida',
            data: [2, 0, 0],
            stack: 'male'
        },
         {
            name: 'En Transacción',
            data: [1, 6, 6],
            stack: 'female'
         },{
            name: 'Finalizado',
            data: [1, 0, 0],
            stack: 'female'
        }
                ]
    });
});
