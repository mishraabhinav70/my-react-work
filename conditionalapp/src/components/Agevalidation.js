import React from 'react'

function Agevalidation() {
    const [isAgeValid, setIsAgeValid] = React.useState(false);

    //1st approach

    // if(isAgeValid){
    //   return (
    //     <div>
    //       <h1>You can vote</h1>
    //     </div>
    //   )
    // }
    // else{
    //   return (
    //     <div>
    //       <h1>You can't vote</h1>
    //     </div>
    //   )
    // }

    //2nd approach

    // let age;
    // if(isAgeValid){
    // age = <div>You can vote</div>
    // }
    // else{
    // age = <div>You can't vote</div>
    // }
    // return (
    // <>
    // {age}
    // </>
    // );


    return (
        <>
            {/*3rd approach using ternary operator use mostly*/}
            {isAgeValid ? <div>You can vote</div> : <div>You can't vote</div>}

            {/*4th approach using logical AND operator use when only give if condition}
            {isAgeValid && <div>You can vote</div>}
            {!isAgeValid && <div>You can't vote</div>*/}
        </>
    );
}

export default Agevalidation
