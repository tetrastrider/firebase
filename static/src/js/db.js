    const _getid =(e)=>document.getElementById(e)
    const _crear =(e)=>document.createElement(e)
    const _query =(e)=>document.querySelector(e)

    class Database{

        constructor(){
            firebase.initializeApp(config);
            this.data = firebase.firestore();
        }

        delete(dir,i){this.data.collection(dir).doc(i).delete()}

        readAll(dir){ return this.data.collection(dir).get() }

        create(dir,query){

            this.data.collection(dir).data(query,
                e=>{ if(e){console.log("error creando la transaccion"); }else{console.log("transaccion realizada con exito"); } });

        }

        createId(d,i,q){ this.data.collection(d).doc(i).set(q,
                e=>{ if(e){console.log("error creando la transaccion"); }else{console.log("transaccion realizada con exito"); } }) }

        byId(d,i){ return this.data.collection(d).doc(i) }

        update(d,i,q){ this.data.collection(d).doc(i).update(q) }


    }

    DB = new Database;

    DB.data.settings({});


    let refarr = (d)=>{

     _getid('render').appendChild(_crear('ul'))

    let li = _crear('li')
    let x = _crear('div')

    li.setAttribute('data-id',d.id)
     _query('ul').appendChild(li)

    let name = _crear('span')
    name.textContent = d.data().nombre;
    li.appendChild(name)

    let apellido = _crear('span')
    apellido.textContent = d.data().apellido;
    li.appendChild(apellido)

    x.textContent = 'x'
    li.appendChild(x)

    x.addEventListener('click',(e)=>{
      e.stopPropagation()
      let i = e.target.parentElement.getAttribute('data-id')
      DB.delete('usuario',i)
    })    

  };
  
  DB.readAll('usuario').then((snap)=>{ snap.docs.forEach(d=>refarr(d)) });

 
  //DB.byId('usuario','alexander').onSnapshot(d =>refarr(d))



    const Crear_db_user=()=>{

      const _user = {
          nombre:"one",
          apellido:"punch",
          fecha_nacimiento:5177
      }
       DB.createId('usuario','lord2',_user);

    }
//Crear_db_user()

//orderBy('name')
//where('name','==','alex')
DB.update(
  'usuario',
  'lord2',
  {nombre:'motorola'}
  )

console.log(DB.data.collection('csaracteristicas').doc().id)