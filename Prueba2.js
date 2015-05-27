 $.each(params,function(index,value)
            {
            if (value.Idtarea != ""){
                
                if (value.operacion != ""){
                    if(!tareaPrueba.hasOwnProperty(value.Idtarea+"-"+value.tarea)){
                     tareaPrueba[value.Idtarea+"-"+value.tarea]=value.tarea;
                    }
                    
                    if (!operacionPrueba.hasOwnProperty(value.tarea+"-"+value.operacion)){
                       operacionPrueba[value.tarea+"-"+value.operacion]=1;
                      }
                      else if (operacionPrueba.hasOwnProperty(value.tarea+"-"+value.operacion)){
                       operacionPrueba[value.tarea+"-"+value.operacion]+=1;
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
            valuesOperacion.push(value);
            
            if (!mayorNumeroOperaciones.hasOwnProperty(propiedad)){
                       mayorNumeroOperaciones[propiedad]=1;
                      }
                      else if (mayorNumeroOperaciones.hasOwnProperty(propiedad)){
                       mayorNumeroOperaciones[propiedad]+=1;
                      }
             
            });
            
            
            var arr = Object.keys( mayorNumeroOperaciones ).map(function ( key ) { return mayorNumeroOperaciones[key]; });
            var max = Math.max.apply( null, arr );
            //tareaMayorOperaciones;
            
            
//            $.each(operacionPrueba,function (index,value){
//                tareaSeparada=index.split('-');
//                tareaPropia=tareaSeparada[0];
//                var temp=new Array();
//                $.each(operaciones,function(ind,val){
//                var testtemp=tareaPropia+"-"+ind;
//                    if (testtemp==index){
//                        temp.push(value);
//                    } else{
//                     temp.push(0);
//                    }
//                });
//                
//                dataSeries.push({name:tareaSeparada[1],data:temp,stack:'tarea'});
//               
//            });
//            console.log(dataSeries);
             
            //Crear arrays de valores ceros 
            
            //Array de operaciones
            var tareasZero= (Object.keys(tareaId));
            var operacionesZero=(Object.keys(operacionPrueba));
            var cantidadOperacionesZero=(Object.keys(operacionPrueba));
            var arrayOperacionesZero=(tareasZero.length)*(operacionesZero.length);
            zerosArrayOperaciones=new Array(arrayOperacionesZero+1).join('0').split('').map(parseFloat);
            
            // Array de estados 
            zerosArrayEstados=new Array(tareasZero.length+1).join('0').split('').map(parseFloat);
           
            
            
            //iteraciones para agregar en las matrices
            var i=1;
            var j=0;
            var k=0;
            
            $.each(tareaActual,function (index,value){
                for (var prop in operaciones){
                    if (index+"-"+prop==operacionesZero[j]){
                        zerosArrayOperaciones[i-1]=valuesOperacion[k];
                        i=i+3;
                        console.log(valuesOperacion);
                        k=k+1;
                    }
                    j++;
                }
                j=0;
            });
             
