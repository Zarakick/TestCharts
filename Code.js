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
    
    // Modificación 26/05/2015

            
            var operacionPrueba={};
            var tareaPrueba={};
            var estadoPrueba={};
            var mayorNumeroOperaciones={};
            var prueba= new Array();
            var operando = new Array();
            var indexId= new Array();
            var operacion_blanco="Operación no definida";
            
     $.each(params,function(index,value)
            {
            if (value.Idtarea != ""){
                
                if (value.operacion != ""){
                    if(!tareaPrueba.hasOwnProperty(value.Idtarea+"-"+value.tarea)){
                     tareaPrueba[value.Idtarea+"-"+value.tarea]=value.Idtarea+"-"+value.tarea;
                    }
                    
                    if (!operacionPrueba.hasOwnProperty(value.Idtarea+"-"+value.operacion)){
                       operacionPrueba[value.Idtarea+"-"+value.operacion]=1;
                      }
                      else if (operacionPrueba.hasOwnProperty(value.Idtarea+"-"+value.operacion)){
                       operacionPrueba[value.Idtarea+"-"+value.operacion]+=1;
                      }
                      
                   if (!estadoPrueba.hasOwnProperty(value.Idtarea+"-"+value.estado)){
                       estadoPrueba[value.Idtarea+"-"+value.estado]=1;
                      }
                      else if (estadoPrueba.hasOwnProperty(value.Idtarea+"-"+value.estado)){
                       estadoPrueba[value.Idtarea+"-"+value.estado]+=1;
                      }
                      
                }
            }
                 
            });
            
            $.each(operacionPrueba,function (index,value){
            tareaAsociada=index.split('-');
            propiedad=tareaAsociada[0];
            if (!mayorNumeroOperaciones.hasOwnProperty(propiedad)){
                       mayorNumeroOperaciones[propiedad]=1;
                      }
                      else if (mayorNumeroOperaciones.hasOwnProperty(propiedad)){
                       mayorNumeroOperaciones[propiedad]+=1;
                      }
                
            });
            
            var arr = Object.keys( mayorNumeroOperaciones ).map(function ( key ) { return mayorNumeroOperaciones[key]; });
            var min = Math.min.apply( null, arr );
            var max = Math.max.apply( null, arr );
            
            console.log(max);
            
            
    /// --------------------------------------------------------------        
    
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
