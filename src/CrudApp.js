import React, { useEffect, useState } from 'react';
import { CrudBoard } from './cardboard/board';
import { CrudCard } from './cardboard/card';

function copyMap(map){
    return new Map(map);

}

let animalCount = 0;

function CrudApp(){
    let [animals, setAnimals] = useState(new Map());

    
    function addAnimal(name, type, age){
        console.log("adding animal");

        setAnimals( prevAnimals => {
            let newAnimals = new Map(prevAnimals);
            newAnimals.set(animalCount, { name, type, age });
            return newAnimals;
        });
        
        animalCount += 1;

    }

    function reloadAnimals(){
        console.log("reloading animals");
        console.log(animals);


    }

    function updateAnimal(id, name, type, age){
        animals.set(id, {
            name: name,
            type: type,
            age: age,
            
        });
        setAnimals( copyMap(animals) );
        
    }
    
    function removeAnimal(id){
        console.log("removing animal");
        animals.delete(id);
        setAnimals( copyMap(animals) );
        
    }
    
    function handleUpdateAnimal(id, name, type, age){
        
    }

    function handleAddAnimal(){
        addAnimal("name", "type", "age");

    }

    useEffect( () => {
        [
            ["Buksi", "dog", 4],
            ["Kitti", "cat", 18],
            ["Kolega", "monkey", 19],

        ].forEach(([ name, type, age ]) => {
            addAnimal(name, type, age);

        });

    }, []);
    
    return <>
        <title>CRUD </title>
        <CrudBoard 
            addAction={ handleAddAnimal }
            reloadAction={ reloadAnimals }
            example={ Array.from(animals, item => item)[0] ? Array.from(animals, item => item)[0][1] : {} }

        >
            {
                Array.from(animals, item => item)
                .map( ([key, val]) =>
                    <CrudCard
                        key={ key }
                        title=""
                        modifyAction={ () => handleUpdateAnimal(key, val.name, val.type, val.age) }
                        removeAction={ () => removeAnimal(key) }
                        fields={ val }

                    />
                )
            }
        </CrudBoard>
    </>
}

export { CrudApp };